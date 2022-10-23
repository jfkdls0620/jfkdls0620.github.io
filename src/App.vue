<template>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',

    created() {
      document.title = "김동현의 포트폴리오";
    },

  }
</script>
