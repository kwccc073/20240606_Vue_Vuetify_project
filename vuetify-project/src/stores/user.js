// Utilities
import { defineStore } from 'pinia'

// use開頭是命名風格規範（use+要保存的資料名稱+Store）
// defineStore('store名稱，通常跟檔名一樣',{ 該store的一些設定 })
export const useUserStore = defineStore('user', {
  // store大概可以分三個東西：state、actions、getters
  // 1. state => 該store要保存那些資料------------------
  // 寫法1---------------
  // state () {
  //   return {
  //     number: 0
  //   }
  // }
  // 寫法2---------------
  // state: () => {
  //   return {
  //     number: 0
  //   }
  // }
  // 寫法3---------------
  state: () => ({
    number: 0
  }),
  // 2. actions => 放修改資料的 function-----------------------
  actions: {
    plus () {
      this.number++
    },
    minus () {
      this.number--
    }
  },
  // 3. getters 是取資料的 function-----------------------
  // 把資料運算完再丟出去，類似computed
  getters: {
    square () {
      return Math.pow(this.number, 2)
    }
  }
})
