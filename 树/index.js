import {breadthTraversal,breadthSearch} from './广度.js'
import { deepTraversal,deepSearch } from './深度.js'

function Node(value){
    this.value = value;
    this.neighbors = [];
}

var node1 = new Node(12);
var node2 = new Node(67);
var node3 = new Node(4);
var node4 = new Node(8);
var node5 = new Node(0);
var node6 = new Node(1);
var node7 = new Node(5);
var node8 = new Node(11);
var node9 = new Node(43);

node1.neighbors.push(node2,node3,node4);

node2.neighbors.push(node5,node6,node7);
node4.neighbors.push(node8,node9);

console.log(node1)

// breadthTraversal([node1])

// var flag = breadthSearch([node1],8)
// console.log(flag)

// deepTraversal(node1)

// var flag = deepSearch(node1,1)
// console.log(flag)


function compare(root1,root2){
    
}
