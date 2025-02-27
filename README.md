# 20240606_Vue_Vuetify_project
Vue和Vuetify的project，搭配node.js
## 在node.js環境下使用vue專案
* 各種指令
    * npm create vue@latest
    * npm i
    * npm i -D 套件名稱 (pug、sass、@vue/eslint-config-standard)
        * pug要搭配的其他指令
            * npm i -D @vue/language-plugin-pug
            * npm i -D eslint-plugin-vue-pug
* 新的資料夾介紹 -　router & views
    * router
        * 頁面導向方式 - createWebHistory & createWebHashHistory (00:17:25)
    * views
* 要清空的檔案&資料夾 (00:27:56)
### 範例－丙級第三題 (00:32:33)
* components
    * TopImage.vue (00:36:55)
    * LeftMenu.vue (01:01:00)
    * RightMarquee.vue (01:26:24)
* 路由 (01:32:29)
    * RouterView
    * router>index.js
        * 導航守衛 - beforeEnter、beforeEach、afterEach (02:04:36)
        * meta - 可以記錄任意資訊 (02:08:28)
    * HomeView.vue (02:23:00)
    * 在```<template></template>```中使用路由 - HomeView.vue
        * $route => 取得路由的資訊
        * $router => 對路由做操作
    * 在```<script></script>```中使用路由 - YangMingShanView.vue (02:31:21)
        * useRoute => 取得路由的資訊
        * useRouter => 對路由做操作
        * 選項式寫法 (02:42:23)

## UI工具 - Vuetify (02:16:45)
* 各種UI工具介紹
* 各種終端機指令
    * npm create vuetify
* 資料夾介紹
    * layouts (03:12:40)
    * pages
    * styles
    * stores
    * plugins (03:36:06)
* 刪掉不要的檔案 (03:29:25)
* vuetify官網
    * wareframes => 官方預先設定好的layout(03:42:30)
    * Application layout (03:43:35)
    * v-app
    * v-app-bar (03:47:19)
* App.vue (03:44:00)
* icon網站
    * iconify
    * icones
    * mdi icon (04:10:50)
        * 安裝擴充功能Iconify IntelliSense可方便預覽
* 資料夾pages 
    * 首頁 - index.vue (04:14:55)
        * 使用useUserStore  (04:38:29)
    * 分頁 about.vue(04:17:05)
* 資料夾stores (04:25:39)
    * index.js
    * app.js => user.js