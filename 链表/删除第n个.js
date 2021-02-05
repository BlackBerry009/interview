var Node = function (val) {
    this.val = val;
    this.next = null;
}

var a = new Node('a');
var c = new Node('c')
var h = new Node('h')
var o = new Node('o')
var t = new Node('t')

a.next = c;
c.next = h;
h.next = o;
o.next = t;

function deleteN(head, n) {
    if(n<=0) return head;
    var first = head;
    var second = head;
    while (n--) {
        first = first.next;
    }
    if (!first) return head.next;
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return head;
}

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if(!head) return null;
    if(k <= 0) return null;
    var first = head;
    var second = head;
    
    while(k>0 && first != null){
        first = first.next;
        k--;
    }
    if(first === null && k>0) return null;
    
    while(first){
        first = first.next;
        second = second.next
    }
   
    return second
}


// console.log(deleteN(a, 0))