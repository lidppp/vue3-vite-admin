# vue3-vite-admin
## 简介
本项目是由vue3+vite2+element-plus搭建,是一款完成基础功能的后台框架, 内部集成了菜单级别的权限控制

## 基础使用
### 路由
路由文件在 `src/router/router.js `  
目前加载时采用setTimeout模拟后台接口请求下来的数据, 数据在router.js中的syncRouterList变量中存放
> 注意: component格式必须如以下格式  `list/index` 最后生成的文件路径为 `src/pages/list/index.vue`   
> vue-router-next 取消了`addRouters`Api所以添加路由的时候需要将数组遍历一次一条一条进行添加

#### meta 路由元信息
```ts
interface meta {
    title: string,   // 标题用于左侧导航栏和面包屑的名称展示
    icon?: string,    // icon图标类名, 目前为elementui的类名, 如有需要可以自行去layout/menuItem.vue中修改
    hidden?: boolean,  // 是否在列表中展示该项, true为隐藏,  注意, 如果给父级路由添加, 子级都不会被的渲染了
    notLayout?: boolean, // 是否需要layout包裹, true为不需要, 一般在login或者404页面中为ture
}
```


### 请求封装
请求封装文件在 `src/utils/request.js`  
需要根据需求自行修改前置路由守卫和后置路由守卫

## 提示
vite导入vue文件的时候不能省略`.vue`后缀, 但是`.js`可以省略 

vite默认并不支持`@ -> src/`的别名,需要在vite.config.js中配置(本项目已配置@->src)

vite动态导入文件时需要遵守此[规则](https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations)
