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
    color: rgb(228, 226, 226);
  }

  div.container {
    box-sizing: border-box;
    z-index: auto;
    display: block;
    line-height: 24px;
    min-width: fit-content;
    margin-left: 170px;
    margin-right: 170px;
  }
</style>
