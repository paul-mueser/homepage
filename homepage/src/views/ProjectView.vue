<template>
  <div class="container">
    <div class="general">
      <h1>General Informations</h1>
      <p>
        Here you can find a broad overview over some my projects.
      </p>
    </div>
    <div class="projects">
      <template v-for="project in content">
        <h1 class="project">{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="links">
          <template v-for="(link, index) in project.links" :key="index">
            <a class="highlight" :href="link.href" rel="external nofollow noopener" target="_blank">{{ link.text }}</a>
            <a class="divider" v-if="index !== project.links.length - 1">|</a>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { fetchProjects } from '@/services/contentService';

export default {
  name: 'ProjectView',
  data() {
    return {
      content: [
        {
          title: "No Projects",
          description: "There are no projects available at the moment.",
          links: []
        }
      ]
    }
  },
  methods: {
    async getProjects() {
      this.content = await fetchProjects();
    }
  },
  mounted() {
    this.getProjects();
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
  position: relative;
}

.project::before {
  content: '';
  position: absolute;
  top: -0.75em;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--text-color);
}

.links {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
}

.divider {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
