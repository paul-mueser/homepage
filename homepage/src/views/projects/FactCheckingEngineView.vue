<template>
    <div class="container">
      <h1>Discord Music Bot <a class="highlight" href="https://github.com/paul-mueser/sw-fact-checking-engine" rel="external nofollow noopener" target="_blank">
        <font-awesome-icon :icon="['fas', 'code']"/>
      </a></h1>
      <div class="general">
        <factCheckingEngine></factCheckingEngine>
      </div>
    </div>
  </template>
  
  <script>
  import FactCheckingEngine from '@/components/projectDescriptions/FactCheckingEngine.vue'
  
  export default {
    name: 'FactCheckingEngineView',
    components: {
        FactCheckingEngine
    }
  }
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 0.5em;
    margin-top: 1em;
    padding-top: 10px;
    border-top: 1px solid var(--text-color);
  }
  
  h3 {
    margin-bottom: 0;
  }
  
  p {
    margin-top: 0;
  }
  
  ul {
    margin-top: 0;
  }
  
  .nowrap {
    white-space: nowrap;
  }
  </style>