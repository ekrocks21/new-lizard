<template>
  <v-app>
    <main style="background-color:#fafafa">
      <router-view></router-view>
    </main>
    <appFooter></appFooter>
  </v-app>
</template>

<script>
  import Footer from './components/shared/Footer.vue'
  export default {
    components: {
      appFooter: Footer
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
