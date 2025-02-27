<template lang="pug">
//- 在自己網站去換頁的話要用RouterLink（也稱router-link）來作路由的導航，最後會被渲染成a標籤
//- 連到外部網站則可以用a連結
//- 點選後，to裡面的東西會被加到網址最後面
//- 寫法1：RouterLink(to="router>index.js裡的path")
RouterLink(to="/yangmingshan") 陽明山
//- 寫法2：RouterLink(:to="{ name: 'router>index.js裡的name'}")
RouterLink(:to="{ name: 'home'}") 首頁

table
    template(v-for="(link, i) in links" :key="i")
        tr
            td
              RouterLink(:to="link.to")
                img(:src="link.img")
        tr
            td &nbsp;
</template>

<script setup>
const links = [
  // to是定義網址
  // new URL(相對路徑, 基準網址) 把圖片位址轉為完整網址，確保打包後瀏覽器能讀取（例如：http://localhost:5173/assets/park0302.jpg）
  // import.meta.url => 這個 JavaScript 檔案之網址
  // .href => 取得 圖片的完整網址，確保 <img> 可以正確顯示圖片
  { to: '/yangmingshan', img: new URL('@/assets/park0302.jpg', import.meta.url).href },
  { to: '/sheipa', img: new URL('@/assets/park0303.jpg', import.meta.url).href },
  { to: '/', img: new URL('@/assets/park0304.jpg', import.meta.url).href },
  { to: '/', img: new URL('@/assets/park0305.jpg', import.meta.url).href }
]
</script>

<style lang="sass" scoped>
table
    width: 200px
    text-align: center
    img
      width: 120px
      height: 40px
      &:hover
        filter: hue-rotate(180deg)
</style>
