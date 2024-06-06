<template lang="pug">
h1 陽明山
input(type="button" value="回首頁" @click="goHome")
input(type="button" value="上一頁" @click="goPrev")
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route.path)

const goHome = () => {
  // router.push('/')是Vue Router中的一個方法，它用於將用戶導航到指定的路由。
  router.push('/')
  // 另一種寫法 router.push({ name: 'home' })
}

const goPrev = () => {
  // router.go(-1)是一個用於導航的方法，它將用於向後退一步。當你調用router.go(-1)時，它將導航到上一個歷史記錄條目
  router.go(-1)
}
</script>

<!-- 另一種寫法
<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    },
    goPrev () {
      this.$router.go(-1)
    }
  }
}
</script> -->
