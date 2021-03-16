<template>
  <el-container>

    <!--左侧导航-->
    <el-aside width="auto">
      <!--上方logo栏-->
      <div class="logo">logo</div>
      <!--导航栏-->
      <div class="menu-box">
        <el-scrollbar>
          <layoutMenu :closed="menuClosed"/>
        </el-scrollbar>
      </div>
      <!--下方缩回固定槽-->
      <el-affix position="bottom" :offset="0" style="width: 100%;">
          <el-button style="width: 100%;height: 60px; border-radius: 0;font-size: 18px;" plain
                     @click="toggleClosed">
            <i :class="[!menuClosed ? 'el-icon-arrow-left':'el-icon-arrow-right']"></i>
          </el-button>
        </el-affix>
    </el-aside>
    <!--左侧导航结束-->
    <el-container>
      <!--右侧头部-->
      <el-header>
        <layoutHeader/>
      </el-header>

      <!--右侧主体部分-->
      <el-main class="content-main">
        <el-scrollbar>
          <div class="m-main">
            <slot></slot>
          </div>
        </el-scrollbar>
      </el-main>
      <!--右侧底部-->
      <el-footer>
        <layoutFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./menu.vue"
import Footer from "./footer.vue"
import Header from "./header.vue"
import {mapMutations, mapState} from "vuex";

export default {
  name: "layout",
  components: {
    layoutMenu: Menu,
    layoutFooter:Footer,
    layoutHeader:Header
  },
  computed: {
    ...mapState({
      menuClosed: (state) => state.menu.isMenuClosed
    })
  },
  watch:{
    "$route":{
      // implement:true,
      // deep:true,
      handler: (newval)=>{
        console.log(newval)
      }
    }
  },
  methods: {
    ...mapMutations("menu", ["toggleClosed"])
  }
}

</script>

<style scoped lang="scss">
:deep(.el-aside){
  z-index: 3;
}

:deep(.el-header) {
  box-shadow: 0 0 6px 3px rgb(0 0 0 / 20%);
  z-index: 2;
}

:deep(.el-main) {
  background: #fff;
}

:deep(.el-footer) {
  padding: 0;
}

.menu-box {
  height: calc(100vh - 120px);
  box-sizing: border-box;
  overflow: auto;
}

:deep(.el-menu-vertical-demo) {
  min-height: calc(100vh - 140px);
  padding-bottom: 20px;

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}

.logo {
  height: 60px;
  text-align: center;
  line-height: 60px;
  overflow: hidden;
  background: #fff;
  box-sizing: border-box;
  border-right: 1px solid #e6e6e6;
}


.content-main{
  overflow: auto;
  height: calc(100vh - 120px);
}

:deep(.el-main){
  padding:0;
  .m-main{
    padding: 20px;
  }
}
</style>

