<template>
  <div class="container">
    <personal></personal>
  </div>
</template>

<script>
import Personal from '@/components/overview/Personal.vue'
export default {
  name: 'HomeView',
  components: {
    Personal
  }
}
</script>

<style>
  .highlight {
    color: var(--text-color-highlight);
    text-decoration: none;
    margin: 0;
  }

  .highlight:hover {
    text-decoration: underline;
  }
</style>