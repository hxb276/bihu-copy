<template>
  <div>
    <Header></Header>
    <div class="bihu-follow">你还没有登陆，请
      <router-link to="/login">登陆</router-link>
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
.bihu-follow {
  margin-top:70px;
}
</style>