大牛博客
https://www.jianshu.com/u/a9802e44127d


import { Server } from "https"
import { auto } from "async"
import { render } from "react-dom"
import { PureComponent } from "react"
import { isAbsolute } from "upath";
import { registerQuotaErrorCallback } from "workbox-core"
import { nonNegativeInteger } from "airbnb-prop-types"

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
var path = require("path")     //引入node的path模块
path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
从后向前，若字符以 / 开头，不会拼接到前面的路径(因为拼接到此已经是一个绝对路径)；
若以 ../ 开头，拼接前面的路径，且不含最后一节路径；
若以 ./ 开头 或者没有符号 则拼接前面路径； 

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

react生命周期执行顺序
https://www.cnblogs.com/wfblog/p/11842622.html
forceUpdate方法被调用时会依次执行哪些生命周期函数？
componentWillUpdate render  componentDidUpdate


25关于raect声明周期
26.render什么时候执行，只要setState执行，无论值是否改变都会re-render,因为shouldComponentUpdate默认返回true
子组件的componentWillReceiveProps在第一次渲染的时候不会执行，当父组件re-render的时候才会执行，先执行componentWillREceiveProps,
然后再执行shouldComponentUpdate
组件本身setState不会触发自己componentWillReceiveProps方法，但是会触发shouldComponentUpdate
shouldComponentUpdate什么时候执行，1.自身组件setState的时候，2.父组件re-render的时候执行
componentWillREceive什么时候执行，父组件re-render的时候才会执行

28.为什么组件本身setState不会触发componentWillREcieveProps呢？
通过this.setState方法触发的更新过程不会调用这个函数，这是这个函数适合根据新的props值（也就是参数nextProps）来计算出是不是要更新内部状态state。
更新组件内部状态的方法是this.setState，如果this.setState的调用导致componentWillReceiveProps(nextProps)的再一次调用，那就是一个死循环了。

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



PureComponent的原理  https://www.jianshu.com/p/ff993656a66b 用的是浅比较，为什么不用深比较呢？https://www.jianshu.com/p/0d0587fc33de



React.memo(函数式组件) 作用同 PureComponent
PureComponent的原理  https://www.jianshu.com/p/ff993656a66b  浅比较：比较的是内存地址
当父组件传递给子组件props不变时，子组件不会re-render,但是会执行componentWillReceiveProps
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
  (但并不会在首次渲染之后执行两次，只会在渲染之后执行一次)而static getDerivedStateFromProps 是在渲染之前执行

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


23  this.props.match.params   this.props.location.url  this.props.location.pathname

  箭头函数的async形式
  
  const giveMeOne = async () => 1;


  2020/2/25
react中key的作用
https://www.jianshu.com/p/fb52ea055c71
可以说，这个 unique key 和数据库中的 primary key 差不多，都是为了对数据进行 唯一标识。我们在给列表中的 子组件 设置 key 值的时候，尽量保证其唯一性，当然直接使用数据的 后台ID 是最好不过了。
一个 key 对应一个组件，当组件需要移动和组件之间需要交换的时候，也就是涉及到数组 动态变化 的时候，可以方便 React.js 快速找出列表中需要重新渲染的组件，来 避免重新渲染整个列表，节省开销。如你所见，这个属性 key 是 React.js 作为内部数据使用的，我们虽然把 key 传给了子组件，但是在子组件的内部，是无法通过 props 访问的。
不过，在商品列表的例子中，Item 数组中的数据仅仅用于展示，没有涉及到数组的变更，使用遍历中的 index 作为 key，也是没有问题的\


&& || 逻辑运算的返回值:返回的是运算符左边或者右边的值，不一定为布尔

JS &&和||返回值

&&首先计算其左边的表达式，如果它的值为false或可被转换为false(null、NaN、0或undefined),那么将返回左边表达式的值，否则，它将计算右边的表达式， 并返回这个表达式结果作为 &&运算的结果。
||首先计算其左边的表达式，如果它的值不为false或不可被转换为false(null、NaN、0或undefined),那么将返回左边表达式的值，否则，它将计算右边的表达式， 并返回这个表达式结果作为||运算的结果。

var a = “aa” && “bb”;结果a = “bb”;

var a = “aa” || “bb”;结果a = “aa”;


