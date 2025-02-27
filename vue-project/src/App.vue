// 版面本體，如丙級的#main區塊
<template lang="pug">
// 每一區塊裡的東西可再拆成各自的小元件（檔案存在資料夾component中）
TopImage
#left
  LeftMenu
#right
  RightMarquee
  //- RouterView(也可以寫成router-view)：有裝vue的路由就可以使用的元件，此區塊會根據目前的路徑顯示對應的元件
  RouterView
</template>

<!-- scoped只會影響到內層的東西，#app在外層所以不能加scoped -->
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
  // background: darken(#0ff, 10%) // darken()用於調暗度 要改版了之後會停用
  background: #0ff
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
