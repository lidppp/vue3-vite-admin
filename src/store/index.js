import {createStore} from "vuex"
import test from "./test"
import menu from "./menu";
import routerList from "./routerList";
import user from "./user"

const store = createStore({
    modules:{
        test,
        menu,
        routerList,
        user
    }
})

export default store
