<template lang="pug">
//- VApp(也等於v-app)是vuetify的元件，最外層一定要用
VApp
  // 頂部導覽列
  VAppBar
    // class對應的style可參考vuetify官網
    // align-center => 垂直置中
    VContainer.d-flex.align-center
      VAppBarTitle 測試
      VBtn(prepend-icon="mdi-home" color="primary" to='/') 首頁
      VBtn(prepend-icon="mdi-account" color="success" to='/about') 測試
  //- VMain放網頁主要的內容
  VMain
    //- 路由該顯示的元件 => 不同分頁
    RouterView
</template>
