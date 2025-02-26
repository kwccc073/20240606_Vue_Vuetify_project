import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 當路徑為 / （根目錄）
      path: "/",
      // 名字為home
      name: "home",
      // 顯示HomeView這個元件
      component: HomeView, // 寫法1：不論你進到哪個頁面都會讀取這個元件
      meta: {
        title: "國家公園介紹網",
      },
    },
    {
      path: "/yangmingshan",
      name: "yangmingshan",
      // 不一定會有元件
      // 動態引用（這是promise的語法）
      component: () => import("@/views/YangMingShanView.vue"), // 寫法2：當進到這個網頁的時候才會讀取這個元件，比較節省資源
      meta: {
        title: "陽明山",
      },
      // 設定進入這頁之前的動作
      // beforeEnter () {}
    },
  ],
});

// 進入每一頁前要做的動作
// to = 目標頁面
// from = 來源頁面
// next = 重新導向或繼續
// 常應用於檢查使用者是否登入了
router.beforeEach((to, from, next) => {
  if (to.name !== "home") {
    const input = prompt("輸入密碼");
    if (input === "123") {
      next();
    } else {
      // next('/')
      next({ name: "home" });
    }
  } else {
    next();
  }
});

// 進入每一頁後要做的動作
router.afterEach((to, from) => {
  // 進入每一頁後將網頁title名稱改為meta.title
  document.title = to.meta.title;
});
export default router;
