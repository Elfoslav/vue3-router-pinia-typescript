import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'

// Import your components
import HomeView from '@/views/HomeView.vue'
import PersonsView from '@/views/PersonsView.vue'

const pageTitle = 'My App'

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: `Home - ${pageTitle}` }
  },
  {
    path: '/persons',
    name: 'Persons',
    component: PersonsView,
    meta: { title: `Persons - ${pageTitle}` }
  },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  document.title = to.meta.title as string || 'Default Title' as string
  next()
})

// Export the router instance
export default router
