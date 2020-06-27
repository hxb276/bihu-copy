<template>
<div>
  <Header></Header>
  <div class="login">
    <h1>欢迎登陆</h1>
    <div class="login-select">
      <ul class="select-item">
        <li class="item active">手机号登陆</li>
        <li class="item">验证码登陆</li>
      </ul>
    </div>
    <div class="login-input">
      <!-- user input area -->
      <div class="input-box">
        <div class="user-phone">
          <span class="select-area">+86</span>
          <input type="text" name="userPhone" id="" placeholder="请输入手机号码">
        </div>
        <div class="user-password">
          <input type="password" placeholder="请输入密码">
          <span class="iconfont">&#xe608;</span>
        </div>
        <button type="submit">登陆</button>
        <ul class="other-select">
          <li class="email"><a href="">邮箱登陆</a></li>
          <li class="forget-pwd"><a href="">忘记密码</a></li>
        </ul>
      </div>
      <!-- tips -->
      <div class="other-tips">
        <p>还不是BiHu用户？</p>
        <p>马上注册，掌握一手咨询。</p>
        <router-link to="/register">免费注册</router-link>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components:{
    Header,
    Footer
  }
}
</script>


<style>
input::-webkit-input-placeholder {
        color: #ccc;
      }
input::-moz-input-placeholder {
  color: #ccc;
}
input::-ms-input-placeholder {
  color: #ccc;
}
.login {
  display: flex;
  flex-direction:column;
  min-height:480px;
  width:100vw;
  padding-left:150px;
  padding-right:150px;
  margin-top:60px;
  box-sizing:border-box;
}
.login a{
  color:inherit;
}
.login h1 {
  font-size:36px;
  color:#5a6169;
  text-align:left;
  padding-top:60px;
  margin-bottom:20px;
}
.login .login-select .select-item {
  display:flex;
  justify-content:left;
  height:30px;
}
.login .login-select .select-item .item {
  font-size:16px;
  color:#aaa;
  margin-right:20px;
  cursor:pointer;
}
.login .login-select .select-item .item.active {
  color:#007bff;
  border-bottom:2px solid #007bff;
}
.login .login-input {
  display:flex;
  justify-content:space-between;
}
.login .login-input .input-box {
  min-width:41.6666%;
}
.login .login-input .input-box .user-phone,.user-password {
  position:relative;
}
.login .login-input .input-box .user-phone,.user-password,button {
  width:100%;
  height:40px;
  margin-top:20px;
  margin-bottom:20px;
  overflow: hidden;
}
.login input {
  width:100%;
  height:100%;
  padding-left:8px;
  border:none;
  outline:none;
  box-sizing: border-box;
}
.login .login-input .input-box .user-phone input {
  padding-left:50px;
}
.login .login-input .input-box input:focus {
  border:1px solid #007bff;
}
.login .login-input .input-box .user-phone .select-area {
  display:inline-block;
  position:absolute;
  height:100%;
  line-height: 42px;
  width:45px;
  font-size:14px;
  color:#444;
  border-right:1px solid #ddd;
  box-sizing: border-box;
}
.login .login-input .input-box .user-password .iconfont {
  position:absolute;
  right:8px;
  top:50%;
  transform:translateY(-50%);
  cursor:pointer;
}
.login .login-input .input-box button {
  color:#fff;
  font-size:16px;
  background-color:#007bff;
  border-radius:4px;
  cursor:pointer;
  border:none;
  outline:none;
}
.login .login-input .input-box .other-select {
  display:flex;
  justify-content: space-between;
}

.login .login-input .input-box .other-select .email,.forget-pwd{
  color:#666;
  font-size:14px;
}
.login .login-input .input-box .other-select .email {
  color:#007bff;
}
.login .login-input .other-tips {
  font-size:14px;
  text-align:left;
  margin-left:100px;
  margin-right:100px;
}
.login .login-input .other-tips a{
  color:#007bff;
}
</style>