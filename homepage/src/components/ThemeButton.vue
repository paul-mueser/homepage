<template>
  <div>
    <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox"/>
    <label for="checkbox" class="switch-label" title="Change theme">
      <font-awesome-icon icon="fa-solid fa-sun"/>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  font-size: 2rem;
  cursor: pointer;
}
</style>
  