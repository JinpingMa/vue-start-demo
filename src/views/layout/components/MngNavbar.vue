<template>
    <el-menu
            class="navbar"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff">
        <img src="../../../assets/u82.svg" />
        <p class="title">vue项目demo</p>
        <div class="right-menu">
            <error-log class="errLog-container right-menu-item"></error-log>
            <a><i class="el-icon-search"></i></a>
            <i class="el-icon-bell"></i>
            <el-dropdown style="color: #fff;">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                    <span>admin</span>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <!--<span class="el-dropdown-link">-->
                <!--admin<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                <!--</span>-->
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/userMng/index">
                        <el-dropdown-item>
                            用户管理
                        </el-dropdown-item>
                    </router-link>
                    <router-link to="/userMng/profile">
                        <el-dropdown-item>
                            用户中心
                        </el-dropdown-item>
                    </router-link>
                    <router-link to="/">
                        <el-dropdown-item>
                            修改密码
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided @click.native="logout">
                        <span style="display:block;">登出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!--<el-dropdown class="avatar-container right-menu-item" trigger="click">-->
            <!--&lt;!&ndash;<div class="avatar-wrapper">&ndash;&gt;-->
            <!--&lt;!&ndash;<span>用户名</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<i class="el-icon-caret-bottom"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="avatar-wrapper">-->
            <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
            <!--<span>用户名</span>-->
            <!--<i class="el-icon-caret-bottom"></i>-->
            <!--</div>-->
            <!--<el-dropdown-menu slot="dropdown">-->
            <!--<router-link to="/">-->
            <!--<el-dropdown-item>-->
            <!--修改密码-->
            <!--</el-dropdown-item>-->
            <!--</router-link>-->
            <!--<el-dropdown-item divided>-->
            <!--<span @click="logout" style="display:block;">登出</span>-->
            <!--</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
        </div>
    </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'
  import ErrorLog from '@/components/ErrorLog'

  export default {
    components: {
      Breadcrumb,
      Hamburger,
      ErrorLog
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('toggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        })
      },
      handleSelect(key, keyPath) {
        console.log('路由跳转：', key, keyPath)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        /*height: 50px;*/
        /*line-height: 50px;*/
        /*border-radius: 0px !important;*/
        /*.hamburger-container {*/
        /*line-height: 58px;*/
        /*height: 50px;*/
        /*float: left;*/
        /*padding: 0 10px;*/
        /*}*/
        /*.breadcrumb-container {*/
        /*float: left;*/
        /*}*/
        .errLog-container {
            display: inline-block;
            vertical-align: top;
        }
        .title {
            display: inline-block;
            color: #fff;
            margin: 0;
            font-size: 20px;
            line-height: 60px;
            float: left;
            /*color: maroon;*/
            font-weight: 700;
            padding: 0 40px 0 20px;
            outline: none;
        }
        .right-menu {
            float: right;
            height: 100%;
            color: #000000;
            height: 60px;
            margin-right: 20px;
            &:focus {
                outline: none;
            }
            a {
                height: 60px;
                line-height: 60px;
            }
            i {
                line-height: 60px;
                height: 60px;
                margin-right: 10px;
            }
            .avatar-wrapper {
                display: inline-block;
            }
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
            }
            .international {
                vertical-align: top;
            }
            .theme-switch {
                vertical-align: 15px;
            }
            .avatar-container {
                height: 50px;
                margin-right: 30px;
                color: #ffffff;
                .avatar-wrapper {
                    cursor: pointer;
                    margin-top: 5px;
                    position: relative;
                    .user-avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }
                    .el-icon-caret-bottom {
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
