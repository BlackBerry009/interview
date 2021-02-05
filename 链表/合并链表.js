// 合并有序链表

var Node = function(val){
    this.val = val;
    this.next = null;
}

var a = new Node('a');
var c = new Node('c')
var h = new Node('h')
var o = new Node('o')
var t = new Node('t')

a.next = o;


c.next = h;
h.next = t;

function combine(head1,head2){
    if(!head1) return head2;
    if(!head2) return head1;
    var head;
    if(head1.val < head2.val){
        head = head1;
        head.next = combine(head1.next,head2)
    } else {
        head = head2;
        head.next = combine(head1,head2.next)
    }
    return head;
}