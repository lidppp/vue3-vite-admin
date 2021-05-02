import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/index/index.vue"
import store from "@/store"
// 静态路由
export const routeList = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home,
        name: "Home",
        meta: {
            title: "首页",
            icon: "el-icon-platform-eleme"
        }
    },
    {
        path: '/login',
        name: "Login",
        component: () => import("@/pages/login/index.vue"),
        meta: {
            title: "登录",
            icon: "el-icon-platform-eleme",
            hidden: true,
            notLayout: true,

        }
    }

];
// 异步路由
// 注意: name不能重复
export const syncRouterList = [
    {
        path: "/list",
        name: "List",
        component: "list/index",
        meta: {
            title: "列表",
            icon: "el-icon-s-tools",
            hideChildren: true
        },
        children: [
            {
                path: "",
                redirect: '/list/index'
            },
            {
                path: "/list/index",
                name: "ListIndex",
                component: "list/index",
                meta: {
                    title: "首页",
                    icon: "el-icon-s-tools"
                }
            }, {
                path: "/list/index2",
                name: "ListIndex2",
                component: "list/index",
                meta: {
                    title: "首页2",
                    icon: "el-icon-s-tools"
                }
            }, {
                path: "/list/index2/add",
                name: "ListIndex2accc",
                component: "list/add/add",
                meta: {
                    title: "首页2Add",
                    icon: "el-icon-s-tools"
                }
            }
        ]
    }
]
// 404页面
export const notFindRouter = {
    path: '/:pathMatch(.*)*',
    name: "NotFind",
    component: () => import("@/pages/404.vue"),
    meta: {
        title: "404",
        icon: "el-icon-platform-eleme",
        hidden: true,
        notLayout: true,
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: routeList
})


// 路由守卫
router.beforeEach(async (to, from, next) => {
    if (to.name !== "Login" && store.state.routerList.baseList.length === 0) {
        await store.dispatch("routerList/getBaseList")
        next({path: to.path})
    }else{
        document.title = to.meta.title
        next()
    }
})

router.addRoutes = function(routeList){
    for (let i = 0; i < routeList.length; i++) {
        router.addRoute(routeList[i]);
    }
}

export default router;
