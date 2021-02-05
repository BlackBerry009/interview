/**
 * @param {*} root 根结点
 * 深度遍历
 */
export function deepTraversal(root){
    if(!root) return null;
    console.log(root.value)
    deepTraversal(root.left);
    deepTraversal(root.right);
}

/**
 * 
 * @param {*} root  根结点
 * @param {*} target 目标值
 * 深度搜索
 */
export function deepSearch(root,target){
    if(!root) return false;
    if(root.value === target) return true;
    return deepSearch(root.left,target) || deepSearch(root.right,target)
}

