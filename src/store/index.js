import {createStore} from "vuex"
import test from "./test"
import menu from "./menu";
import routerList from "./routerList";

const store = createStore({
    modules:{
        test,
        menu,
        routerList
    }
})

export default store
