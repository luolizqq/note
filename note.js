import { Server } from "https"
import { auto } from "async"
import { render } from "react-dom"
import { PureComponent } from "react"

https://blog.csdn.net/yangbingbinga/article/details/61417689  require.ensure  按需加载  防止js文件过大

nodejs  path模块

~1.15.2 :=  >=1.15.2 <1.16.0     

^3.3.4 := >=3.3.4 <4.0.0
npm view element-ui versions
npm view element-ui version
npm ls  element-ui （-g）  查看本地某个包的信息

查看项目中那些包可以升级 全局安装npm-check-updates      命令ncu 查看更新信息  ncu  -u 包更新某个包的package.json 再执行npm install


//1.单行溢出核心代码
overflow:hidden; //（顾名思义超出限定的宽度就隐藏内容）

white-space: nowrap; //（设置文字在一行显示不能换行）

text-overflow: ellipsis;//（规定当文本溢出时显示省略符号来代表被修剪的文本）


2.多行溢出核心代码

-webkit-line-clamp:2; //（用来限制在一个块元素显示的文本的行数,2表示最多显示2行。 为了实现该效果，它需要组合其他的WebKit属性）

display: -webkit-box; //（和1结合使用，将对象作为弹性伸缩盒子模型显示 ）

-webkit-box-orient://vertical;（ 和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 。）

overflow:hidden; //（顾名思义超出限定的宽度就隐藏内容）

text-overflow: ellipsis;//（规定当文本溢出时显示省略符号来代表被修剪的文本）


1.Object.assign是深拷贝还是浅拷贝
浅拷贝
https://blog.csdn.net/ih1107/article/details/79208860
function extend(objl , obj2) { 
    Object . keys (obj2 ) . forEach (function (key) { 
    objl[key] = obj2[key] 
    ) ) 
}}
$.extends
Object.extends
{...obj}解构

深拷贝 
原生方式：var newObj= JSON.parse(JSON.stringify(someobj));
jQuery方式：var copiedObject = jQuery.extend(true, {}, originalObject)

10.28
document.documentElement 就是html

~function(){
    let computed = function(){
        const clientW = document.documentElement.clientWidth,
            designW = 640;
    if(clientW > 640){
        document.documentElement.style.fontSize = "100px";
        return;
    }
    document.documentElement.style.fontSize = clientW / designW * 100 + "px";
    } 
    computed();
    window.onresize =function(){
        computed();
    }
}()

超炫3D下拉菜单Makisu  一个jquery插件
prefixfree.js  该脚本允许您仅在各处使用未前缀的CSS属性。 它在后台运行，仅在需要时将当前浏览器的前缀添加到任何CSS代码中。
什么时候出现滚动条：当内容比容器的宽度大时就会出现，移动端开发，在不设置meta标签属性时，html文档的宽度是980，超出手机设备的宽度，
这种情况下不会出现滚动条。

html  document.documentElement  
body  document.body
head  document.head
pc端网页在手机上浏览出现滚动条的原因：1.网页固定宽度，手机浏览时设置vp,视口宽度和设备宽度一样，此时内容
宽度不变大于视口宽度，就会在移动端设备上出现滚动条， 从而衍生出一种移动端布局的解决方式，流式响应式布局
方案：外层盒子的宽度都是百分比设定的，很少有固定值（里面一些小元素可以固定）

DPR 像素密度比为2 移动端开发时准备的图片大小是实际看到的2倍
DPR 像素密度比为3 移动端开发时准备的图片大小是实际看到的3倍

window.innerHeight  document.documentElement.clientHeight指的是视口的高度也就是html的高度
区别是前者包括滚动条的宽度，后者不包括
document.body.offsetHeight 网页body主体部分的总高度

shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    if (nextState.mobile && (/1[3|4|5|7|8]\d{9}/.test(nextState.mobile)) && nextState.password ) {
        this.btnDisable = true
    } else {
        this.btnDisable = false
    }
    if (nextState.codeBtnText === '发送验证码') {
        this.codeBtnDisable = false
    }
    return true
}
function a(a,b,c){console.log(a,b,c)}
a.apply(null,[1,2,3])  // 1 2 3
a.call(null,1,2,3)     // 1 2 3
a(...arg)
普通函数中参数的集合用arguments  箭头函数中不能用arguments所以用 ...arg