vue-pc项目
在使用viewUI引入组件时，main.js
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
这种方式是全局引入（相当于引入并注册了所有组件），可以直接在其他vue模版中使用组件，不需要再注册
按需引入
main.js
import 'view-design/dist/styles/iview.css';
配置.bablerc文件
在其他vue模版文件中需要import { Button, Table } from 'view-design';
引入需要的组件然后注册才可以使用；
vue如何修改像iview  element-ui等第三方组件的样式
1.深度作用选择器 >>> (css)  /deep/ (less  sass)
2.去掉scoped
3.写两个style（一个有scoped ,一个没有scoped）
https://www.cnblogs.com/mengfangui/p/9183593.html
https://www.jianshu.com/p/bef0b16cc22c
https://blog.csdn.net/yujing1314/article/details/102294236


在父元素中，第一个子元素设置margin-top,发现没有效果，结果是设置在了父元素上，并且和父元素本身具有的margin-top合并，本来30，设置50，就是50
解决方法：
1、修改父元素的高度，增加padding-top样式模拟（padding-top：1px；常用）
2、为父元素添加overflow：hidden；样式即可（完美）
3、为父元素或者子元素声明浮动（float：left；可用）
4、为父元素添加border（border:1px solid transparent可用）
5、为父元素或者子元素声明绝对定位
https://www.cnblogs.com/ranyonsue/p/5461749.html


当img和文字并排显示时会出现上下对不齐的情况
用绝对定位或者浮动来解决+margin

绝对定位和浮动都会脱离文档流  但是浮动有文字环绕  绝对定位没有，绝对定位会盖住文字


垂直分割线的实现方式
{
    border-right:1px solid #666;
    padding-right:10px;
    padding-left:10px;
}

mac vscode快捷键 https://segmentfault.com/a/1190000012811886
command +z 撤销
command + shift +z 取消撤销



css
z-index只能在position属性值为relative或absolute或fixed的元素上有效


vue
子组件使用父组件的方法 https://www.cnblogs.com/jin-zhe/p/9523782.html
如何给自定义组件添加事件：在自定义组件的标签名上设置@事件名=“方法”  在组件内部通过this.$emit("事件名")触发自定义事件 
父组件向子组件传递数据
https://www.jianshu.com/p/d0c90ccf8824  

vue-router  导航守卫
具体钩子的用法
组件内 beforeRouteUpdate ： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，你需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。
创建router时scrollBehavior的作用是控制页面路由切换时的滚动行为

// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    这种情况组件的生命周期还会执行吗


关于浏览器导航
当点击浏览器的前进后退按钮时，到达的页面会保持原来的样子，比如原来时滚动到底部的状态，返回或前进到这个
页面的时候还是滚动到底部的状态

如何判断一个字符串能否转化为数字,或者text类型的input框转化为number
先parseInt后isNaN


calc用法：https://segmentfault.com/a/1190000019392639
height: calc(100vh - 514px);calc可以计算不同单位的数值
最后，calc()使计算更加清晰。如果你使一组项目为它们父元素容器宽度的 1/6，你可能这么写：

.foo {
    width: 16.666666667%;
}
然而，它能够更加清晰并具有可读性：

.foo {
    width: calc(100% / 6);
}
对于不支持 calc() 的浏览器，整个属性值表达式将被忽略。不过我们可以对那些不支持 calc() 的浏览器，使用一个固定值作为降级方案。

.foo {
    width: 90%; 
    width: calc(100% - 50px);
}

定位的元素设置宽度高度百分比是相对于谁？？？
https://www.cnblogs.com/djlxs/p/6123294.html

块元素上下左右居中
1.position:absolute left:50% top:50% margin-left:-50px margin-top:-50px
1.position:absolute left:50% top:50% transform:translate3d(-50%,-50%,0)
1.position:absolute left:calc(50%-50px) top:calc(50%-50px)

关于单位 vh vw
100vh指的是浏览器视口（浏览器可见宽度，可见高度，就是一屏的宽度高度）的高度

关于定位和浮动脱离文档流：https://www.cnblogs.com/sylz/p/5701549.html
设置了absolute的元素脱了了文档流，元素在没有设置宽度的情况下，宽度由元素里面的内容决定（浮动也是）
当一个块元素相对于页面文档定位时，top指的是距离页面最顶部的高度，bottom指的是距离首屏底部的距离，
当页面向上滚动，bottom的参考点也会上移，因为第一屏也向上移动了


获取浏览器高度，视口高度
https://blog.csdn.net/fly_wugui/article/details/81110173

搞清楚clientHeight,scrollHeight,offsetHeight，scrollTop的区别
https://blog.csdn.net/qq_35430000/article/details/80277587
clientHeight ：高度+上下padding
offsetHeight:高度+上下padding+上下bodrder
scrollHeight:高度+下border+溢出文本高度
scrollTop:元素向上滚动的高度


