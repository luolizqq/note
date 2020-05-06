1.导航守卫 https://www.jianshu.com/p/a5f863a31973
Home.vue
export default {
    data() {
        return {
            msg: '这是消息'
        }
    },
    //1
    beforeRouteEnter(to, from, next) {
        /* 访问当前vue实例 */
        next(vm => {
            console.log(vm.msg)
        })
    }
    //2
    beforeRouteUpdate(to, from, next) {
        console.log('子路由发生变化')
        next()
    }
    //3
    beforeRouteLeave (to, from, next) {
        window.clearInterval(this.timer) //清除定时器
        next()
     }
}
//1 进入组件前被调用，此时组件实例还没有被创建，所以函数内部不能访问this，如果需要访问当前vue实例，可以通过next() 方法的回调函数接收一个vm实例。
//2 还有一种常见应用场景是形如 /goods/:id 形式的路由，在访问 http://localhost:8080/#/goods/1 和 http://localhost:8080/#/goods/2 切换地址时，由于路由地址的变化只表示参数发生变化，页面组件并没有变化，也会执行 beforeRouteUpdate 钩子函数。
//3 离开组件时被调用，可以用来阻止页面离开，或者离开前销毁定时器等。


router.js 
路由上的name有啥用   跳转的时候会用到，:to='{name:}'
vue组件上的name有啥用  keep-alive的include会用到

style scoped  元素上生成data-v-xxx属性  
https://segmentfault.com/q/1010000009421651


vue 样式  https://blog.csdn.net/weixin_33827590/article/details/91404480
1.css-module 
<style module lang="less">
.handle-box {
    margin-bottom: 20px;
}
.bread{
    //修改elementUI默认样式
    :global{
        .el-breadcrumb__inner{
        cursor: pointer !important;
        }
    }
}
</style>
vue 之 css module的使用方法   https://www.jb51.net/article/151948.htm
//在元素上用:class='$style.bread'
2.scoped
修改elementUI默认样式
>>>或者/deep/深度选择器
原因style上加上scoped之后表明样式只对改组件起作用，要控制子组件下面的元素，就要在子组件上例如bread类，.bread >>> ,而bread这种自定义类一般是加在elm组件上的


vue-cli (vue-cli 2.x )和@vue/cli(vue-cli 3.x )
