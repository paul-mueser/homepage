<template>
  <div class="personal">
    <h1 class="text-center">Paul Müser</h1>
    <p>Hi! I'm a computer science student at Paderborn University. I like to <a class="highlight" href="https://github.com/paul-mueser"
                                                               rel="external nofollow noopener" target="_blank">code in
      my freetime</a>
      and on this website I will share some of my projects with you. I hope you enjoy your stay!</p>
    <p>Check out my
      <router-link to="/projects" class="highlight">projects</router-link>
      for detailed information on all
      of my projects. If you have any questions or just want to say hi,
      feel free to contact me via <a class="highlight" href='mailto:kontakt@paulmueser.de'>Mail</a> or using another
      platform of your choice.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  components: {}
}
</script>