import Vue from "vue";
import Router from "vue-router";
import Homeworld from "./views/Homeworld.vue";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/homeworld",
			name: "homeworld",
			component: Homeworld
		},
		{
			path: "/launch",
			name: "launch",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "Launch" */ "./views/Launch.vue")
		},
		{
			path: "/newworld",
			name: "newworld",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "Launch" */ "./views/NewWorld.vue")
		},
		{
			path: "*",
			redirect: "/homeworld"
		}
	]
});
router.replace("/homeworld");

export default router;