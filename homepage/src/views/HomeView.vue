<template>
  <div class="container">
    <h1 class="text-center">Paul Müser</h1>
    <p>Hi! I'm a student at Paderborn University. I like to <a href="https://github.com/paul-mueser" rel="external nofollow noopener" target="_blank">code in my freetime</a> 
    and on this website I will share some of my projects with you. I hope you enjoy your stay!</p>
    <p><router-link to="/projects">Check out my projects</router-link> for more information. If you have any questions, 
    feel free to contact me via <a href='mailto:info@paulmueser.de'>Mail</a> or using another platform of your choice.</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
  a {
    color: rgb(0, 162, 255);
    text-decoration: none;
    margin: 0;
  }

  a:hover {
    text-decoration: underline;
  }
</style>