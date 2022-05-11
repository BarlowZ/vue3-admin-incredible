import router from './index'
import mainStore from '@/store/index.js'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const store = mainStore()
  if (store.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
