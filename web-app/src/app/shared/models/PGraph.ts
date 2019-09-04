import { PNode } from './pNode';

export class PGraph {
    nodes: PNode[] = [];

    startNodeIndex: number = -1;
    endNodeIndex: number = -1;

    nextGraph: PGraph = null;
}
