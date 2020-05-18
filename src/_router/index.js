import Vue from 'vue'
import Router from 'vue-router'
import store from '_store';
import guest from './_middleware/guest'
import auth from './_middleware/auth'
import middlewarePipeline from './_middleware/middlewarePipeline'
import Login from '_pages/Login/'
import Registration from '_pages/Registration/'
import Home from '_pages/Home/'
import PageNotFound from '_pages/Errors/PageNotFound'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '', 
      component: Login,
      meta: {
        middleware: [ guest ]
      } 
    },{ 
      path: '/login', 
      name: 'login', 
      component: Login,
      meta: {
        middleware: [ guest ]
      } 
    },{ 
      path: '/registration', 
      name: 'registration', 
      component: Registration,
      meta: {
        middleware: [ guest ]
      } 
    },{ 
      path: '/home', 
      name: 'home', 
      component: Home,
      meta: {
        middleware: [ auth ]
      } 
    },{ 
      path: '*', 
      name: '404', 
      component: PageNotFound,
      meta: {
        middleware: [ auth ]
      } 
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router