请求头中Content-Type:application/json  和  x-www-form-urlencoded的区别
前者携带的请求参数格式是对象，后者是&连接的字符串


document.body.innerHTML="<h1>标题</h1>"  //正确
document.body.appendChild("<h1>标题</h1>")  //错误,不是一个节点类型

创建一个静态服务器
yarn global add http-server   进入到项目目录下，执行http-server  开启一个服务器端口  8080    访问http:localhost:8080/index.html
字符串有trim()  trimLeft()  trimRight()去除空格方法


要看的链接  https://www.jianshu.com/p/50fe3fb9f7c3     

转化为数组

11/4
1.缓存问题



//flexiable移动端可伸缩布局
下图为一个简单得不能再简单的示意图（假装它是一个宽为 750px  的移动端设计稿）：
目前Flexible会将视觉稿分成**100份**（主要为了以后能更好的兼容vh和vw），而每一份被称为一个单位a。同时1rem单位被认定为10a。针对我们这份视觉稿可以计算出：

换算
1a = 7.5px
1rem = 75px

上面这一小段提示可以说是 flexible.js 的精华所在了。但你只需要记住1rem = 75px 就好。比如上面云库网这个 LOGO 距离左边60px，上边42px，图片自身宽、高都是80px。当然你也可以直接用这些数值：

传统做法
.logo{
width:80px;
height:80px;
margin-left:60px;
margin-top:42px;
}
但我们是要在移动端做适配的，这样写还有什么适配可言？我们可以把上面的像素转换成 rem。rem 是根据根元素（html 的字体大小）来进行计算的，这样就可以很方便地让我们把设计稿等比缩放到与实践终端相匹配的大小。

移动适配
.logo{
width: 1.066667rem;
height: 1.066667rem;
margin-left: 0.8rem;
margin-top: 0.56rem




ajax详解 https://blog.csdn.net/weixin_44260420/article/details/93722037


str.match(/\d{2}/g)
// ["12", "45", "68"]
!!str.match(/\d{2}/g)   //true

https://blog.csdn.net/zchcode/article/details/14448209
background : background-color || background-image || background-repeat || background-attachment || background-position

 
vue 动态加载组件 component: (r) =>require.ensure([],()=>r(require('@/App')),'index'),






react 
1.非页面级组件  this.props.history.push不可用   用@withRouter 包裹组件 （from 'react-router-dom'）  
2.函数级组件  useRouteMatch,useParams 获取match params等（from 'react-router-dom'） 
3.react嵌套路由  在a页面<Switch></Switch>包裹子Route  path是完整路径 ${this.props.match.url}/:id
4.跳转 Link或者NavLink（from 'react-router-dom'）
5.react-router-dom网站 https://reacttraining.com/react-router/web/guides/quick-start
6.create-react-app  配置文件   npm run eject 
7.craeate-react-app  代理  http-proxy-middleware 
8.yarn add *** --dev  

9.flex 总结 https://www.jianshu.com/p/24a655116f30

10一篇文章让你搞懂git pull 和git pull --rebase的区别  https://www.cnblogs.com/chenyablog/p/10308058.html

11 font:italic bold 12px/30px Georgia, serif;
12 对于css（less,sass）文件所在目录可以配置alias简写 引入的时候 在css文件中引入 @import 前面要加~  但是在js文件引入还是用import不需要加~
13  path模块 path.resolve()将多个路径合并，自动加/   

14 函数和混合的区别 https://www.cnblogs.com/wujianbufengsao/articles/6835977.html
15 定义混合时带括号和不带括号的区别  https://www.cnblogs.com/xiyangbaixue/p/4151615.html
16 修改placeholder样式 
::-webkit-input-placeholder {
    color: #ccc;
}
17  export default connect(({home})=>({home}))(Home)  不使用@
    使用@ @mixin({padstr})  相当于mixin({padstr})(Home) 改变了Home本身 最后导出 expport default Home

mapDispatchToProps的用法  https://blog.csdn.net/suwu150/article/details/79415085

18 默认导出箭头函数 export default (参数)=>{}

19 switch的用法
switch(type){
    case "salesAmount":
        value = value.replace(/[^0-9]/g,'');
        break;
    case "customTel":
        value = this.padstr(value.replace(/[^0-9]/g,''),[3,7]," ");
        break;
    case 'customName':
        break;
    default:;
}
20  button是inline-block元素 可以设置宽高 但是要让他水平居中的话 转化为块 再 margin:0 auto;
21  import styles from "./index.less" 一定要加.less后缀
22  原生oninput和 onchange作用一样，都是输入一改变就触发,onblur是失焦触发
23 immutable 常用api  https://www.cnblogs.com/chris-oil/p/8492349.html
24 react 引入多个类 https://blog.csdn.net/qq_36742720/article/details/85766757
25关于raect声明周期
26.render什么时候执行，只要setState执行，无论值是否改变都会re-render,因为shouldComponentUpdate默认返回true
子组件的componentWillReceiveProps在第一次渲染的时候不会执行，当父组件re-render的时候才会执行，先执行componentWillREceiveProps,
然后再执行shouldComponentUpdate
组件本身setState不会触发自己componentWillReceiveProps方法，但是会触发shouldComponentUpdate
shouldComponentUpdate什么时候执行，1.自身组件setState的时候，2.父组件re-render的时候执行
componentWillREceive什么时候执行，父组件re-render的时候才会执行

28.为什么组件本身setState不会触发componentWillREcieveProps呢？
通过this.setState方法触发的更新过程不会调用这个函数，这是这个函数适合根据新的props值（也就是参数nextProps）来计算出是不是要更新内部状态state。更新组件内部状态的方法是this.setState，如果this.setState的调用导致componentWillReceiveProps(nextProps)的再一次调用，那就是一个死循环了。

26. shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }

