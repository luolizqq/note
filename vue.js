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
