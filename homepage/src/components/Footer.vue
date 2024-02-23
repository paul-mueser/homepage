<template>
    <footer class="text-center text-white p-4">
      <div class="container">
        <div class="content">
          <router-link to="/legal">legal</router-link>
          <router-link to="/privacy">privacy</router-link>
        </div>
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
    text-align: center;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color .8s ease, color .8s ease;
  }

  .router-link-active {
    color: var(--text-color-highlight);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 10px;
    transition: background-color .8s ease, color .8s ease;
  }

  a:hover {
    color: var(--text-color-highlight);
  }
</style>