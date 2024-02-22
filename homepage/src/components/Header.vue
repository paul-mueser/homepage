<template>
    <header>
        <nav>
            <div class="container">
              <div class="navbarSocial">
                <a href='mailto:info@paulmueser.de'>Mail</a> |
                <a href='https://github.com/paul-mueser'>GitHub</a> | 
                <a href='https://www.linkedin.com/in/paul-m%C3%BCser/'>LinkedIn</a>
              </div>
              <div class="navbarNav">
                <router-link to="/">overview</router-link>
                <router-link to="/projects">projects</router-link>
                <button id="lightToggle" title="Change theme" style="display: none;">
                  <i>Dark</i>
                  <!-- TODO add light/dark mode + logic -->
                </button>
              </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
  header {
    background-color: rgb(31, 31, 31);
    padding: 1rem;
    top: 0;
    height: 30px;
    color: white;
    border-bottom: 1px solid #ccc;
  }

  nav {
    margin-left: 170px;
    margin-right: 170px;
    /* TODO change margin behavior to collapse if no space available */
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  }

  .navbarNav {
    overflow: hidden;
  }
  
  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
  }

  a:hover {
    color: rgb(0, 162, 255);
  }
</style>