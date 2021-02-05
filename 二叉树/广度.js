
/**
 * 
 * @param {Array} roots 
 * 广度遍历
 */

export function breadthTraversal(roots){
    if(roots.length === 0 ) return null;
    let  next = [];
    for (const root of roots) {
        console.log(root.value)
        root.left && next.push(root.left);
        root.right && next.push(root.right);
    }
    breadthTraversal(next)
}

var result = [];
var flag = 1;
export function breadthTraversal(root) {
    return aa([root])
};

function aa(roots) {
    if (roots.length === 0) return null;
    let next = [];
    let arr = []
    console.log(flag)
    for (const root of roots) {
        console.log(root.value)
        if (flag % 2 === 1) {
            arr.push(root.value)
        } else if (flag % 2 === 0) {
            console.log('object')
            arr.unshift(root.value)
        }
        root.left && next.push(root.left);
        root.right && next.push(root.right);
    }
    console.log(arr)
    flag++;
    result.push(arr)
    aa(next)
    return result;
}

/**
 * 
 * @param {Array} roots 
 * @param {*} target 
 * 广度搜索
 */
export function breadthSearch(roots,target){
    if(roots.length === 0 ) return false;
    let next = [];
    for (const root of roots) {
        if(root.value === target) return true
        root.left && next.push(root.left);
        root.right && next.push(root.right);
    }
    return breadthSearch(next,target)
}