<template>
    <h2>General</h2>
    <p>
        This is a basic Discord bot primarily used for gathering statistics from a channel in a Discord server calles
        "Zitate",
        where users can post quotes. The bot can do a variety of things, such as counting the number of quotes per user and
        per hour of the day.
    </p>
    <p>
        While there is not much functionality yet, I plan to add more features in the future, such as modereation commands
        and a web interface
        for viewing the statistics.
    </p>
    <p>
        The bot is written in JavaScript and uses the discord.js library. It can either be run using Node.js or as a Docker
        container.
    </p>
</template>

<script>
export default {
    name: 'StatsBot',
}
</script>

<style scoped></style>