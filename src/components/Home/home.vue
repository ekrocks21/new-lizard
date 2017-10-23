<template>
  <v-app>
    <appHeader></appHeader>
    <HomeHero></HomeHero>
  </v-app>  
</template>

<script>
  import HomeHero from './hero.vue'
  import Header from '../shared/Header.vue'
  export default {
    components: {
      appHeader: Header,
      HomeHero: HomeHero
    }
   } 
</script>

