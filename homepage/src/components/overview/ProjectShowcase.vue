<template>
  <div class="projectShowcase">
    <h1>Some Projects:</h1>
    <div class="projects">
      <div class="project">
        <h2 style="margin-bottom: 0;">
          <router-link to="/projects/statsbot" class="highlight">Discord Stats Bot</router-link>
        </h2>
        <p style="margin-top: 0;">
          This is a basic Discord bot primarily used for gathering statistics from a channel in a Discord server calles
          &quot;Zitate&quot;, where users can post quotes.
        </p>
      </div>
      <div class="project">
        <h2 style="margin-bottom: 0;">
          <router-link to="/projects/musicbot" class="highlight">Discord Music Bot</router-link>
        </h2>
        <p style="margin-top: 0;">
          This is a basic Discord music bot that can play music from YouTube and other sources.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectShowcase',
  components: {}
}
</script>