<template>
    <el-scrollbar style="position: fixed;bottom: 0;top: 61px;height:100%" wrapClass="scrollbar-wrapper">
        <el-menu
                class="el-menu-vertical-demo"
                mode="vertical"
                :show-timeout="200"
                :default-active="$route.path"
                :collapse="isCollapse"
                background-color="rgb(249,250,251)"
                text-color="rgba(0, 0, 0, 0.647058823529412)"
                active-text-color="#1890FF"
        >
            <sidebar-item :routes="permission_routers"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './MngSidebarItem'

  export default {
    components: { SidebarItem },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>
<style>
    .scrollbar-wrapper > div{
        height: 100%
    }
    .el-menu-vertical-demo {
        width: 200px;
        height: 100%;
    }
</style>