<template lang="pug">
//- route是取得路由的資訊
pre {{ $route }}
pre {{ $route.path }}
pre {{ $route.fullPath }}
pre {{ $route.meta }}

//- 不用JS的路由之寫法
img(src="@/assets/national_park.jpg" @click="$router.push('/yangmingshan')")
//- 用JS的路由之寫法
img(src="@/assets/national_park.jpg")
</template>

<!-- JS的跳頁 -->
<script></script>
