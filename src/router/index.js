import vueRouter from "vue-router"
import vue from "vue"
vue.use(vueRouter)
import home from "../views/home.vue"
import test from "../views/test.vue"
export default new vueRouter({
    mode: "hash",
    routes: [
        {
            path: "/home",
            component: home
        },
        {
            path: "/test",
            component: test
        }
    ]
})