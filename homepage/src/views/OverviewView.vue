<template>
  <div class="container">
    <h1 class="text-center">Paul Müser</h1>
    <personal></personal>
    <project-showcase></project-showcase>
  </div>
</template>

<script>
import Personal from '@/components/overview/Personal.vue'
import ProjectShowcase from '@/components/overview/ProjectShowcase.vue'

export default {
  name: 'HomeView',
  components: {
    Personal,
    ProjectShowcase
  }
}
</script>