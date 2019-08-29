// Based on https://codeburst.io/promises-for-the-web-worker-9311b7831733

const resolves = {};
const rejects = {};
let globalMsgId = 0;

// Activate calculation in the worker, returning a promise
function sendMsg<TInput, TOutput>(payload: TInput, worker: Worker){
  const msgId = globalMsgId++;
  const msg = {
    id: msgId,
    payload
  };
  return new Promise<TOutput>((resolve, reject) => {
    // save callbacks for later
    resolves[msgId] = resolve;
    rejects[msgId] = reject;
    worker.postMessage(msg);
  }) ;
}

// Handle incoming calculation result
function handleMsg(msg: any) {
  const {id, err, payload} = msg.data;
  if (payload) {
    const resolve = resolves[id];
    if (resolve) {
      resolve(payload);
    }
  } else {
    // error condition
    const reject = rejects[id]
    if (reject) {
        if (err) {
          reject(err);
        } else {
          reject('Got nothing');
        }
    }
  }

  // purge used callbacks
  delete resolves[id];
  delete rejects[id];
}

// Wrapper class
export class PromiseWorker<TInput, TOutput> {
  private worker: Worker;

  constructor(workerPath: string) {
    this.worker = new Worker('src/js/GameWorker.js');
    this.worker.onmessage = handleMsg;
  }

  terminate(): void {
    this.worker.terminate();
  }

  oche(value: TInput) : Promise<TOutput> {
    return sendMsg<TInput, TOutput>(value, this.worker);
  }
}
