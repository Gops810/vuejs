import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lists: "",
        tasks: "",
    },
    mutations: {
        async SetList(state) {
            let e = await fetch("http://localhost:3000/lists");
            e = JSON.parse(await e.text());
            state.lists = e.length > 0 ? e : null;
        },

        async SetTasks(state) {
            let e = await fetch("http://localhost:3000/tasks");
            e = JSON.parse(await e.text());
            state.tasks = e.length > 0 ? e : null;
        },
    },
    actions: {
        async Add_list(state, data) {
            await fetch("http://localhost:3000/lists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            this.commit("SetList");
        },
        async Add_task(state, data) {
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            this.commit("SetTasks");
        },
    },
    modules: {},
});