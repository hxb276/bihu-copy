<template>
  <div id="app">
    <!-- header navigation -->
    <router-view></router-view>
    <!--main content area -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
/* @import url(./assets/reset.css); */
body{
  font-family: -apple-system,BlinkMacSystemFont,'Helvetica Neue','PingFang SC','Microsoft YaHei','Source Han Sans SC','Noto Sans CJK SC','WenQuanYi Micro Hei',sans-serif;
  margin:0;
  background: #f6f8f9;
}
a {
  text-decoration: none;
}
ul {
  margin:0;
  padding:0;
}
li {
  display:block;
  list-style: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
