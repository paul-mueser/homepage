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

      <div class="project">
        <h1>Project 2</h1>
        <p>
          This is a project I have been working on for a while. It is a web application that allows users to create and manage their own projects.
        </p>
        <a href="#">More information</a>
      </div>
      <div class="project">
        <h1>Project 3</h1>
        <p>
          This is a project I have been working on for a while. It is a web application that allows users to create and manage their own projects.
        </p>
        <a href="#">More information</a>
      </div>
    </div>
  </div>
</template>

<script>
import StatsBot from '@/components/projects/StatsBot.vue'
export default {
  name: 'ProjectView',
  components: {
    StatsBot
  }
}
</script>