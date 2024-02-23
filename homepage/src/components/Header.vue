<template>
  <header>
    <nav>
      <div class="container">
        <div class="content">
          <div class="social" style="font-size: 2rem;">
            <a href='mailto:kontakt@paulmueser.de' title="E-Mail">
              <font-awesome-icon icon="fa-solid fa-envelope"/>
            </a>
            <a href='https://github.com/paul-mueser' rel="external nofollow noopener" target="_blank" title="GitHub">
              <font-awesome-icon icon="fa-brands fa-github"/>
            </a>
            <a href='https://www.linkedin.com/in/paul-m%C3%BCser/' rel="external nofollow noopener" target="_blank"
               title="LinkedIn">
              <font-awesome-icon icon="fa-brands fa-linkedin"/>
            </a>
          </div>
          <div class="navbarNav">
            <router-link to="/">overview</router-link>
            <router-link to="/projects">projects</router-link>
            <theme-button></theme-button>
          </div>
          <div class="navbarDropdownNav">
            <div @click="toggleDropdown()" style="font-size: 2rem; margin-right: 1rem; cursor: pointer;"
                 title="Navigation">
              <font-awesome-icon :icon="['fas', 'bars']" v-show="!display"/>
              <font-awesome-icon :icon="['fas', 'x']" v-show="display"/>
            </div>

            <div class="dropdown-content">
              <router-link to="/">overview</router-link>
              <router-link to="/projects">projects</router-link>
              <theme-button style="margin-right: .5rem;"></theme-button>
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

  data() {
    return {
      display: false
    }
  },

  methods: {
    toggleDropdown() {
      var dropdown = document.querySelector(".dropdown-content");
      this.display = dropdown.style.display !== "flex";
      if (!this.display) {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "flex";
        dropdown.style.flexDirection = "column";
        dropdown.style.height = "fit-content";
        dropdown.style.alignItems = "self-end";
        dropdown.style.marginRight = "5px"
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
  padding-top: .5rem;
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

.navbarDropdown {
  display: none;
}

.navbarDropdownNav {
  display: none;
}

@media screen and (max-width: 600px) {
  .navbarNav {
    display: none;
  }

  .navbarDropdown {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: top;
  }

  .navbarDropdownNav {
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: self-end;
  }
}

.dropdown-content {
  display: none;
}

.router-link-active {
  color: var(--text-color-highlight);
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