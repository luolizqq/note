vue  defineProperty里面的setter改变数据后刷新页面
react  只要执行setState就会重新render 通过对比虚拟dom树去改变页面上真正变动的部分
setState在改变对象或者数组的时候要浅复制一下，以免引起子组件不更新的情况（如果子组件使用extends PureComponent）,如果不浅复制直接修改对象，相当于对象的指向没有变，子组件的shouldComponentUpdate
方法返回false导致子组件不更新

immutable和PureComponent搭配使用
是吧！只更新了父节点，比直接比对所有的属性简直强太多，并且更新后返回了一个全新的引用，即使是浅比对也能感知到数据的改变。
因此，采用 immutable 既能够最大效率地更新数据结构，又能够和现有的 PureComponent (memo) 顺利对接，感知到状态的变化，是提高 React 渲染性能的极佳方案。

react setState 
修改深层对象

state = {
    list: {
       objA: {
         name: 'A',
         age: 20
       },
       objB: {
         name: 'B',
         age: 25
       },
       objC: {
         show: false
       },
       objD: 'D'
     }

1、  this.setState({
    list: {
        ...this.state.list,
         objA: {
            ...this.state.list.objA,
            name: 'A1'
           }
       }
2、 let data = Object.assign({}, this.state.list, {objD: 'D1'})
this.setState({
    list: data
})

3、
let data = this.state.list;
    data.objA.name = 'A1';
    data.objD = 'D1';
    this.setState({
      list: data

redux reducer返回对象一定是全新的 return {...state}



forwardRef的使用
https://www.jianshu.com/p/fac884647720
import React, { Component, createRef, forwardRef } from 'react';
const FocusInput = forwardRef((props, ref) => (
    <input type="text" ref={ref} />
));
class ForwardRef extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    componentDidMount() {
        const { current } = this.ref;
        current.focus();
    }

    render() {
        return (
            <div>
                <p>forward ref</p>
                <FocusInput ref={this.ref} />
            </div>
        );
    }
}
export default ForwardRef;


hooks
useEffect和useLayoutEffect的区别
https://www.jianshu.com/p/412c874c5add

6个hooks用法 https://segmentfault.com/a/1190000018950566
https://blog.csdn.net/sinat_17775997/article/details/94453167

useRef用法
useRef返回一个普通 JS 对象，可以将任意数据存到current属性里面，就像使用实例化对象的this一样。另外一个使用场景是获取 previous props 或 previous state：
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;
  return <h1>Now: {count}, before: {prevCount}</h1>;
}

useMemo和useCallback的区别
useMemo https://segmentfault.com/a/1190000018697490  所以我们可以使用useMemo方法 避免无用方法的调用  https://www.jianshu.com/p/014ee0ebe959
useMemo和useCallback的参数一样都是回调函数和依赖的变量，当依赖的变量改变时，回调才会执行。
useMemo返回的是回调函数执行的值，useCallback返回一个函数
useMemo
function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + '改变name的方法'
  }

const otherName =  useMemo(()=>changeName(name),[name])
  return (
      <>
        <div>{otherName}</div>
        <div>{children}</div>
      </>

  )
}

export default Button



useCallback(fn,[]) 
import React, { useCallback } from 'react'

function ParentComp () {
  // ...
  const [ name, setName ] = useState('hi~')
  // 每次父组件渲染，返回的是同一个函数引用
  const changeName = useCallback((newName) => setName(newName), [])  

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp name={name} onClick={changeName}/>
    </div>
  );
}

useMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据

共同作用：
1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。

两者区别：
1.useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
2.useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

让本页面局部刷新：
先跳转到一个空页面，空页面comoponentWillMount再跳转到本页面。（在index页面push("/index")没有效果）


导出

