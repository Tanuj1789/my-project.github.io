import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Experience from './components/experience.vue'
import Home from './components/home.vue'
import Education from './components/education.vue'
import Skills from './components/skills.vue'
import Achievements from './components/achievements.vue'
import Contact from './components/contact.vue'


Vue.use(VueRouter);
const routes=[
  { path: '/',
    component:Home
  },
  { path: '/skills',
    component:Skills
  },
  { path: '/education',
    component:Education
  },
  { path: '/experience',
    component:Experience
  },
  { path: '/achievements',
    component:Achievements
  },
  {
    path: '/contact',
    //for dynamic use
    // path: '/users/:teamid',
    component:Contact
  },
];
const router= new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // renders is a hook to  to various vue files, running the js code present within it
})
