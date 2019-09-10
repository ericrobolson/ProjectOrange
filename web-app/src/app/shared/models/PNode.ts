export class PNode {
    title: string;
    id: string;

    inputs: any[] = []; // TODO: actually figure out; maybe pointer/message promise/observable + forkJoin?. In actuality, this is just a json representation, ya?
    outputs: any[] = []; // TODO: actually figure out; maybe pointer/message promise/observable + forkJoin?. In actuality, this is just a json representation, ya?

    public IsEmpty(): boolean {
        return this.inputs.length <= 0 && this.outputs.length <= 0;
    }
}