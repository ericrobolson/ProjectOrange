import { Component, OnInit } from '@angular/core';
import { PGraph } from '../shared/models/PGraph';
import { PNode } from '../shared/models/pNode';

@Component({
  selector: 'app-graph-builder',
  templateUrl: './graph-builder.component.html',
  styleUrls: ['./graph-builder.component.css']
})
export class GraphBuilderComponent implements OnInit {

  graph: PGraph;

  constructor() {
    this.graph = new PGraph();
    this.graph.title = "A title";
    this.graph.id = "12345";

    for (let i = 0; i < 10; i++){
      let node = new PNode();
      node.title = i.toString();

      this.graph.nodes.push(node);
    }
   }

  

  ngOnInit() {
  }

}
