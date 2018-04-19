import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Account from '@/views/account/account.vue'

import EasyTable from '@/views/grid/easyTable.vue'

import EasyTable2 from '@/views/grid/easyTable2.vue'
import EasyTable3 from '@/views/grid/easyTable3.vue'
import EasyTable4 from '@/views/grid/easyTable4.vue'

import EasyTable5 from '@/views/grid/easyTable5.vue'
import EasyTable6 from '@/views/grid/easyTable6.vue'
import EasyTable7 from '@/views/grid/easyTable7.vue'
import EasyTable8 from '@/views/grid/easyTable8.vue'
import EasyTable9 from '@/views/grid/easyTable9.vue'
import EasyTable10 from '@/views/grid/easyTable10.vue'

import BootStrapIndex from '@/bootstrap/index.vue'
Vue.use(Router)

/*配置路由*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '用户注册'
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/easyTable',
      name: 'easyTable',
      component: EasyTable
    },
    {
      path: '/easyTable2',
      name: 'easyTable2',
      component: EasyTable2
    },
    {
      path: '/easyTable3',
      name: 'easyTable3',
      component: EasyTable3
    },
    {
      path: '/easyTable4',
      name: 'easyTable4',
      component: EasyTable4
    },
    {
      path: '/easyTable5',
      name: 'easyTable5',
      component: EasyTable5
    },
    {
      path: '/easyTable6',
      name: 'easyTable6',
      component: EasyTable6
    },
    {
      path: '/easyTable7',
      name: 'easyTable7',
      component: EasyTable7
    },
    {
      path: '/easyTable8',
      name: 'easyTable8',
      component: EasyTable8
    },
    {
      path: '/easyTable9',
      name: 'easyTable9',
      component: EasyTable9
    },
    {
      path: '/easyTable10',
      name: 'easyTable10',
      component: EasyTable10
    },
    {
      path: '/bootstrap/index',
      name: 'BootStrapIndex',
      component: BootStrapIndex
    }
  ]
})
