<template>
    <div class="search-bar">
        <el-input style="display: inline-block" placeholder="请输入内容" v-model="input">
        </el-input>
        <el-button class="search-button1" type="primary" icon="el-icon-search" @click="handleSearch"></el-button>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          input: ''
        }
      },
      methods: {
        handleSearch() {
          alert('search')
        }
      }
    }
</script>
<style>
    .el-input--medium .el-input__inner {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .el-menu-item {
        /*color: rgb(255, 255, 255) !important;*/
        /*border-bottom-color: transparent !important;*/
        /*background-color: rgb(84, 92, 100) !important;*/
    }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    .search-bar {
        vertical-align: center;
        width: 500px;
        margin: 100px auto auto auto;
        display: flex;
        .search-button1 {
            display: inline-block;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
</style>