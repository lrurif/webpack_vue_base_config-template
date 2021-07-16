import vuex from 'vuex';
import vue from "vue"
vue.use(vuex)
export default new vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        addCount(state) {
            state.count += 1;
        }
    },
    action: {

    }
})