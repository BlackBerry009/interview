function myNew(fn){
    return function(){
        let obj = {
            __proto__: fn.prototype
        }
        let target = fn.call(obj,...arguments)
        
        return target instanceof Object ? target : obj;
    }
}

function Person(name,age){
    this.name = name;
    this.age = age;
}
