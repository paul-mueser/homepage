<template>
  <div class="container">
    <div class="general">
      <h1>General Informations</h1>
      <p>
        Here you can find a broad overview of my projects. For detailed information, please visit the project's page or the github repository.
      </p>
    </div>
    <div class="projects">
      <statsBot></statsBot>
      <musicBot></musicBot>
      <homepage></homepage>
    </div>
  </div>
</template>

<script>
import StatsBot from '@/components/projects/StatsBot.vue'
import MusicBot from '@/components/projects/MusicBot.vue'
import Homepage from '@/components/projects/Homepage.vue'
export default {
  name: 'ProjectView',
  components: {
    StatsBot,
    MusicBot,
    Homepage
  }
}
</script>