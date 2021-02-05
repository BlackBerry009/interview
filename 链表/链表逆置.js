var Node = function(val){
    this.val = val;
    this.next = null;
}

var a = new Node('a');
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
a.next = b;
b.next = c;
c.next = d;
d.next = e;

function reverseList(head){
    //一个节点
    if(!head || !head.next) return head;
    // 二个节点
    if(head.next.next === null){
        var newHead = head.next;
        head.next.next = head;
        head.next = null;
        return newHead;
    }
    // 多个节点
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}




