import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 固定是他
      component: HomeView,
      meta: {
        title: '國家公園介紹網'
      }
    },
    {
      path: '/yangmingshan',
      name: 'yangmingshan',
      // 不一定會有元件
      // 動態引用（這是promise的語法）
      component: () => import('@/views/YangMingShanView.vue'),
      meta: {
        title: '陽明山'
      }
      // 設定進入這頁之前的動作
      // beforeEnter () {}
    }
  ]
})

// 進入每一頁前要做的動作
// to = 目標頁面
// from = 來源頁面
// next = 重新導向或繼續
// 常應用於檢查使用者是否登入了
router.beforeEach((to, from, next) => {
  if (to.name !== 'home') {
    const input = prompt('輸入密碼')
    if (input === '123') {
      next()
    } else {
      // next('/')
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

// 進入每一頁後要做的動作
router.afterEach((to, from) => {
  // 進入每一頁後將網頁title名稱改為meta.title
  document.title = to.meta.title
})
export default router
