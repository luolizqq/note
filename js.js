1、srcElement currentTarget target之间的区别
IE浏览器支持window.event.srcElement ， 而firefox支持window.event.target，currentTarget是事件的绑定者，target是事件的触发者

2.img  图片加载失败
https://www.cnblogs.com/willingtolove/p/9544576.html

2020/5/6
Proxy 与Object.defineProperty介绍与对比
https://www.jianshu.com/p/d16565c6b6ee

原型链
https://blog.csdn.net/yucihent/article/details/79424506

什么是JSON标准格式
'{"name":"zqq"}'  
'{"name":{"aa":["1","2"]}}'
JSON.parse的参数只能是JSON标准格式，不然就会报错
  

我们可以用Number.isInteger()来判断一个数字是否为整数. NaN === NaN //false


useRef  useImperativeHandle 的用法
https://www.cnblogs.com/yky-iris/p/12355243.html


时间循环处理机制，宏任务与微任务

例1：setTimeout(function(){
    console.log('定时器开始啦')
});

new Promise(function(resolve){
    console.log('马上执行for循环啦');
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦')
});

console.log('代码执行结束');

解析
首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里

遇到 new Promise直接执行,打印"马上执行for循环啦"

遇到then方法,是微任务,将其放到微任务的【队列里】

打印 "代码执行结束"

本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"

到此,本轮的event loop 全部完成。


下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦"

例2：
setTimeout(() => console.log('setTimeout1'), 0);  //1宏任务
setTimeout(() => {								//2宏任务
    console.log('setTimeout2');
    Promise.resolve().then(() => {
        console.log('promise3');
        Promise.resolve().then(() => {
            console.log('promise4');
        })
        console.log(5)
    })
    setTimeout(() => console.log('setTimeout4'), 0);  //4宏任务
}, 0);
setTimeout(() => console.log('setTimeout3'), 0);  //3宏任务
Promise.resolve().then(() => {//1微任务
    console.log('promise1');
})

解析：
promise1
Promise {<resolved>: undefined}
setTimeout1
setTimeout2
promise3
5
promise4
setTimeout3
setTimeout4


宏任务：主线程，setTimeOut  setInterval setImmediate，async函数里await后面的代码（不算await本身）  （注意：setImmediate比setTimeout(,0)还快）
微任务：promise里的then ,process.nextTick(微任务里最先执行的)
先执行一个任务队列里的宏任务再执行微任务；

promise.then和process.nextTick之间的顺序问题  https://www.lisa33xiaoq.net/1134.html
https://www.cnblogs.com/fangdongdemao/p/10262209.html  （微任务宏任务详解，async,await详解）


async和await详解

async 关键字差不多了，最重要的就是async函数的执行会返回一个promise 对象，并且把内部的值进行promise的封装。

例子
async function timeout() {
    return 'hello world'
}
console.log(timeout());
async函数(timeout)的调用，确实返回promise 对象，并且Promise 还有status和value，如果async 函数中有返回值 ,当调用该函数时，内部会调用Promise.solve() 方法把它转化成一个promise 对象作为返回, 但如果timeout 函数内部抛出错误呢？
就会调用Promise.reject() 返回一个promise 对象，那么要想获取到async 函数的执行结果，就要调用promise的then 或catch 来给它注册回调函数，

globs  文件路径匹配规则  https://blog.csdn.net/thunderevil35/article/details/80951803
path-to-regExp https://wudi98.blog.csdn.net/article/details/98475142 
exec  match用法   https://www.cnblogs.com/heshan1992/p/6259171.html   如果没有g全局标志,那么返回的数组arr.arr[0]保存的是完整的匹配.arr[1]保存的是第一个括号里捕获的字串,依此类推arr[n]保存的是第n个括号捕获的内容.也就是当包含有全局的标志时则返回的结果第一个是正确匹配的结果，后面依次是子匹配的结果。
search 返回索引  test （正则是否符合字符串）
search和indexOf的区别：search的参数可以为正则表达式  
var str="hello World";
console.log(str.search(/World/)); ====>6
console.log(str.search(/world/)); ====>-1
console.log(str.search(/world/i); ====>6



generator用法  https://zhuanlan.zhihu.com/p/36699390  （相当于async,await,）
function *g(){}
const g = *g(); //不会执行
g.next(); //改阶段执行，结束时，在函数内触发g.next();让下一阶段执行，这样就不用手动执行g.next();
g.next();


function Fn(){
    outputNum = function(){console.log(1)}
    return this;
}
Fn.outputNum = function(){console.log(2)}
Fn.prototype.outputNum = function(){console.log(3)}
var outputNum = function(){console.log(4)}
function outputNum(){
    console.log(5)
}

1.2
2.4
3.4
4.4
5.2
6.4
7.3


节流防抖
https://www.jianshu.com/p/c8b86b09daf0