关于 window.history的原理
https://www.kmbox.cn/html/help/362.html
react 由A页面携带state跳转到B页面，刷新b页面，this.props.location.state不变，并且
history的长度也不变,state内部存的东西存储在window.history中。（hashHistory会刷新？当hash值改变的时候，history的长度会加1，state也会清空）
react  browserHistory的原理：
React Router 是建立在 history 之上的。
简而言之，一个 history 知道如何去监听浏览器地址栏的变化，
并解析这个 URL 转化为 location 对象，
然后 router 使用它匹配到路由，最后正确地渲染对应的组件。

关于git 
1.什么时候会出现 Your branch is ahead of 'origin/master' by 2 commits.
接连多次commit
2.git config 
全局配置
$ git config --global user.name “github’s Name”
$ git config --global user.email “github@xx.com” 
项目单独配置
$ git config user.name “gitlab’s Name”
$ git config user.email “gitlab@xx.com”
在项目中查看的当前配置
git config --list


智能编码项目遇到问题总结
1.modal.confirm（）中的表单无法赋值
2.注意moment(val)  val一定要存在 不能为null






switch的特殊点  https://blog.csdn.net/u013982652/article/details/80391522
可以看到不加break的话会继续向下执行，直到遇到break或return或switch结束为止
当遇到匹配条件后如果没有及时 break 会一直向下不在判断知道遇到break或者return才会退出



如何测试本机是否连接到github或者gitlab仓库
看是否ping得通
只有设置了ssh key才能用ssh的方式download项目
查看是否设置了ssh key:  ls -al ~/.ssh


export default ,export的区别
export用法：
export var a=3;
export function aa(){}
export class 

或者
var a=1;
function b(){}
export {a,b}

不能
var t=1;
export t;


在引入的时候：
import * as all;用的时候all.a
import {a,b} from 

import default 的用法：
var a=1;
export default a;

export default function aa(){}
export default {}

不能export export var z=1;

import 任意变量名

通过export方式导出，在导入时要加{ }，export default则不需要

import aa ,{a,b} from "./b"这种情况是b文件中既有export default 又有export  


字符串转数字
https://www.cnblogs.com/jiajialove/p/10998710.html


react Hooks
createContext的用法 contextType  Provider Consumer（生产消费模式）
React的Context的使用方法简介
https://www.cnblogs.com/littleSpill/p/11221538.html
React的contextType的使用方法简介
https://www.cnblogs.com/littleSpill/p/11221817.html

在纯函数式组件中消费式使用Context  useContext用法
https://blog.csdn.net/weixin_43676119/article/details/89150233

useReducer和useContext之间的联系
https://www.jianshu.com/p/eddb25cda5f0

useReducer用法（与useState区别）
https://www.jianshu.com/p/566f0d79ca7b

useContext Hook 是如何工作的（以及与contextType的区别）
https://segmentfault.com/a/1190000020111320?utm_source=tag-newest


document.documentElement和document.body之间的区别：
前者指的是html元素  后者指的是body元素


scrollTop与scrollTo的区别？
前者是属性，可以直接获取也可以赋值，后者是方法，如window.scrollTo(100,100)
scrollTop = 100;
什么元素有scrollTop ?
只有有overflow:scroll的盒子才有scrollTop;一个固定高度的父盒子，其内部内容溢出滚动，这时候父盒子才有scrollTop
如何判断是否滑动到底部?
父盒子的
clientHeight + scrollTop ==scrollHeight
https://blog.csdn.net/zhaileilei1/article/details/102630048

页面的大滚动条是谁的？
document.documentElement ? document.body ?

react 箭头函数  bind 与传参数  e的位置
https://www.jianshu.com/p/a01bd72c1b53
箭头函数 onClick={(e)=>{this.handleClick(22,e)}}
bind  onClick={this.handleClick.bind(22)} 
handleClick(num,e)
onClick={this.handleClick.bind(22)} 这样会消耗性能，每次都会重新生成一个函数，可以在constructor构造函数中
一次性bind;



es6 类 Class
静态方法中的this指的是类本身，而不是类的实例
静态方法只能在其他静态方法中被调用，不能在实例方法中调用，子类可以继承父类的静态方法，在子类
静态方法中通过super.父类静态方法 调用。
https://blog.csdn.net/qdmoment/article/details/82496685
https://www.jianshu.com/p/5585412b4575

