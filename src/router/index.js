import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import particulars from '@/pages/particulars'
import search from '@/pages/search'
import userCenter from '@/pages/user_center'
import login from '@/pages/login'
import register from '@/pages/register'
import picture from '@/pages/picture'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home // 注册home组件

    },
    {
      path: '/particulars',
      component: particulars // 注册particulars组件
    },
    {
      path: '/search',
      component: search // 注册search组件

    },
    {
      path: '/userCenter',
      component: userCenter // 注册userCenter组件
    },
    {
      path: '/login',
      component: login // 注册login组件
    },
    {
      path: '/register',
      component: register // 注册register组件
    },
    {
      path: '/picture',
      component: picture // 注册register组件
    },


  ]
})
