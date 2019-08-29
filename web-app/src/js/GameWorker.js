// Simulate lengthy calculation or an async call
function doCalculation(data, cb) {
  let result = null, err = null
  
  if (typeof data === 'string') {
    result = data.split('').reverse().join('')
  } else {
    err = 'Not a string'
  }
  const delay = Math.ceil(Math.random() * 1000)
  setTimeout(function() {
    cb(err, result)
  }, delay)
}

// Handle incoming messages
self.onmessage = function(msg) {
  const {id, payload} = msg.data
  
  doCalculation(payload, function(err, result) {
    const msg = {
      id,
      err,
      payload: result
    }
    self.postMessage(msg)
  })
}