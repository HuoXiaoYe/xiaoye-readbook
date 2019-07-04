import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import container from '@/views/container'
import cartoon from '@/views/cartoon'
import mine from '@/views/mine'
import search from '@/views/search'
import bookmall from '@/views/bookMall'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect : '/container'
		},
		{
			path : '/container',
			component : container,
			redirect : '/container/home',
			children : [
				{
					path: 'home',
					name: 'home',
					component: home
				},
				{
					path: 'cartoon',
					name: 'cartoon',
					component: cartoon
				},
				{
					path: 'mine',
					name: 'mine',
					component: mine
				},
				{
					path: 'search',
					name: 'search',
					component: search
				},{
					path : "bookmall",
					name : 'bookmall',
					component : bookmall
				}

			]
		}
	],
	linkActiveClass : 'link-active'
})
