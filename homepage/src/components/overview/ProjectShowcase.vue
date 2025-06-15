<template>
  <div class="projectShowcase">
    <h2>Some Projects:</h2>
    <div class="projects">
      <div class="project">
        <h3 style="margin-bottom: 0;">
          <router-link to="/projects" class="highlight">Discord Stats Bot</router-link>
        </h3>
        <p style="margin-top: 0;">
          This is a basic Discord bot primarily used for gathering statistics from a channel in a Discord server called
          &quot;Zitate&quot;, where users can post quotes.
        </p>
      </div>
      <div class="project">
        <h3 style="margin-bottom: 0;">
          <router-link to="/projects" class="highlight">Discord Music Bot</router-link>
        </h3>
        <p style="margin-top: 0;">
          This is a basic Discord music bot that can play music from multiple sources.
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