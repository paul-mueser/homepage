<template>
  <div class="container">
    <div class="general">
      <h1>General Informations</h1>
      <p>
        Here you can find a broad overview of my projects. For detailed information, please visit the project's page or
        the github repository.
      </p>
    </div>
    <div class="projects">
      <div>
        <h1 class="project">Discord Stats Bot</h1>
        <statsBot></statsBot>
        <router-link class="highlight" to="/projects/statsbot">More information</router-link>
      </div>
      <div>
        <h1 class="project">Discord Music Bot</h1>
        <musicBot></musicBot>
        <router-link class="highlight" to="/projects/musicbot">More information</router-link>
      </div>
      <div>
        <h1 class="project">My Homepage</h1>
        <homepage></homepage>
        <a class="highlight" href="https://github.com/paul-mueser/homepage" rel="external nofollow noopener"
          target="_blank">More information</a>
      </div>
    </div>
  </div>
</template>

<script>
import StatsBot from '@/components/projectDescriptions/StatsBot.vue'
import MusicBot from '@/components/projectDescriptions/MusicBot.vue'
import Homepage from '@/components/projectDescriptions/Homepage.vue'
export default {
  name: 'ProjectView',
  components: {
    StatsBot,
    MusicBot,
    Homepage
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  margin-top: 1em;
  padding-top: 10px;
}

.project {
  border-top: 1px solid var(--text-color);
}
</style>
