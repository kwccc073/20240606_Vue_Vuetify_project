<template lang="pug">
//- 在自己網站去換頁的話要用router-link（等於RouterLink），最後會被渲染成a標籤
//- 外部網站則可以用a連結
//- 點選後，to裡面的東西會被加到網址最後面
RouterLink(to="/yangmingshan") 陽明山
//- name要對到index.js裡設定的
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
