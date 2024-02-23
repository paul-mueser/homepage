import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/sass/style.scss'

import {library} from "@fortawesome/fontawesome-svg-core";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(far);
library.add(fas);
library.add(fab);

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
