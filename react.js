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
