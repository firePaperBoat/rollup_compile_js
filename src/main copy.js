class MathFloat {
    constructor(){}
    float_len = 0
    i_isNan(i){
        if(isNaN(Number(i))) throw new Error(`${i} is not number or can't be converted into numbers`)
    }
    whole_number(arr){
        this.float_len = 0
        let item = arr
        let mathArr = [0]
        while(item instanceof Array){
            item.forEach(i=>{
                item = i
                if(!(i instanceof Array)){
                    this.i_isNan(i)
                    mathArr.push(i)
                    String(i).split('.')[1]?.length > this.float_len ? this.float_len = String(i).split('.')[1]?.length : ''
                }
            })
        }
        return mathArr
    }
    add(){
        let mathArr = this.whole_number([...arguments])
        let result = mathArr.reduce((pre,next)=>{
            return pre + Number(next) * Math.pow(10,this.float_len)
        })
        return result / Math.pow(10,this.float_len)
    }

    deduct(){
        let mathArr = this.whole_number([...arguments])
        let result = mathArr.reduce((pre,next)=>{
            console.log(pre,next)
            return pre - Number(next) * Math.pow(10,this.float_len)
        })
        return result / Math.pow(10,this.float_len)
    }
}

// let mathFloat = new MathFloat()

// console.log(mathFloat.add([1,[2,[3,[4,[5,6,[7,8,[9,0,'10.4']]]]]]]))
// console.log(mathFloat.deduct([10,[1,[3,[5]]]]))


// 快速排序
function quickSort(array){
    if(array.length <= 1 ) return array;
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < array.length - 1; i++){
        if(pivot < array[i]){
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function while_quickSort (array){
    if(array.length <= 1 ) return array;
    let pivot = array[array.length - 1];
    let array_length = array.length - 1;
    let len = array.length - 2;
    let left = [];
    let right = [];
    while(len < array_length){
        if(pivot > array[len]){
            left.push(array[len]);
        } else {
            right.push(array[len]);
        }
        len++;
    }
    // while(len >= 0){
    //     if(pivot > array[len]){
    //         left.push(array[len]);
    //     } else {
    //         right.push(array[len]);
    //     }
    //     len--;
    // }
    return [...while_quickSort(left), pivot, ...while_quickSort(right)];
}

// 洗牌
function disorder (array){
    const len = array.length;
    let current = len - 1;
    let random;
    while(current > -1){
        random = Math.floor(Math.random() * len);
        [ array[random], array[current] ] = [ array[current], array[random] ];
        current--;
    }
    return array;
}



/**
 * 观察者模式是一种设计模式，它允许对象订阅另一个对象的状态更改，以便在状态更改时获得通知。
 * 下面是一个使用JavaScript实现观察者模式的示例：
 * */ 
/**
//定义观察者构造函数 
function Observer(){ 
    this.update = function(){ 
    //观察者更新函数 
    }; 
}

//定义被观察者构造函数 
function Subject(){ 
    this.observers = []; //观察者数组 
    this.addObserver = function(observer){ 
        this.observers.push(observer); 
    }; 
    this.notifyObservers = function(){ 
        for(var i=0; i<this.observers.length; i++){
             this.observers[i].update(); 
            } 
    }; 
}

//创建观察者 
var observer1 = new Observer(); 
var observer2 = new Observer();

//创建被观察者 
var subject = new Subject();

//添加观察者 
subject.addObserver(observer1); 
subject.addObserver(observer2);

//通知观察者 
subject.notifyObservers();
 * */ 


// class类实现观察者模式
class Subject { 
    constructor() { 
        this.observers = []; 
    }

    subscribe(observer) { 
        this.observers.push(observer); 
    }

    unsubscribe(observer) { 
        this.observers = this.observers.filter(obs => obs !== observer); 
    }

    fire(action) { 
        this.observers.forEach(observer => { 
            observer.update(action); 
        }); 
    } 
}
class Observer { 
    constructor(state = 1) { 
        this.state = state; 
        this.initialState = state; 
    }

    update(action) { 
        switch (action.type) { 
            case 'INCREMENT': 
                this.state = ++this.state; 
            break; 
            case 'DECREMENT': 
                this.state = --this.state; 
            break; 
            case 'RESET': 
                this.state = this.initialState; 
            break; 
            default: 
                this.state = this.state; 
        } 
    } 
}

const stream$ = new Subject();

const obs1 = new Observer(); 
const obs2 = new Observer(42);

stream$.subscribe(obs1); 
stream$.subscribe(obs2);

console.log(stream$,'090909090')

stream$.fire({ type: 'INCREMENT' });

console.log(obs1.state); // 2 
console.log(obs2.state); // 43


