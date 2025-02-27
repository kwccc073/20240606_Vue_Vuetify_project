<!-- 此檔案預設為首頁 -->
<template lang="pug">
//- route => 取得路由的資訊
pre {{ $route }}
pre {{ $route.path }}
pre {{ $route.fullPath }}
pre {{ $route.meta }}

//- 不寫在<script></script>的路由之寫法
//- router => 對路由做操作
img(src="@/assets/national_park.jpg" @click="$router.push('/yangmingshan')")
//- img(src="@/assets/national_park.jpg" @click="$router.push({name: home})")
</template>

<!-- 寫在<script></script>的路由之寫法參考檔案YangMingShanView.vue -->
<script></script>
