<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body {
    margin: 0px;
    height: 100%;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(31, 31, 31);
  }
</style>
