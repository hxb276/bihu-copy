<template>
  <header class="bihu-header">
    <div class="bihu-header-nav">
      <div class="bihu-logo">
        <router-link to="/"><img src="../assets/images/bihu-logo.png" alt="币乎，好文有好报！"></router-link>
      </div>
      <ul class="header-nav-left">
        <li class="nav-item active">
          <router-link to="/">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/live">直播</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/downloadApp">下载APP</router-link>
        </li>
        <li class="nav-item">
          <div class="header-search">
            <input type="" placeholder="可搜索用户、长文、微文">
            <span class="iconfont">&#xe633;</span>
          </div>
        </li>
      </ul>
      <ul class="header-nav-right">
        <li class="nav-item">
          <router-link to="/login">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register">注册</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login">发布</router-link>
        </li>
      </ul>
    </div>
</header>
</template>

<script>
export default {
  
}
</script>

<style>
.active {
  color:#007bff;
}
.bihu-header {
  position:fixed;
  top:0;
  width:100vw;
  height:60px;
  border-bottom:1px solid #edf0f4;
  background-color: #fff;
}
.bihu-header .bihu-header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100%;
  margin-left:60px;
  margin-right:60px;
}
.bihu-header .bihu-logo{
  height:60px;
  padding-top:5px;
  padding-bottom:5px;
  box-sizing: border-box;
}
.bihu-header .bihu-logo img {
  height:100%;
}
.bihu-header .bihu-header-nav a {
  font-size:16px;
  color:#444;
}
.bihu-header .bihu-header-nav a:hover{
  color:#007bff;
}
.bihu-header .bihu-header-nav .header-nav-left,.header-nav-right {
  display:flex;
  align-items: center;
  height:100%;
}
.bihu-header .bihu-header-nav .header-nav-left {
  flex:1;
}
.bihu-header .bihu-header-nav .header-nav-left .nav-item {
  width:80px;
  height:60px;
  line-height: 60px;
}
.bihu-header .bihu-header-nav .header-nav-left .nav-item .header-search {
  display:flex;
  align-items:center;
  position:relative;
  height:inherit;
  width:100%;
  min-width:172px;
}
.bihu-header .bihu-header-nav .header-nav-left .nav-item .header-search .iconfont {
  position: absolute;
  right:0;
  font-size:20px;
  cursor:pointer;
}
.bihu-header .bihu-header-nav .header-nav-left .nav-item:nth-child(4){
  flex:1;
  height:32px;
  line-height: 32px;
  margin-left:20px;
}
.bihu-header .bihu-header-nav .header-nav-left .nav-item:nth-child(4) input {
  width:100%;
  height:100%;
  outline: none;
  border:none;
  padding-left:8px;
  border-radius: 20px;
  background-color:#f6f8f9;
  box-sizing: border-box;
}
.bihu-header .bihu-header-nav .header-nav-right .nav-item {
  width:80px;
  height:60px;
  line-height:60px;
}
.bihu-header .bihu-header-nav .header-nav-right .nav-item:nth-child(3) {
  height:42px;
  width:118px;
  line-height: 36px;
  border:1px solid #007bff;
  border-radius:50px;
  box-sizing: border-box;
}
.bihu-header .bihu-header-nav .header-nav-right .nav-item:nth-child(3) a{
  color:#007bff;
}
.bihu-header .bihu-header-nav .header-nav-right .nav-item:nth-child(3):hover {
  background-color:#007bff;
}
.bihu-header .bihu-header-nav .header-nav-right .nav-item:nth-child(3):hover a{
  color:#fff;
}
</style>