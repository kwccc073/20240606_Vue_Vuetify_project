<template lang="pug">
VContainer
  VRow(justify="center")
    VCol(cols="12")
      h1 首頁
    VCol(cols="12")
      p {{ userStore.number }}
      p {{ userStore.square }}
      //解構後的寫法
      p {{ number }}
      p {{ square }}
      // 修改狀態-------------------
      // 1. 呼叫actions
      VBtn(@click="userStore.plus") +
      VBtn(@click="userStore.minus") -
      // 2.
      VBtn(@click="plus") +
      VBtn(@click="minus") -
      // 3. 不透過function改資料也可以
      VBtn(@click="number++") +
</template>

<script setup>
// 使用store
// 1. 引入
import { useUserStore } from '@/stores/user' // 這裡不用加.js，他會自動去找檔案
import { storeToRefs } from 'pinia' // 用來解決失去響應性的問題

// 2. 呼叫 ***useXXX都要呼叫（跟路由一樣）***
const userStore = useUserStore()

// 解構 store裡 的 state 或 getters 會失去響應性
// const { number, square } = userStore 
// 因此使用 storeToRefs 在解構時維持響應性
const { number, square } = storeToRefs(userStore)
// 解構function沒有響應性的問題，所以不需要 storeToRefs
const { plus, minus } = userStore
</script>
