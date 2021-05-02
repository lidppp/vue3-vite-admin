<template>
  <!--渲染下拉-->
  <template v-if="(data.children && data.children?.length) && (data.meta && (data.meta.hidden !== true) && !data.redirect && !data.meta.hideChildren)  ">
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
  <!--渲染单个hideChildren-->
  <template v-else-if="(data.children && data.children?.length) && (data.meta && (data.meta.hidden !== true) && !data.redirect && data.meta.hideChildren) && f_children_url">
    <el-menu-item :index="f_children_url">
      <i v-if="data.meta && data.meta.icon" :class="data.meta.icon"></i>
      <template #title>
        {{data.meta && data.meta.title}}
      </template>
    </el-menu-item>
  </template>

  <!--渲染单个-->
  <template v-else-if="!(data.children && data.children?.length) && (data.meta && (data.meta.hidden !== true) && !data.redirect && !data.meta.hideChildren)">
    <el-menu-item :index="data.path!==undefined?data.path : `${data.index}`">
      <i v-if="data.meta && data.meta.icon" :class="data.meta.icon"></i>
      <template #title>
        {{data.meta && data.meta.title}}{{(data.children && data.children?.length)}}{{(data.meta && (data.meta.hidden !== true) && !data.redirect && data.meta.hideChildren)}}
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
  },
  computed:{
    f_children_url(){
      if((this.data.children && this.data.children?.length) && (this.data.meta && (this.data.meta.hidden !== true) && !this.data.redirect && this.data.meta.hideChildren)){
        return this.data.children.filter(item=>!item.redirect && item.path)[0].path
      }
      return false
    }
  }
}
</script>

<style scoped>

</style>
