import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: JSON.parse(localStorage.getItem('list') || 'null'),
        obj: Object

    },

    mutations: {
        increment(state, obj) {
            // изменяем состояние
            state.count = obj;
            localStorage.setItem('list', JSON.stringify(state.count));
        }

    },
    actions: {

    },
    modules: {

    }
})