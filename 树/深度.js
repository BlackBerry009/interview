/**
 * 深度遍历
 * @param {*} root 
 */
export function deepTraversal(root){
    if(!root) return null;
    console.log(root.value)
    root.neighbors.forEach( item => {
        deepTraversal(item)
    })
}


/**
 * 深度搜索
 * @param {*} root 
 * @param {*} target 
 */
export function deepSearch(root,target){
    if(!root) return false;
    if(root.value === target) return true;
    if(root.neighbors.length === 0) {}
    for (const item of root.neighbors) {
        if(item === null) return null;
        console.log(item)
        return deepSearch(item,target)
    }
}