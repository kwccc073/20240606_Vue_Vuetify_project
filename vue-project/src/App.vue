// 版面本體，如丙級的#main區塊
<template lang="pug">
// 每一區塊裡的東西可再拆成各自的小元件（檔案存在資料夾component中）
TopImage
#left
  LeftMenu
#right
  RightMarquee
  //- 也可以寫成router-view
  RouterView
</template>

<style lang="sass">
#app
  width: 1024px
  height: 768px
  margin: auto
</style>
<style scoped lang="sass">
#left
  width: 200px
  height: calc( 768px - 20px - 65px)
  float: left
  // darken()用於調暗度
  background: darken(#0ff, 10%)
  margin-left: 12px
#right
  width: 800px
  height: calc( 768px - 20px - 65px)
  float: right
  margin-right:12px
</style>

<script setup>
import TopImage from "@/components/TopImage.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import RightMarquee from "@/components/RightMarquee.vue";
</script>
