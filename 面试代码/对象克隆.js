var obj = {
    class: 18,
    name: 'lyg',
    arr: [1,2,3],
    friends: {
        name: 'hh',
        age: 10,
        clothes: {
            color: 'red'
        }
    }
}

function deepClone(origin){
    if(typeof origin != 'object') return origin;
    var target = Object.prototype.toString.call(origin) === '[object Array]' ? [] : {};
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            target[prop] = typeof origin[prop] === 'object' ? deepClone(origin[prop]) : origin[prop];
        }
    }
    return target;
}


function deepClone( origin,target = {} ) {
    for (const prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if(typeof origin[prop] === 'object'){
                target[prop] = Object.prototype.toString.call(origin) === '[object Array]' ? [] : {};
                deepClone(origin[prop],target[prop])
            } else {
                target[prop] = origin[prop]
            }
        }
    }
    return target;
}


var o = deepClone(obj)

console.log(o)