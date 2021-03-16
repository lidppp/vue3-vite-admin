<template>
  <template v-if="(data.children && data.children?.length) && (data.meta && (data.meta.hidden !== true) && !data.redirect) ">
    <el-submenu :index="data.path!==undefined ?data.path : data.index">
      <template #title>
        <i v-if="data.meta && data.meta.icon" :class="data.meta && data.meta.icon"></i>
        <span>{{data.meta && data.meta.title}}</span>
      </template>
      <template v-for="(item,index) in data.children">
        <template v-if="item.children && item.children.length">
          <m-menuItem :data="{...item,index:`${data.index}-${index}`}" />
        </template>
        <template v-else-if="!item.redirect">
          <el-menu-item :index="item.path!==undefined?item.path : `${data.index}-${index}`">
            <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
            <template #title>
              {{item.meta && item.meta.title}}
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-submenu>
  </template>

  <template v-else-if="(data.meta && (data.meta.hidden !== true) && !data.redirect)">
    <el-menu-item :index="data.path!==undefined?data.path : `${data.index}`">
      <i v-if="data.meta && data.meta.icon" :class="data.meta.icon"></i>
      <template #title>
        {{data.meta && data.meta.title}}
      </template>
    </el-menu-item>
  </template>
</template>

<script>
export default {
name: "m-menuItem",
  props:{
    data:{
      required:true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
