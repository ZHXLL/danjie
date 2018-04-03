import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);


import One from '../components/one/one'
import Index1 from '../components/one/index1'
import Index2 from '../components/one/index2'
import Two from '../components/two'
import Three from '../components/three'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/one/index1'
    },{
      path: '/one',
      name: 'one',
      component: One,
      children:[
        {
          path: '/one/index1',
          name: 'index1',
          component: Index1
        },
        {
          path: '/one/index2',
          name: 'index2',
          component:Index2
        }
      ]
    },{
      path: '/two',
      name: 'two',
      component: Two
    },{
      path: '/three',
      name: 'Three',
      component: Three
    },{
      path: '/si',
      name: 'si',
      component: Two
    }
  ]
})
