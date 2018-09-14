import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from 'pages/layout';
import demo from './demo';
import index from './home';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: 'index',
      children: [
        index,
        demo
      ]
    }
    
  ]
})
