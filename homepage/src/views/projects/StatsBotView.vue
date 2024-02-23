<template>
  <div class="container">
    <h1>Discord Stats Bot</h1>
    <div class="general">
      <statsBot></statsBot>
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
        create a <code><span>.env</span></code> file in the root directory of the project and copy the token of the bot
        into this file like this:
        <code><span>TOKEN</span>=xxx</code>.
      </p>
      <h3>Developing &amp; Testing</h3>
      <p>
        For testing, you can change the <code><span>testServer</span></code> and <code><span>devs</span></code> properties
        in the
        <code><span>config.json</span></code> file to to your test server id and your developers discord id's. <br>
        Now you can run the bot with the argument <code><span>--test</span></code> to start the bot in development mode,
        where new commands only get registered on your testServer. <br>
        Pay attention, that the already registered commands will still be available on all servers.
      </p>
    </div>
    <div class="commands">
      <h2>Commands</h2>
      <h3 id="misc">Misc</h3>
      <ul>
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
}</style>