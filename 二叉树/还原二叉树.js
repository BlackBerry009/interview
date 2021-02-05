
// var pre = 'GDAFEMHZ';  //根 左 右
// var mid = 'ADEFGHMZ';  //左 根 右
// var post = 'AEFDHZMG'; //左 右 根

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

export function getTreeByPreAndMid(pre,mid){
    if(!pre.length || !mid.length) return null;
    if (pre.length == 0 || mid.length == 0) return null;
    var root = new Node( pre[0] );
    var rootIndex = mid.indexOf(root.value)
    var mid_left = mid.substring(0,rootIndex)
    var mid_right = mid.substring(rootIndex+1)
    var pre_left = pre.substring(1,rootIndex+1);
    var pre_right = pre.substring(rootIndex+1)
    root.left = getTreeByPreAndMid(pre_left,mid_left);
    root.right = getTreeByPreAndMid(pre_right,mid_right)
    return root;
}



export function getTreeByPostAndMid(post,mid){
    if(!post.length || !mid.length) return null;

    var root = new Node(post[post.length - 1]);
    var rootIndex = mid.indexOf(root.value);
    var mid_left = mid.substring(0,rootIndex);
    var mid_right = mid.substring(rootIndex+1);
    var post_left = post.substring(0,rootIndex)
    var post_right = post.substring(rootIndex,post.length - 1);
    root.left = getTreeByPostAndMid(post_left,mid_left);
    root.right = getTreeByPostAndMid(post_right,mid_right);
    return root
}


