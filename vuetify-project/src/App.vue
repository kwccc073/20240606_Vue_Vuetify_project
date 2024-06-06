<template lang="pug">
//- v-app和VApp一樣，是vuetify的元件
VApp
  // 頂部導覽列
  VAppBar
    VContainer.d-flex.align-center
      VAppBarTitle 測試
      VBtn(prepend-icon="mdi-home" color="primary" to='/') 首頁
      VBtn(prepend-icon="mdi-account" color="success" to='/about') 測試
  VMain
    RouterView
</template>