函数与函数式组件的区别？
react hooks只能在函数式组件中使用，如果函数通过标签的形式引用就是函数式组件，如果通过()方式执行就是函数而不是函数式组件

state既受自身组件控制又受prop的影响
https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#common-bugs-when-using-derived-state


在promise.then 以及setTimeout中，setState会变成同步的；setState不会合并，setState执行
后，就会re-render，重新渲染完之后，才会继续执行setState下面的语句


节流和防抖（都是在事件连续触发时的处理方案）
节流 throttle：每隔一段时间执行一次 （火车上人上厕所，有人 无人是个标识，每隔20分钟一个人上完厕所下一个人才能上）
防抖 debounce :只执行最后一次  （假设timer是20分钟，一个人进去上厕所，如果20分钟内没敲门，20分钟完这个人就可以上厕所，如果20分钟内有人
敲门，那么这个人就得出来换下一个人继续等待20分钟。）
https://segmentfault.com/a/1190000018428170?utm_source=tag-newest


闭包的理解：
就是闭包的本质就是函数嵌套，就是在函数里面定义函数，
内部函数可以引用外部函数的参数和变量
参数和变量不会被垃圾回收机制给回收
如果在全局环境定义的变量，就会污染全局环境，因此可以利用闭包的特性来模仿块级作用域
如节流函数 防抖函数  debounce 传入一个函数参数再返回一个函数。
闭包某种程度上就是函数的内部函数，可以引用外部函数的局部变量。当外部函数退出后，如果内部函数依旧能被访问到，那么内部函数所引用的外部函数的局部变量就也没有消失，该局部变量的生存周期就被延续。


高阶函数：
　--高阶函数形成条件：
1.函数作为参数传递  
如数组方法 map reduce filter 封装ajax异步请求，函数参数为请求回来之后要做的事情 等  
2.函数作为返回值返回  debounce  闭包，外部函数包裹内部函数，内部函数可以使用外部函数中的环境变量，不至于造成全局污染

call bind apply 柯理化函数
https://github.com/lin-xin/blog/issues/7



yarn upgrade 指的是升级到指定范围的版本

网站账号：
简书：微信登录
package.json和package-lock.json和yarn.lock的作用
https://www.jianshu.com/p/5ecdce174a97
https://www.jianshu.com/p/9ae748598f1a



3.3

绝对定位下 bottom和top同时设置，top生效 ,auto

wrapClassname .ant-modal-wrap 
style和className  .ant-modal




git rebase

clearTimeout(timer)和timer=null有没有区别呢?
clearTimeout(timer)清除了timer指向的定时器，timer=null，是修改timer的指向，是timer这个变量不指向某个定时器，然而并没有清除这个定时器，定时器依旧可以使用

深比较与浅比较

function shallowEqual(objA: mixed, objB: mixed): boolean {
    if (Object.is(objA, objB)) {
      return true;
    }
  
    if (
      typeof objA !== 'object' ||
      objA === null ||
      typeof objB !== 'object' ||
      objB === null
    ) {
      return false;
    }
  
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Test for A's keys different from B.
    for (let i = 0; i < keysA.length; i++) {
      if (
        !({}).hasOwnProperty.call(objB, keysA[i]) ||
        !Object.is(objA[keysA[i]], objB[keysA[i]])
      ) {
        return false;
      }
    }
  
    return true;
  }

如何实现深拷贝
https://segmentfault.com/a/1190000018371840
https://segmentfault.com/a/1190000019149799
\

React key
输入框每输入一下就失焦？
1.输入框所在的组件每次输入都会重新销毁创建，比如把子组件写在父组件的render里面导致每次父组件render的时候子组件都会重新定义
2.key 

设置请求超时3000ms  超过之后再调接口就没反应了 

登录实现

input autoComplete为“new-password” 不自动填充 没有就是可以自动填充



css  cursor属性   https://www.jianshu.com/p/b28c3f53163b
pointer-events详解  http://www.imooc.com/article/48022 
如何利用pointer-events属性实现a标签的禁用   a[disabled]{color:(0,0,0,0.25);pointer-events:none;}
none——元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素。

Element.style和inherited from之间的区别？
inherited from 应该是继承的父级样式吧。
Element.style 是内联样式 和 内部 和 外部 以及通过js设置的样式吧。

application/x-www-urlencoded 与application/json的区别
https://www.cnblogs.com/honghong87/p/9888442.html
举例. 向服务器发送数据 {a:"a", b:"b"}
如果头的格式是application/x-www-form-urlencoded,  则ajax.send("a='a'&b='b'");
如果头的格式是application/json, 则ajax.send(JSON.stringify(data));

