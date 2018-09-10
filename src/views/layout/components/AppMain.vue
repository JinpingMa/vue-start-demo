<template>
    <section class="app-main" style="min-height: 100%;">
        <keep-alive :include="cachedViews">
            <router-view :key="key"></router-view>
        </keep-alive>
        <!--过渡效果-->
        <!--<transition name="fade-transform" mode="out-in">-->
            <!---->
        <!--</transition>-->
    </section>
</template>
<style>
    .app-main {
        background: #f0f2f5;
    }
</style>
<script>
  export default {
    name: 'AppMain',
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews
      },
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>
