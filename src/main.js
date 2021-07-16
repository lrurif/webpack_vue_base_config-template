//这是入口文件
//根组件
import vue from 'vue'
import app from './views/app.vue'
import router from "./router/index.js"
import store from "./store/index"
import "./ts.ts"
// vue.prototype.$store = store
new vue({
    //vue的配置项，名为render，值是函数
    //功能：把app这个组件
    render: function (h) {
        return h(app)
    },
    router,
    store
}).$mount('#App')