application/x-www-urlencoded 与 multipult/form-data的区别
https://www.cnblogs.com/kaibin/p/6635134.html
在Form元素的语法中，EncType表明提交数据的格式 用 Enctype 属性指定将数据回发到服务器时浏览器使用的编码类型。 
例如： application/x-www-form-urlencoded： 窗体数据被编码为名称/值对。这是标准的编码格式。
 multipart/form-data： 窗体数据被编码为一条消息，页上的每个控件对应消息中的一个部分，这个一般文件上传时用
 如果没有type=file的控件，用默认的application/x-www-form-urlencoded就可以了
  
 blob文件和file（文件上传获取的）的区别
 Blob的全称是binary large object，表示二进制大对象，并不是前端的特有对象，而是计算机界的通用术语，MySql/Oracle数据库中，就有一种Blob类型，专门存放二进制数据。
 file根据名字很容易理解，就是纯粹的文件。通常，表示我们使用<input type="file">选择的FileList对象，或者是使用拖拽操作搞出的DataTransfer对象。
 file对象也是二进制对象，从属于Blob；也就是说file是Blob里的一个小类，Blob的属性和方法都可以用于file，而file自己也有自己特有的属性和方法。对于Blob和file都有的属性，推荐使用Blob的属性

request  headers参数
 https://www.cnblogs.com/yanggb/p/11684494.html

 ajax 上传进度条
 https://blog.csdn.net/weixin_41646716/article/details/90058189

 浏览器下载window.location.href 就是a标签下载 设置href(Data Url)和downLoad(fileName)属性点击
 坑
 export function downLoadByUrl(url){
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
      if (xhr.status == 200 && xhr.readyState === 4) {
          // var blob =xhr.response
          // var a = document.createElement('a');
          // // blob.type = "application/octet-stream";
          // //创键临时url对象
          // var url = URL.createObjectURL(blob);
          // a.href = url;
          // a.click();
          // //释放之前创建的URL对象
          // window.URL.revokeObjectURL(url);
               var blob = this.response;
               var reader = new FileReader();
               reader.readAsDataURL(blob);    // 转换为base64
               console.log("请求头",xhr.getAllResponseHeaders())
               reader.onload = (e)=>{   
                  if(xhr.getResponseHeader('content-disposition')){
                      fileName = xhr.getResponseHeader('content-disposition').split(";")[1].split("=")[1];
                  }else{
                      console.log('下载用例出错！');
                      return;
                  }
                  var a = document.createElement('a');
                  var url = URL.createObjectURL(e.target.response);
                  a.href = url;
                  a.download=filename;
                  a.click();
                  //释放之前创建的URL对象
                  window.URL.revokeObjectURL(url);
               } 
      }
  };
  //发送请求
  xhr.send();
}
 https://scarletsky.github.io/2016/07/03/download-file-using-javascript/
 FileReader的用法 https://blog.csdn.net/xianweizuo/article/details/88911364\


卸载
npm uninstall vue-cli -g
yarn global remove vue-cli
安装
npm install -g @vue/cli
# OR
yarn global add @vue/cli

@import 的用法   http://www.divcss5.com/jiqiao/j53086.shtml
<style>
@import url(images/style.css);
</style>
CSS文件代码中运用@import引入此外一个CSS文件



 vue

 component：(resolve) => require是什么意思？
 懒加载 https://www.jianshu.com/p/487a600824af
 
 $set用法
 this.obj= Object.assign({}, this.obj, { a: 1, e: 2 })
 this.$set(this.obj,'e',02)
 Vue.set(vm.obj, 'e', 0)
 https://www.jianshu.com/p/71b1807b1815

 /sync的用法
 https://blog.csdn.net/qq_40285497/article/details/90637335
 vue后台整套解决方案
 https://panjiachen.gitee.io/vue-element-admin-site/

 深层选择器  /deep/ 或者>>>
 有何用？修改element-ui自带的样式，比如el-button可以直接加class修改样式，但是如果要改变el-button下面的span的样式就要用/deep/
  

 Cannot assign to read only property 'exports' of object

 原因 ：在webpack打包的时候，可以在js文件中混用require和export。但是不能混用import 以及module.exports。

 因为webpack 2中不允许混用import和module.exports,
 执行npm：

    npm install babel-plugin-transform-es2015-modules-commonjs

然后在 babelrc文件中配置

{ “plugins”: [“transform-es2015-modules-commonjs”] }


