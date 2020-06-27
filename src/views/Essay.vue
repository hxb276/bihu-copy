<template>
<div>
  <Header></Header>
  <div class="essay-info">
    <h3>{{ essayInfo.title }}</h3>
    <div class="essay-author">
      <div class="essay-author-item">
        <div class="author-icon">
          <img :src="'https://oss-cdn2.bihu-static.com/' + essayInfo.userIcon" alt="">
        </div>
        <div class="author-info">
          <div class="author-info-item">
            <span class="author-name">{{ essayInfo.userName }}</span>
            <span class="is-original">原创</span>
          </div>
          <span class="essay-create-time">{{formatTime(this.essayInfo.creatime)}}</span>
        </div>
      </div>
      <div class="is-follow">unfollow</div>
    </div>
    <div class="html" v-html="essayContent"></div>
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
  },
  data() {
    return {
      id:this.$route.params.id,
      essayInfo:{},
      essayContent:'',
      createTime:''
    }
  },
  created() {
    this.getEssayDetail();
  },
  methods:{
    //获取文章内容
    getEssayDetail() {
      this.$axios.post("https://be02.bihu.com/bihube-pc/api/content/show/getArticle2",{
        artId:this.id
      }).then(res => {
        if(res.data.resMsg === 'success'){
          this.essayInfo = res.data.data;
          console.log(this.essayInfo)
          this.$axios
              .get("https://oss02.bihu.com/" + res.data.data.content)
              .then(res => {
                this.essayContent = res.data;
                console.log(res.data)
              });
        }
        })
    },
    //格式化时间 年-月-日 时：分
    formatTime(time) {
      let oldTime = time;
      console.log(this.essayInfo)
      let year = new Date(oldTime).getFullYear();
      let month = new Date(oldTime).getMonth();
      let day = new Date(oldTime).getDate();
      let hour = new Date(oldTime).getHours();
      let minute = new Date(oldTime).getMinutes();
      if(month + 1 < 10) {
        month = '0' + ( month + 1 );
      }
      if(hour < 10) {
        hour = '0' + hour;
      }
      if(minute < 10) {
        minute = '0' + minute;
      }
      return `${year}-${month}-${day} ${hour} : ${minute}`
    }
  }
}
</script>


<style>
.essay-info {
  /* width:100vw; */
  width:750px;
  text-align:left;
  padding-left:15px;
  padding-right:15px;
  margin-left:auto;
  margin-right:auto;
  margin-top:80px;
  overflow: hidden;
  box-sizing: border-box;
  background-color:#fff;
}
.essay-info .essay-author {
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:40px;
  /* line-height:40px; */
  font-size:14px;
  box-sizing: border-box;
}
.essay-info .essay-author .essay-author-item {
  display:flex;
  width:100%;
}
.essay-info .essay-author .author-icon{
  height:40px;
  width:40px;
  
}
.essay-info .essay-author .author-icon img {
  width:100%;
  height:100%;
  border-radius:50%;
}
.essay-info .essay-author .essay-author-item span {
  display:inline-block;
}
.essay-info .essay-author .essay-author-item .author-info {
  display: flex;
  flex-direction: column;
  height:100%;
  padding-left:10px;
}
.essay-info .essay-author .essay-author-item .author-name {
  color:#007bff;
  font-size:16px;
}
.essay-info .essay-author .essay-author-item .is-original {
  width:30px;
  height:15px;
  line-height:15px;
  margin-left:5px;
  font-size:10px;
  text-align:center;
  color:#95b5d7;
  background-color:#ebf3fb;
  border-radius:5px;
}
.essay-info .essay-author .essay-author-item .author-info .essay-create-time {
  color:#bcc7d7;
  margin-top:5px;
}
.essay-info .essay-author .is-follow {
  width:80px;
  height:25px;
  line-height:25px;
  text-align:center;
  color:#95b5d7;
  background-color:#ebf3fb;
  border-radius:15px;
  cursor:pointer;
}
.essay-info .html img {
  width:100%;
  height:100%;
}
</style>