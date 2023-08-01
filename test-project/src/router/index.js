import { createRouter, createWebHistory } from 'vue-router'
import TableTab from '../Views/TableTab.vue'
import GraphTab from '../Views/GraphTab.vue'
import SettingTab from '../Views/SettingTab.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: TableTab
    },
    {
      path: '/graph',
      name: 'graph',
      component: GraphTab
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingTab
    }
  ]
})

export default router
