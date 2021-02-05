/**
 * 广度遍历
 * @param {*} roots 
 */
export function breadthTraversal(roots){
    if(roots.length === 0) return null;
    var next = [];
    for (const root of roots) {
        console.log(root.value)
        next.push( root.neighbors );
    }
    next.forEach( item => {
        breadthTraversal(item)
    })
}

/**
 * 广度搜索
 * @param {*} roots 
 * @param {*} target 
 */
export function breadthSearch(roots,target){
    if(roots.length === 0) return false;
    var next = [];
    for (const root of roots) {
        if(root.value === target) return true;
        next.push( root.neighbors );
    }
    for (const item of next) {
        return breadthSearch(item,target)
    }
}
