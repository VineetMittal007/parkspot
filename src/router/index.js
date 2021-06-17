import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(VueRouter)


//router.beforeEach((to, from, next)=>{
//	if(to !== '/' || to != '/faq' || to != '/thanks'){
//		console.log(`route from ${to} to ${from}`)
//		next()
//	}
//	else{
//		next({path: "/"})
//	}
//})
const router = new VueRouter({
  base: "/",
  routes
})


export default router
