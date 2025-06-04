<template>
  <div class="container">
    <div class="general">
      <h1>General Informations</h1>
      <p>
        Here you can find a broad overview over some my projects.
      </p>
    </div>
    <div class="projects">
      <div>
        <h1 class="project">Discord Stats Bot</h1>
        <p>
          This is a basic Discord bot primarily used for gathering statistics from a channel in a Discord server called
          &quot;zitate&quot; or &quot;quotes&quot;, where users can post quotes.
          The bot can do a variety of things, such as counting the number of quotes per user and per hour of the day.
          <br>
          <br>
          The bot is written in JavaScript and uses the discord.js library. It can either be run using Node.js or as a Docker
          container.
        </p>
        <div class="links">
          <a class="highlight" href="https://github.com/paul-mueser/stats-bot" 
          rel="external nofollow noopener" target="_blank">More information</a>
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
        <h2>General</h2>
        <p>
          This is a basic Discord music bot that can play music from YouTube and other sources. It has the basic functionality
          of a music bot.
          It is more of a fun project for me, so I am currently not planning on adding much more features, however I am open
          to suggestions and might add more features in the future.
          <br>
          <br>
          The bot is written in JavaScript and uses the discord.js and discord-player library. It can either be run using
          Node.js or as a Docker container.
        </p>
        <div class="links">
          <a class="highlight" href="https://github.com/paul-mueser/music-bot" 
          rel="external nofollow noopener" target="_blank">More information</a>
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
        <p>
          This is my personal homepage. It is a simple Vue.js application that I use to provide some information about me and
          to showcase my projects.
          It is a fun project for me and I am adding new features to it from time to time. I don't have much experience with
          web development, so I am learning a lot while working on this project and trying out a bunch of new things.
          <br>
          <br>
          The homepage is written in JavaScript using the Vue.js framework.
        </p>
        <div class="links">
          <a class="highlight" href="https://github.com/paul-mueser/homepage"
          rel="external nofollow noopener" target="_blank">More information</a>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/homepage/issues/new?assignees=paul-mueser&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D+" 
          rel="external nofollow noopener" target="_blank">Report Bugs</a>
          <a class="divider">|</a>
          <a class="highlight" href="https://github.com/paul-mueser/homepage/issues/new?assignees=paul-mueser&labels=enhancement&projects=&template=feature_request.md&title=%5BFEATURE%5D+" 
          rel="external nofollow noopener" target="_blank">Request Features</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectView',
  components: {
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
