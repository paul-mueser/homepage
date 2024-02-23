<template>
    <header>
      <nav>
        <div class="container">
          <div class="content">
            <div class="navbarSocial">
              <a href='mailto:info@paulmueser.de'>Mail</a> |
              <a href='https://github.com/paul-mueser' rel="external nofollow noopener" target="_blank">GitHub</a> | 
              <a href='https://www.linkedin.com/in/paul-m%C3%BCser/' rel="external nofollow noopener" target="_blank">LinkedIn</a>
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
    position: fixed;
    width: 100%;
    background-color: rgba(31, 31, 31, 0.911);
    padding-top: 1rem;
    padding-bottom: 1rem;
    top: 0;
    height: 30px;
    color: white;
    border-bottom: 1px solid #ccc;
  }

  .content {
    margin-left: -10px;
    margin-right: -10px;
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