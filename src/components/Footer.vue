<template>
  <footer>
    <ul class="footer-item">
      <li class="item"><a href="/">关于我们</a></li>
      <li class="item"><a href="/">联系我们</a></li>
      <li class="item"><a href="/">帮助中心</a></li>
      <li class="item"><a href="/">用户协议</a></li>
    </ul>
    <p>©2020 - BIHU.COM All Rights Reserved</p>
    <p>
      无锡巽雷信息科技有限公司  
      <a href="">苏ICP备20006983号-8</a>
    </p>
  </footer>
</template>

<style>
footer {
  display:flex;
  position:absolute;
  /* bottom:0; */
  width:100vw;
  height:120px;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  margin-top:20px;
  background-color:#fff;
  box-sizing:border-box;
  overflow: hidden;
}
footer .footer-item {
  display:flex;
  justify-content: center;
  width:100vw;
  height:30px;
  padding-right:200px;
  padding-left:200px;
}
footer .footer-item .item {
  margin-left:30px;
  font-size:15px;
  color:#888;
}
footer .footer-item .item:hover {
  color:#007bff;
}
footer .footer-item .item a{
  color:inherit;
  user-select:none;
}
footer p {
  font-size:14px;
  margin-top:5px;
  margin-bottom:5px;
}
footer p a {
  /* font-size:14px; */
  color:#aaa;
}
footer p a:hover {
  color:#000;
  font-size:16px;
}
</style>