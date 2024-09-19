<template>
  <div class="container">
    <h1>Discord Stats Bot <a class="highlight" href="https://github.com/paul-mueser/stats-bot"
                             rel="external nofollow noopener" target="_blank">
      <font-awesome-icon :icon="['fas', 'code']"/>
    </a></h1>
    <div class="general">
      <statsBot></statsBot>
    </div>
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>Moderation: you can timeout, kick and ban users</li>
        <li>Quotes: get stats of the authors of the quotes, get all quotes of a specific author and much more
        </li>
      </ul>
    </div>
    <div class="beforeStarting">
      <h2>Before starting</h2>
      <h3>Prerequisites</h3>
      <p>
        To run the bot, you need to have Node.js installed on your machine. You can download it from the official
        <a class="highlight" href="https://nodejs.org/en/" rel="external nofollow noopener" target="_blank">Node.js
          website</a>.
      </p>
      <h3>Setup</h3>
      <p>
        To set up the bot, you need to create a new application on the
        <a class="highlight" href="https://discord.com/developers/applications" rel="external nofollow noopener"
           target="_blank">Discord Developer Portal</a>,
        create a <code><span class="nowrap">.env</span></code> file in the root directory of the project and copy the
        token of the bot and it's discord id into the file like this: <br>
        <code><span class="nowrap">TOKEN=xxx</span></code> <br>
        <code><span class="nowrap">BOT_ID=xxx</span></code>.
      </p>
      <h3>Developing &amp; Testing</h3>
      <p>
        For testing, you can change the <code><span class="nowrap">testServer</span></code> and <code><span class="nowrap">devs</span></code>
        properties
        in the
        <code><span class="nowrap">config.json</span></code> file to your test server id and your developers discord
        id's. There you can also change the <code><span class="nowrap">quoteLeaderRoleName</span></code>, which is the role for the person
        with the most quotes in the current week. <br>
        Now you can run the bot with the argument <code><span class="nowrap">--test</span></code> to start the bot in
        development mode, where new commands only get registered on your testServer. <br>
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
        If you don't want to develop the bot, you can also run the bot as a
        <a class="highlight" href="https://hub.docker.com/r/paulmueser/statsbotdocker"
          rel="external nofollow noopener" target="_blank">
          docker container from docker hub
        </a>
        with the command
        <code><span class="nowrap">docker run -d --env TOKEN=xxx --env BOT_ID=xxx paulmueser/statsbotdocker</span></code>.
      </p>
    </div>
    <div class="commands">
      <h2>Commands</h2>
      <h3 id="misc">Misc</h3>
      <ul>
        <li>leaderboard - replies with the leaderboard of the whole server</li>
        <li>ping - Pong!</li>
      </ul>
      <h3 id="moderation">Moderation</h3>
      <ul>
        <li>ban {target-user} {reason} - bans a member from the server</li>
        <li>kick {target-user} {reason} - kicks a member from the server</li>
        <li>timeout {target-user} {duration} {reason} - timeout a user for the specified time</li>
      </ul>
      <h3 id="quotes">Quotes</h3>
      <ul>
        <li>authorstats - replies with the authorstats of &quot;Zitate&quot;</li>
        <li>quote {date} {content} {author} - create a new quote</li>
        <li>quoteby {author} - replies with the quotes of a specific person</li>
        <li>stats - replies with the stats of &quot;Zitate&quot;</li>
      </ul>
    </div>
  </div>
</template>

<script>
import StatsBot from '@/components/projectDescriptions/StatsBot.vue'

export default {
  name: 'StatsBotView',
  components: {
    StatsBot
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