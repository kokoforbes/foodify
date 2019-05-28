import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
import details from '../components/details.vue'

Vue.use(Router)


export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/Services',
      name: 'services',
      component: Services
    },
    {
      path: '/Contact',
      name: 'contact',
      component: Contact
    }, 
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
