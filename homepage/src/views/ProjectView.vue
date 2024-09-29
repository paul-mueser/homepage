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
        <div class="links">
          <router-link class="highlight" to="/projects/statsbot">More information</router-link>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/stats-bot/issues/new?assignees=paul-mueser&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D+" 
          rel="external nofollow noopener" target="_blank">Report Bugs</a>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/stats-bot/issues/new?assignees=paul-mueser&labels=enhancement&projects=&template=feature_request.md&title=%5BFEATURE%5D+" 
          rel="external nofollow noopener" target="_blank">Request Features</a>
          <a class="divider">|</a>
          <a class="highlight" href="https://discord.com/oauth2/authorize?client_id=1207711066247921766" 
          rel="external nofollow noopener" target="_blank">Invite to Discord</a>
        </div>
      </div>
      <div>
        <h1 class="project">Discord Music Bot</h1>
        <musicBot></musicBot>
        <div class="links">
          <router-link class="highlight" to="/projects/musicbot">More information</router-link>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/music-bot/issues/new?assignees=paul-mueser&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D+" 
          rel="external nofollow noopener" target="_blank">Report Bugs</a>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/music-bot/issues/new?assignees=paul-mueser&labels=enhancement&projects=&template=feature_request.md&title=%5BFEATURE%5D+" 
          rel="external nofollow noopener" target="_blank">Request Features</a>
        </div>
      </div>
      <div>
        <h1 class="project">My Homepage</h1>
        <homepage></homepage>
        If your having problems with this site or want to report any issues please write me <a class="highlight" href="mailto:website@paulmueser.de">here</a>.
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

.links {
  display: flex;
  flex-direction: row;
}

.divider {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
