import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import education from '@/components/education'
import aboutme from '@/components/aboutme'
import contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/blog',
      name: 'blog',
      component: blog
    },
    {
      path:'/education',
      name: 'education',
      component: education
    },
    {
      path:'/path',
      name: 'aboutme',
      component: aboutme
    },
    {
      path:'/contact',
      name: 'contact',
      component: contact
    }
  ]
})