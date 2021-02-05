import  {getTreeByPreAndMid,getTreeByPostAndMid} from './还原二叉树.js';

import { deepTraversal, deepSearch } from "./深度.js";

import { breadthTraversal,breadthSearch} from './广度.js';

// var pre = 'GDAFEMHZ';  //根 左 右
// var mid = 'ADEFGHMZ';  //左 根 右
// var post = 'AEFDHZMG'; //左 右 根

var pre = 'abfedx';
var mid = 'fbeadx';

var root = getTreeByPreAndMid(pre,mid)
console.log(root)


// deepTraversal(root)

// var flag = deepSearch(root,'Z')
// console.log(flag)


// var flag = breadthTraversal(root);
// console.log(flag)





// var flag = breadthSearch([root],'V');
// console.log(flag)