export function download(url,data,callback){
  const search = qs.stringify(data, { addQueryPrefix: true });
  url = ENV_API + url + search 
  var xhr = new XMLHttpRequest();
  //GET请求,请求路径url,async(是否异步)
  xhr.open('GET', url, true);
  xhr.setRequestHeader('token',  localStorage.getItem("token") || '')
  xhr.setRequestHeader('userId',  localStorage.getItem("userId") || '')
  //设置请求头参数的方式,如果没有可忽略此行代码
  // xhr.setRequestHeader("token", token);
  //设置响应类型为 blob
  xhr.responseType = 'blob';
  //关键部分
  xhr.onload = function (e) {
      //如果请求执行成功
      if (xhr.readyState ==4 && xhr.status == 200) {
          callback && callback();
          var blob = this.response;
          var reader = new FileReader()
          reader.onload = e => {
            try{
              const data = JSON.parse(e.target.result);
              if(data.data.retCode ==="1"){
                message.error(data.data.detMessage);
              }
            }catch(err){
              var filename = xhr.getResponseHeader('content-disposition').split(";")[1].split("=")[1];
              var a = document.createElement('a');
              //创键临时url对象
              var url = URL.createObjectURL(blob);
              a.href = url;
              a.download=filename;
              a.click();
              //释放之前创建的URL对象
              window.URL.revokeObjectURL(url);
            }
          }
          reader.readAsText(blob);
      }
  };
  //发送请求
  xhr.send();
}

React.CloneElment用法  https://www.jianshu.com/p/2ccf0cd14388

<div className="code" onClick={(e)=>{console.log("e",e.target.matches("div"))}}>啊啊啊啊啊啊</div>

获取dom
div ref获取
组件  findDomNode(ref)
React.findDomNode的用法  https://blog.csdn.net/margin_0px/article/details/81331159


react 事件处理机制  https://www.cnblogs.com/mengff/p/9631919.html

constructor(props){
  super(props)
} 为什么要在构造函数内使用super(props)
https://www.cnblogs.com/chenyablog/p/12251414.html

改造getFieldDecorator
if (this.props.disabled) {
  getFieldDecorator = (...rest) => {
      return element => {
          let NewElement = React.cloneElement(element, {
              disabled: true,
              allowClear: false
          });
          return this.props.form.getFieldDecorator(...rest)(NewElement);
      };
  };
}

高阶组件  https://blog.csdn.net/sinat_17775997/article/details/100761756

redux 原理
https://www.jianshu.com/p/f6c5434c6e2d

react 输入框输入中文问题
https://www.cnblogs.com/yky-iris/p/9148151.html

函数式组件上使用ref获取的是null,所以要使用useImperativeHandle自定义子组件向父组件暴露的属性
React函数式组件使用Ref（forwardRef，useImperativeHandle）
https://www.cnblogs.com/yky-iris/p/12355243.html
Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
父组件如果想要在函数式子组件上使用ref, 结果是null，所以就要自定义子组件向父组件暴露的属性，需要用到forwardRef，useImperativeHandle
ref={(node)=>{}} ref回调什么时候会执行？
对于class类组件而言，是在挂载完毕或者卸载的时候（null）
对于无状态的函数式组件，由于使用useImperativeHandle自定义了子组件向父组件暴露的属性，所以在暴露的属性改变的时候会引发ref回调重新执行。
const inputEl = useCallback(node => {
  console.log("node", node);
  if (node !== null) {
    setValue(node.value);
  }
}, []);
这种形式只在加载完了生成一个函数


// models > app.js
import { routerRedux } from 'dva/router';
*login({ payload }, { call, put }) {
  const response = yield call(login, payload);//1.登录
  yield put({
    type: 'changeLoginStatus',
    payload: response,
  }); // Login successfully

  if (response.data.retCode === "0") {
    const data = convertResponse(response);
    localStorage.setItem("isLogin", true)
    localStorage.setItem("token", data.token)
    localStorage.setItem("userId", data.userId)
    localStorage.setItem("userInfo", JSON.stringify(data));
    yield put({type:"global/init"})
    yield put({
      type: 'getMenuList',
      payload: { "data": { "inData": {} } },
    });//2.获取菜单列表
    yield put(routerRedux.push("/"))  //3.跳转到首页（当跳转到首页的时候,菜单已经获取到了，不用担心菜单渲染时拿不到数据）
  } else {
    message.error(response.data.retMessage);
  }
},
generator用法  https://zhuanlan.zhihu.com/p/36699390  （相当于async,await,）
function *g(){}
const g = *g(); //不会执行
g.next(); //改阶段执行，结束时，在函数内触发g.next();让下一阶段执行，这样就不用手动执行g.next();
g.next();