<template>
  <div>
    <Header></Header>
    <!-- 内容区导航 -->
    <div class="bihu-container">
      <div class="bihu-container-content">
        <!-- left navigation -->
        <ul class="bihu-nav-left">
          <li class="active">
            <router-link to="/">热门</router-link>
          </li>
          <li>
            <router-link to="/follow">关注</router-link>
          </li>
          <li>
            <router-link to="/shortcontent">微文</router-link>
          </li>
        </ul>
        <!-- center content area -->
        <div class="bihu-article-content">
          <div class="top-nav">
            <a href="/">热门</a>
          </div>
          <ul>
            <li class="article" v-for="item in articleList" :key="item.id">
              <!-- author show -->
              <div class="article-author">
                <ul class="author-item">
                  <li class="author-icon">
                    <img :src="'https://oss-cdn2.bihu-static.com/' + item.userIcon" alt />
                  </li>
                  <li class="author-info">
                    <div class="author-name">
                      <a href>{{ item.userName }}</a>
                    </div>
                    <span
                      class="author-time"
                      v-if="new Date() - new Date(item.createTime) > 3600000"
                    >{{ Math.floor( (new Date() - new Date(item.createTime))/3600000 ) }}小时前</span>
                    <span
                      class="author-time"
                      v-else
                    >{{ Math.floor( (new Date() - new Date(item.createTime))/60000 ) }}分钟前</span>
                  </li>
                </ul>
                <span class="user-select" @click="userSelectShow">···</span>
                <ul class="user-select-item" v-show="isShow">
                  <li class="item">关注</li>
                  <li class="item">收藏</li>
                  <li class="item">举报</li>
                  <li class="item">不看本人文章</li>
                </ul>
              </div>
              <!-- article title show -->
              <div class="article-content">
                <div class="article-img">
                  <img
                    :src="'https://oss-cdn2.bihu-static.com/' + item.snapimage | formatImgUrl"
                    alt
                  />
                </div>
                <div class="article-title">
                  <router-link :to="'/essay/' + item.id ">{{ item.title }}</router-link>
                  <p class="summary">{{item.snapcontent}}</p>
                </div>
              </div>
              <!-- other show  -->
              <div class="article-other">
                <ul class="article-other-item">
                  <li class="money bottom-btn">
                    <span class="iconfont">&#xe607;</span>
                    {{ item.money }}
                  </li>
                  <li class="support bottom-btn">
                    <span class="iconfont">&#xe644;</span>
                    {{ item.ups }}
                  </li>
                  <li class="comments bottom-btn">
                    <span class="iconfont">&#xe611;</span>
                    {{ item.cmts }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右侧提示区 -->
        <div class="bihu-nav-right">
          <a href class="right-img">
            <img src="../assets/images/notice.png" alt />
          </a>
          <a href class="right-img">
            <img src="../assets/images/new-to-boot-icon.png" alt />
          </a>
          <img class="right-img" src="../assets/images/bihu-App.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      id: this.$route.params.id,
      articleList: [],
      total: 0,
      isShow:false,
      isRender: false
    };
  },
  filters: {
    formatImgUrl(url) {
      var newUrl = url.split(",")[0];
      return newUrl;
    }
  },
  created() {
    this.getEssayList();
  },
  methods: {
    //获取最新文章列表
    getEssayList() {
      // fetch('https://be02.bihu.com/bihube-pc/api/content/show/hotArtlist',{
      //   body:JSON.stringify({
      //     category: "recommend",
      //     code: this.$route.query.code || "",
      //     pageNum:1
      //     }),
      //   headers:{'content-type':'application/json'},
      //   method:'post',
      //   mode:'cors'
      //   })
      // .then(res =>console.log( res.json() ) )
      // .catch(e => console.log(e))
      this.$axios
        .post("https://be02.bihu.com/bihube-pc/api/content/show/hotArtList", {
          category: "recommend",
          code: this.$route.query.code || "",
          pageNum: 1
        })
        .then(res => {
          if (res.data.resMsg === "success") {
            this.articleList = res.data.data.list;
            this.total = res.data.data.total;
            this.isRender = true;
          }
        });
    },
    //点击时，控制用户选项框显示
    userSelectShow(e) {
      this.isShow = this.isShow ? false : true;
      console.log(e)
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1900642 */
  src: url('//at.alicdn.com/t/font_1900642_qybdriu6unl.eot');
  src: url('//at.alicdn.com/t/font_1900642_qybdriu6unl.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1900642_qybdriu6unl.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1900642_qybdriu6unl.woff') format('woff'),
  url('//at.alicdn.com/t/font_1900642_qybdriu6unl.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1900642_qybdriu6unl.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
/* top nav */
.top-nav {
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
  text-align: left;
}
.top-nav a {
  display: inline-block;
  height: 100%;
  line-height: 50px;
  width: 60px;
  text-align: center;
  vertical-align: baseline;
  color: #007bff;
  border-bottom: 3px solid #007bff;
}

/* article */
.article {
  display: flex;
  flex-direction: column;
  padding: 15px 32px 15px 30px;
  border-top: 1px solid #f6f8f9;
}
.article .article-author {
  position:relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.article .article-author .author-item {
  display: flex;
  width: 100%;
  /* justify-content: space-between;
  align-items: center; */
}
.article .article-author .author-item .author-icon {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
}
.article .article-author .author-item .author-icon img {
  width: 100%;
  border-radius: inherit;
}
.article .article-author .author-item .author-info {
  display: flex;
  flex-direction: column;
}
.article .article-author .author-item .author-info .author-name a {
  color: #5a6169;
  font-size: 14px;
}
.article .article-author .author-item .author-info .author-time {
  color: #5a616970;
  font-size: 12px;
}

.article .article-author .user-select {
  user-select: none;
  cursor: pointer;
}
.article .article-author .user-select-item {
  position:absolute;
  right:15px;
  top:25px;
  width:80px;
  height:100px;
  font-size:12px;
  border-radius:4px;
  background-color:#fff;
  box-shadow:1px 1px 4px #ccc;
}
.article .article-author .user-select-item .item {
  width:100%;
  height:25px;
  line-height:25px;
  cursor:pointer;
}
.article .article-author .user-select-item .item:hover {
  color:#fff;
  background-color:#007bff;
}


/* article content */
.article .article-content {
  display: flex;
  align-items: flex-start;
  height: 98px;
  margin-bottom: 8px;
}
.article .article-content .article-img {
  min-width: 230px;
  height: inherit;
  overflow: hidden;
  margin-right: 10px;
}
.article .article-content .article-img img {
  width: 100%;
  height: 100%;
}
.article .article-content .article-title {
  text-align: left;

}
.article .article-content .article-title a {
  color: #212529;
  font-size: 20px;
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.article .article-content .article-title .summary {
  color:#999;
  font-size:13px;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
}
.article .article-other .article-other-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.article .article-other .article-other-item .bottom-btn {
  margin-left: 15px;
  color: #c5c5c5;
  font-size: 12px;
}
.article .article-other .article-other-item .money {
  color: khaki;
}

.bihu-container {
  width: 100%;
  margin-top: 60px;
}
.bihu-container .bihu-container-content {
  display: flex;
  margin-right: 60px;
  margin-left: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.bihu-container .bihu-container-content .bihu-nav-left {
  width: 8.333%;
  margin:0;
  padding-right: 15px;
  min-width: 35px;
}
.bihu-container .bihu-container-content .bihu-article-content {
  width: 66.666%;
  background-color: #fff;
}
.bihu-container .bihu-container-content .bihu-nav-right {
  width: 25%;
}
/* left navigation */
.bihu-container .bihu-container-content .bihu-nav-left li {
  display: block;
  width: 100%;
  margin-bottom: 4px;
  color: #444;
}
.bihu-container .bihu-container-content .bihu-nav-left li a {
  display: inline-block;
  width: 100%;
  height: 39px;
  line-height: 39px;
  font-size: 14px;
  border-radius: 4px;
  color: inherit;
}
.bihu-container .bihu-container-content .bihu-nav-left li.active {
  background-color: #007bff;
  color: #fff;
}
.bihu-container .bihu-container-content .bihu-nav-left li:hover {
  background-color: #007bff;
  color: #fff;
}

/* right notice */
.bihu-container .bihu-container-content .bihu-nav-right img {
  width: 100%;
  margin-left: 10px;
}
.bihu-container .bihu-container-content .bihu-nav-right .right-img {
  display: block;
  margin-bottom: 15px;
}
</style>