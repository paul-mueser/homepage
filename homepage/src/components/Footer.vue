<template>
    <footer class="text-center text-white p-4">
      <div class="container">
        <router-link to="/legal">legal</router-link>
        <router-link to="/privacy">privacy</router-link>
      </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    padding-bottom: .5rem;
    color: white;
    text-align: center;
    background-color: rgb(31, 31, 31);
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
  }

  a:hover {
    color: rgb(0, 162, 255);
  }
</style>