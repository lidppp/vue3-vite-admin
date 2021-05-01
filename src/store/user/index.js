import router from "@/router/router";
const state = {
    userInfo:{}
}

const mutations = {
    loginOut(){
      router.push("/login")
    }
}


export default {
    namespaced:true,
    state,
    mutations,
}
