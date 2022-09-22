import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/timesheet',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/my-information',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/payslips',
			component: () => import('../views/Payslips/Payslips.vue')
		},
		{
			path: '/leaves',
			component: Home
		},
		{
			path: '/orgchart',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/docs',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/my-team',
			component: () => import('../views/Home.vue')
		},
	],
})

export default router