27 什么时候在子组件的componentWillRececeive中使用setState?(state的状态既要由父组件改变，也要由自身改变)
https://www.jianshu.com/p/f782d3ec59e8
如果不需要自身改变，那么在渲染的时候直接使用this.props 
如果非得用state,那么要在componentWillREceiveprops中setState(加条件判断) 并且在componentDIdMount中setSTate一次,因为shouldComponentUpdate默认返回true
子组件首次渲染不会触发componentWillREceiveprops
28 componentWillREceiveProps只有一个参数nextProps  shouldComponentUpdate有两个参数 nextProps nextState 
所以shouldComponentUpdate有两次更新的机会 一次是父组件传重新渲染这时是props有变化，一次是组件本身setState是state有变化
32 通常引起componentWillReceiveProps生命周期的有父组件传过来的prop的改变，connect(redux里面state的变化)，还有url的变化

29  判断两个对象或数组有没有实质性改变 is(fromJS(this.props.proData), fromJS(nextProps.proData)) immutable.js

30  如何让子组件在state或props真正有改变时shouldComponentWillUpdate才返回true?
shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
}
31 打印 react this.props

32 在react的class类中写异步方法
fetchlist = async ()=>{
    const type = this.props.match.params.type;
    const res = await list(type);
    this.setState({list:res.data.data})
}

33 react-router4相关api使用方法
https://www.jianshu.com/p/c6fad9831d3b

34  react-router-dom中 Redirect在使用的时候外面必须有Switch包裹

35 this.props.location.pathname和this.props.match.path以及this.props.match.url的区别
前者是当前页面匹配到的路径，中间跟在其使用位置有关系，是该语句所在组件的Route路由固定写死的路径 如 /record/:type
后者也是跟当前书写位置（在哪个组件）有关，该组件所匹配的真是路径  如/record/failed


