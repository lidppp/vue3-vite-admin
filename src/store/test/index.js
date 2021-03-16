const state = {
    num:0
}

const mutations = {
    ADD_NUM(state){
        state.num++
    }
}

const actions = {
    ADD_NUM_ASYNC({commit}){
        commit("ADD_NUM")
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
