class Event {
    constructor() {
        this.event = new Map();
    }
    on(type, fn) {
        if (!this.event.has(type)) {
            this.event.set(type,fn)
        }
    }
    off(type) {
        if(this.event.has(type)){
            this.event.delete(type);
        }
    }
    once(type,...params) {
        if(this.event.has(type)){
            this.emit(type,...params)
            this.off(type)
        }
    }
    emit(type,...params) {
        if(this.event.get(type)){
            this.event.get(type)(...params)
        } else {
            console.log('没有订阅事件')
        }
    }
    clear() {
        this.event.clear();
    }
}

var event = new Event();

event.on('one',function(){
    console.log('one')
})

event.on('two',function(){
    console.log('two')
})

event.on('sum',(a,b) => {
    console.log(a+b)
})