<template>
    <header>
      <nav>
        <div class="container">
          <div class="content">
            <div class="social">
              <a href='mailto:info@paulmueser.de'>Mail</a> |
              <a href='https://github.com/paul-mueser' rel="external nofollow noopener" target="_blank">GitHub</a> | 
              <a href='https://www.linkedin.com/in/paul-m%C3%BCser/' rel="external nofollow noopener" target="_blank">LinkedIn</a>
            </div>
            <div class="navbarNav">
              <router-link to="/">overview</router-link>
              <router-link to="/projects">projects</router-link>
              <theme-button></theme-button>
            </div>
            <div class="navbarDropdownNav">
              <button class="dropbtn" @click="toggleDropdown()">Menu</button>
              <div class="dropdown-content">
                <router-link to="/about">about</router-link>
                <router-link to="/contact">contact</router-link>
                <theme-button></theme-button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
  import ThemeButton from './ThemeButton.vue';
  export default {
    name: 'Header',
    components: {
    ThemeButton
  },

    methods: {
      toggleDropdown() {
        var dropdown = document.querySelector(".dropdown-content");
        if (dropdown.style.display === "flex") {
          dropdown.style.display = "none";
        } else {
          dropdown.style.display = "flex";
          dropdown.style.flexDirection = "column";
          dropdown.style.height = "fit-content";
          dropdown.style.alignItems = "self-end";
        }
      }
    }
  };
</script>

<style scoped>
  header {
    position: fixed;
    width: 100%;
    background-color: var(--background-transparent);
    padding-top: 1rem;
    padding-bottom: .5rem;
    top: 0;
    height: fit-content;
    border-bottom: 1px solid var(--text-color); /* todo change to better boarder */
    color: var(--text-color);
    transition: background-color .8s ease, color .8s ease;
  }

  .content {
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    white-space: nowrap;
  }

  .navbarNav {
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }

  .navbarDropdownNav {
    display: none;
  }

  @media screen and (max-width: 400px) {
    .navbarNav {
      display: none;
    }

    .navbarDropdownNav {
      display: flex;
      flex-direction: column;
      height: fit-content;
      align-items: self-end;
    }
  }

  .dropdown-content {
    display: none;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 10px;
    transition: background-color .8s ease, color .8s ease;
  }

  a:hover {
    color: var(--text-color-highlight);
  }
</style>