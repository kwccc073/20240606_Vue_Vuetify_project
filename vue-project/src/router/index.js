import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // 寫法1：一開始就會引用，這樣不論你進到哪個頁面都會讀取這個元件

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 當路徑為 / （根目錄）
      path: "/",
      // 名字為home
      name: "home",
      // 顯示HomeView這個元件
      component: HomeView, // 寫法1
      meta: {
        title: "國家公園介紹網",
      },
    },
    {
      path: "/yangmingshan",
      name: "yangmingshan", // 可隨便取，但通常會取的跟路徑一樣
      // 不一定會有component，可以用redirect指定導到其他網站
      // 動態引用（這是promise的語法）
      component: () => import("@/views/YangMingShanView.vue"), // 寫法2－動態引用：當進到這個網頁的時候才會讀取這個元件，比較節省資源
      meta: {
        title: "陽明山",
      },
      // 點了連結，但尚未進入這頁之前要執行的程式碼，可以用來擋非會員進入會員專區
      // beforeEnter () {}
    },
  ],
});

// 進入"每一頁"前要做的動作
// 點了連結，但尚未進入頁面之前要執行的程式碼，可以用來擋非會員進入會員專區
// to = 目標頁面
// from = 來源頁面
// next = 重新導向或繼續；next()=>原本要去的頁面、next(path或name)=>去這個路徑
// 常應用於檢查使用者是否登入了
router.beforeEach((to, from, next) => {
  if (to.name !== "home") {
    const input = prompt("輸入密碼");
    if (input === "123") {
      next();
    } else {
      next({ name: "home" }); // 也可以寫next('/')
    }
  } else {
    next();
  }
});

// 進入每一頁後要做的動作
router.afterEach((to, from) => {
  // 將網頁title名稱改為那頁的meta.title
  document.title = to.meta.title;
});
export default router;
