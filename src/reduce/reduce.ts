var arr = [1,2,3,4,5,6]

interface Handler {
    (item, index?): any
} 

// Array.prototype.reduceToMap = function(handler: Handler){
//     return this.reduce((target, current, index)=>{
//         target.push(handler.call(this, current, index))
//         return target
//     }, [])
// }

// Array.prototype.reduceToFilter = function(handler: Handler){
//     return this.reduce((target, current, index)=>{
//         if(handler.call(this, current, index)){
//             target.push(current)
//         }
//         return target
//     }, [])
// }

// arr.reduceToMap(function(item, index){
//     if(item % 2 === 0) return item
// })

// arr.reduceToFilter((item, index)=>{
//     return item % 2 === 0
// })



/**
 *  冒泡 依次相邻两两相比
 *  插入 当前项和前面所有项相比
 *  选择 依次和后面的没项比较，并记录下最小(大)项的角标
 * */
function bubbleSort (arr){
    let len = arr.length
    if(len < 3) return arr
    for(let j = 0; j < len; j++){
        let flag = true // 优化点---已排序的项不在循环比较 en - 1 - j
        for(let i = 0; i < len - 1 - j; i++){
            if(arr[i] < arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                flag = false
            }
        }
        if(flag) break;
    }
    return arr
}

// 插入排序，依次和前面所有项比较，满足条件则互换
function insertSort (arr){
    let len = arr.length
    if(len < 3) return arr
    for(let i = 1; i < len; i++){
        let target = i
        for(let j = i - 1; j >= 0; j--){
            if(arr[target] < arr[j]){
                [arr[target], arr[j]] = [arr[j], arr[target]]
                target = j // 依次往前移一位，j--赋值给target
            } else break;
        }
    }
    return arr
}

// 选择排序，依次比较最值并存下其下标，和当前项互换
function selectSort (arr){
    let len = arr.length
    if(len < 3) return arr
    for(let i = 0; i < len - 1; i++){
        let maxIndex = i
        for(let j = i + 1; j < len; j++){
            if(arr[maxIndex] < arr[j]){
                maxIndex = j
            }
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]] 
    }
    return arr
}


// 快速排序 分左右两个数组
function quick_Sort (arr){
    let target = arr[0], len = arr.length;
    if(len < 2)return arr
    let left = [], right = [];
    for(let i = 1; i < len; i++){
        // while(arr[i] < target){}
        if(arr[i] < target){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quick_Sort(left).concat([target], quick_Sort(right))
}




// class SingleCase {
//     constructor(){}
//     static getInstance() {
//         if(!SingleCase.instance){
//             SingleCase.instance = new SingleCase()
//         }
//         return SingleCase.instance
//     }
// }
// const s1 = SingleCase.getInstance()
// const s2 = SingleCase.getInstance()
// s1 和 s2 是同一个实例
// s1 === s2 // true

//User类
// class User {
//     //构造器
//     constructor(opt) {
//       this.name = opt.name;
//       this.viewPage = opt.viewPage;
//     }
//     //静态方法
//     static getInstance(role) {
//       switch (role) {
//         case 'superAdmin':
//           return new User({ name: '超级管理员', viewPage: ['首页', '应用数据', '权限管理'] });
//           break;
//         case 'admin':
//           return new User({ name: '管理员', viewPage: ['首页', '应用数据'] });
//           break;
//         case 'user':
//           return new User({ name: '普通用户', viewPage: ['首页'] });
//           break;
//         default:
//           throw new Error('参数错误, 可选参数:superAdmin、admin、user')
//       }
//     }
//   }
//   // 实例化对象
//   let superAdmin = User.getInstance('superAdmin');
//   let admin = User.getInstance('admin');
//   let normalUser = User.getInstance('user');



// 父类
// class User {
//     constructor(name = '', viewPage = []) {
//         if(new.target === User) {
//         throw new Error('抽象类不能实例化!');
//         }
//         this.name = name;
//         this.viewPage = viewPage;
//     }
// }
// 子类
// class UserFactory extends User {
//     constructor(name, viewPage) {
//         super(name, viewPage)
//     }
//     // 创建方法
//     create(role) {
//         switch (role) {
//         case 'superAdmin': 
//             return new UserFactory( '超级管理员', ['首页', '应用数据', '权限管理'] );
//             break;
//         case 'admin':
//             return new User({ name: '管理员', viewPage: ['首页', '应用数据'] });
//             break;
//         case 'user':
//             return new UserFactory( '普通用户', ['首页'] );
//             break;
//         default:
//             throw new Error('参数错误, 可选参数:superAdmin、admin、user')
//         }
//     }
// }
// let userFactory = new UserFactory();
// let superAdmin = userFactory.create('superAdmin');
// let admin = userFactory.create('admin');
// let user = userFactory.create('user');


// function getAbstractUserFactory(type) {
//     switch (type) {
//       case 'wechat':
//         return UserOfWechat;
//         break;
//       case 'qq':
//         return UserOfQq;
//         break;
//       case 'weibo':
//         return UserOfWeibo;
//         break;
//       default:
//         throw new Error('参数错误, 可选参数:wechat、qq、weibo')
//     }
// }
// let WechatUserClass = getAbstractUserFactory('wechat');
// let QqUserClass = getAbstractUserFactory('qq');
// let WeiboUserClass = getAbstractUserFactory('weibo');
// let wechatUser = new WechatUserClass('微信张三');
// let qqUser = new QqUserClass('QQ张三');
// let weiboUser = new WeiboUserClass('微博张三');



/* 工厂类 */
class Factory {
    static getInstance(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品')
        }
    }
}
/* 产品类1 */
class Product1 {
    type
    constructor() { this.type = 'Product1' }
    
    operate() { console.log(this.type) }
}
/* 产品类2 */
class Product2 {
    type
    constructor() { this.type = 'Product2' }
    
    operate() { console.log(this.type) }
}
const prod1 = Factory.getInstance('Product1')
prod1.operate()                                   // 输出: Product1
const prod2 = Factory.getInstance('Product3')  // 输出: Error 当前没有这个产品





