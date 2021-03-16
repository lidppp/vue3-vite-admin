const state = {
    isMenuClosed:false
}

const mutations = {
    toggleClosed(state){
        state.isMenuClosed = !state.isMenuClosed
    }
}


export default {
    namespaced:true,
    state,
    mutations,
}
