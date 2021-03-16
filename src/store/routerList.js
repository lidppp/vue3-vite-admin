import {getRouterList} from "@/api/getRouter";
import router, {notFindRouter, routeList} from "../router/router";

function formatRouterList(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].component) {
            let fileName = list[i].component.split("/")
            list[i].component = () => import(`../pages/${fileName[0]}/${fileName[1]}.vue`);
        }
        if (list[i].children && list[i].children.length > 0) {
            formatRouterList(list[i].children)
        }
    }
    return list
}

const state = {
    baseList: [],
    list: [],
    isRequest: false
}

const mutations = {
    setBaseList: function (state, baseList) {
        state.baseList = baseList
    },
    setList: function (state, list) {
        list.push(notFindRouter)
        state.list = routeList.concat(list)
        router.addRoutes(list)
        state.isRequest = true
    },
    reset(state) {
        state.baseList = []
        state.list = []
        state.isRequest = false
    }
}

const actions = {
    getBaseList: async function ({commit}, id) {
        await getRouterList({id}).then(res => {
            commit("setBaseList", res);
            commit("setList", formatRouterList(res))
        })
    },
    logout: function ({commit}) {
        commit("reset");
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
