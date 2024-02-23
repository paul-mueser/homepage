<template>
  <div class="container">
    <h1>Discord Music Bot <a class="highlight" href="https://github.com/paul-mueser/music-bot"
                             rel="external nofollow noopener" target="_blank">
      <font-awesome-icon :icon="['fas', 'code']"/>
    </a></h1>
    <div class="general">
      <musicBot></musicBot>
    </div>
    <div class="features">
      <h2>Features</h2>
      <p>
        The bot can play music from YouTube, SoundCloud, Apple Music and Spotify and has a queue system. It also has
        some commands to
        control the music and the bot itself.
      </p>
    </div>
    <div class="beforeStarting">
      <h2>Before starting</h2>
      <h3>Prerequisites</h3>
      <p>
        To run the bot, you need to have Node.js installed on your machine. You can download it from the official
        <a class="highlight" href="https://nodejs.org/en/" rel="external nofollow noopener" target="_blank">Node.js
          website</a>.
        You also need to have ffmpeg installed on your machine. You can download it from the official <a
          class="highlight"
          href="https://ffmpeg.org/download.html" rel="external nofollow noopener" target="_blank">ffmpeg website</a>.
      </p>
      <h3>Setup</h3>
      <p>
        To set up the bot, you need to create a new application on the
        <a class="highlight" href="https://discord.com/developers/applications" rel="external nofollow noopener"
           target="_blank">Discord Developer Portal</a>,
        create a <code><span class="nowrap">.env</span></code> file in the root directory of the project and copy the
        token of the bot
        into this file like this:
        <code><span class="nowrap">TOKEN=xxx</span></code>.
      </p>
      <h3>Developing &amp; Testing</h3>
      <p>
        For testing, you can change the <code><span>testServer</span></code> and <code><span>devs</span></code>
        properties
        in the
        <code><span class="nowrap">config.json</span></code> file to to your test server id and your developers discord
        id's. <br>
        Now you can run the bot with the argument <code><span class="nowrap">--test</span></code> to start the bot in
        development mode,
        where new commands only get registered on your testServer. <br>
        Pay attention, that the already registered commands will still be available on all servers.
      </p>
    </div>
    <div class="running">
      <h2>Running the bot</h2>
      <p>
        To run the bot, you need to open a terminal in the root directory of the project and run the command
        <code><span class="nowrap">npm run src/index.js</span></code>.
      </p>
      <p>
        If you want to run the bot in development mode, you can run the command
        <code><span class="nowrap">npm run src/index.js --test</span></code>.
      </p>
      <p>
        If you don't want to develop the bot, you can also run the bot as a <a class="highlight"
                                                                               href="https://hub.docker.com/r/paulmueser/musicbotdocker"
                                                                               rel="external nofollow noopener"
                                                                               target="_blank">docker container from
        docker hub</a> with the command
        <code><span class="nowrap">docker run -d --env TOKEN=xxx paulmueser/musicbotdocker</span></code>.
      </p>
    </div>
    <div class="commands">
      <h2>Commands</h2>
      <h3 id="misc">Misc</h3>
      <ul>
        <li>ping - Pong!</li>
      </ul>
      <h3 id="quotes">Music control</h3>
      <ul>
        <li>play {song} - plays a song</li>
        <li>pause - pauses the music</li>
        <li>resume - resumes the music</li>
        <li>skip - skips the current song</li>
        <li>stop - stops playing music and disconnects from the channel</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MusicBot from '@/components/projectDescriptions/MusicBot.vue'

export default {
  name: 'MusicBotView',
  components: {
    MusicBot
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