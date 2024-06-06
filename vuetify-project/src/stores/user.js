// Utilities
import { defineStore } from 'pinia'

// use開頭是命名規則（use+要保存的資料名稱+Store）
export const useUserStore = defineStore('user', {
  // state 保存的資料
  // state () {
  //   return {
  //     number: 0
  //   }
  // }
  // state: () => {
  //   return {
  //     number: 0
  //   }
  // }
  state: () => ({
    number: 0
  }),
  // actions 是修改資料的 function
  actions: {
    plus () {
      this.number++
    },
    minus () {
      this.number--
    }
  },
  // getters 是取資料的 function
  getters: {
    square () {
      return Math.pow(this.number, 2)
    }
  }
})