关于移动端rem响应式布局
手写setRem 
1、(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
或者
2.
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var perRemPx = document.getElementsByTagName("html")[0].clientWidth / 7.5;

window.addEventListener("resize", function () {
    perRemPx = document.getElementsByTagName("html")[0].clientWidth / 7.5;
    document.getElementsByTagName("html")[0].style.fontSize = perRemPx + "px";
});
document.getElementsByTagName("html")[0].style.fontSize = perRemPx + "px";

注意：如果设计稿是750 font-size是100px  比值就是7.5
如果设计稿是640   font-size是100px   比值就是6.4
这里的font-size是当屏幕为750px的时候，html元素上的font-size是100px;
另注：html不用设置font-size:100px  js会自动计算设置




css修改滚动条样式  https://www.cnblogs.com/sherryweb/p/11023311.html


token（智能编码）与session（DRG）登录的区别
https://www.cnblogs.com/shoshana-kong/p/10932718.html

nginx基本用法

https://segmentfault.com/a/1190000014588132

webpack definePlugin的用法
https://blog.csdn.net/a250758092/article/details/81234419
关于process.env.NODE_ENV和cross-env的的用法
https://www.jianshu.com/p/c8f9c61c2f20
"start": "cross-env API_ENV=local umi dev" 相当于将API_ENV这个变量挂在了 process.env上，在node环境以及webpack的配置文件config中可以
访问改变量process.env.API_ENV  但是在自定义js文件不可访问 这时就用到了webpack的definePlugin
关于yarn.lock文件的作用
https://www.cnblogs.com/yangzhou33/p/11494819.html

vue
$attrs  $listeners
https://www.jb51.net/article/132371.htm

this.$nextTick的用法 https://www.jianshu.com/p/a7550c0e164f


const path = require("path");
const files= require.context("./components",false,/\.js$/);
const modules = {};
console.log("files",files.keys())
files.keys().forEach(key => {
  console.log("key",key)
  const name = path.basename(key, '.js')
  console.log("name",name)
  console.log("file",files(key))
  modules[name] = files(key).default || files(key)
})
console.log("modules",modules)



object.defineProperty和object.freeze和object.seal的用法
https://www.jianshu.com/p/8fe1382ba135

getDerivedStateFromProps用法 为什么你不需要 getDerivedStateFromProps
https://www.jianshu.com/p/cafe8162b4a8


PureComponent的原理  https://www.jianshu.com/p/ff993656a66b
关于pureComponent和React.memo的用法  https://www.jianshu.com/p/b3d07860b778

子组件使用父组件传来的方法，方法中的this指的是父组件中的this


React.createContext的用法
https://blog.csdn.net/qq_30638831/article/details/89045908  注意将createContext写到一个单独的文件里，子组件和父组件引入


export default后面只能跟class Function 表达式
不可  export default const App={}  可以export default App;


componentDidUpdate指的是更新之前的旧值



useEffect的用法    https://www.jianshu.com/p/6e525c3686ab
useEffect用法
useEffect(()=>{
    const timer = setTimeout(()=>{
      // setCount(count+1)
    },1000);
    console.log("useEffect执行");
    return ()=>{console.log("清除");clearInterval(timer)};
    
  })



  useEffect是在componentDidMount componentDidUpdate  componentWillUnmount这三个声明周期的组合,也就是在渲染之后执行
  (但并不会在首次渲染前执行两次，只会在渲染之前执行一次)而static getDerivedStateFromProps 是在渲染之前执行

  useEffect如果返回一个函数，那么这个函数会在组件卸载的时候执行，如果不返回的函数的话，组件卸载的时候不会执行useEffect中的内容
  function Example({number}){
    const [count,setCount] =useState(number);
    console.log("子组件创建")
    useEffect(()=>{
      const timer = setTimeout(()=>{
        // setCount(count+1)
      },1000);
      console.log("useEffect执行");
      return ()=>{console.log("清除");clearInterval(timer)};
    },[number]) // 注意这里是number不是"number" 属性number是父组件传来的，并由父组件的state控制，如果父组件改变number的值
    //this.setState({number:this.state.number}})如果父组件不是继承自React.PureComponent,那么父组件会重新渲染，如果子组件
    //继承自 React.PureComponent或者函数式组件由React.memo(函数式组件)，那么子组件不会重新渲染。如果子组件没有继承，那么子组件会
    //重新创建，但是由于useEffect有第二个参数，只有当number发生变化的时候才会useEffect才会重新执行，render也不会执行。
    return (
      <div onClick={()=>{setCount(count+1)}}>次数{number}</div>
    )
  }
  export default React.memo(Example);





  无论是组件还是元素只要有key属性，key变了，这个组件就会销毁重新创建



  bable和pollyfill
  Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

  举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
  
  解释二：
  提示：polyfill 指的是“用于实现浏览器不支持原生功能的代码”，比如，现代浏览器应该支持 fetch 函数，对于不支持的浏览器，网页中引入对应 fetch 的 polyfill 后，这个 polyfill 就给全局的window对象上增加一个fetch函数，让这个网页中的 JavaScript 可以直接使用 fetch 函数了，就好像浏览器本来就支持 fetch 一样。在这个链接上 https://github.com/github/fetch 可以找到 fetch polyfill 的一个实现
  
  

  跨域的三种方式  https://segmentfault.com/a/1190000010237531


  箭头函数的async形式
  
  const giveMeOne = async () => 1;