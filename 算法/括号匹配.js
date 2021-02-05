


// var str = '()[]{}';
var str = '(('
// var str = '([)]';

function isValid(str) {
    var mp = new Map([
        [
            '{', 1
        ], [
            '}', -1
        ], [
            '[', 2
        ], [
            ']', -2
        ], [
            '(', 3
        ], [
            ')', -3
        ]
    ])
    var arr = str.split('');
    var result = [];
    arr.forEach(item => {
        //括号相等
        if( mp.get( ...result.slice(-1) ) + mp.get(item) === 0){
            result.pop()
        } else {
            result.push(item)
        }
    })
    return result.length === 0;
}

var flag = isValid(str)
console.log(flag)