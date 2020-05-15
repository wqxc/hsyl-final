<template>
  <div class="content">
    <div class="header-top"></div>
    <div class="header">
      <ul>
        <li><img src="./assets/logo.png" alt="" /></li>
        <li>
          <router-link to="/" v-bind:class="[routeUrl == '/' ? 'active' : '']"
            >首页</router-link
          >
        </li>
        <li>
          <router-link
            to="/companyBusiness"
            v-bind:class="[routeUrl == '/companyBusiness' ? 'active' : '']"
            >公司业务</router-link
          >
        </li>
        <li>
          <router-link
            to="/case"
            v-bind:class="[routeUrl == '/case' ? 'active' : '']"
            >工程案例</router-link
          >
        </li>
      </ul>
    </div>
    <div class="article">
      <router-view />
    </div>
    <div class="footer">
      <div class="foot-top">
        <div class="ft-l"></div>
        <div class="ft-r"></div>
        <div class="ft-c">
          <div class="ft-c-l">
            <ul>
              <li><h3>我们的联系方式:</h3></li>
              <li>手机:152 1688 2655/138 1889 6088</li>
              <li>QQ:649251375</li>
              <li>微信:m649251375</li>
            </ul>
          </div>
          <div class="ft-c-r">
            <ul>
              <li><h3>公司地址:</h3></li>
              <li>杨浦区黄兴路2049弄11号</li>
              <!-- <li><h3>您还可以通过如下途径关注我们:</h3></li>
              <li>微信公众号</li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="foot-bot1">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=17055683"
          ><img src="../static/dzyyzz.jpg"
        /></a>
      </div>
      <div class="foot-bot">
        <span>
          © 2017 上海华诗园林有限公司 &nbsp;&nbsp;&nbsp; ©
          沪ICP备17055683号</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeUrl: "/"
    };
  },
  created: function() {
    this.routeUrl = this.$route.path;
  },
  methods: {
    fetchDate: function() {
      this.routeUrl = this.$route.path;
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchDate"
  }
};
</script>

<style lang="scss">
$navABg: green;
$headerTopBg: #444;
$headerBg: rgba(0, 0, 0, 0.8);
$footerBg: #383838;
$footColor: #ddd;
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "微软雅黑", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header-top {
  height: 40px;
  background: $headerTopBg;
}
.header {
  height: 48px;
  background: $headerBg;
  ul {
    text-align: center;
    li {
      display: inline-block;
      line-height: 48px;
      padding-right: 80px;
    }
    :first-child {
      height: 48px;
      vertical-align: middle;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul li a:hover {
    color: $navABg;
  }
  ul li .active {
    color: $navABg;
  }
}
.footer {
  height: 360px;
  background-color: $footerBg;
  color: $footColor;
  .foot-top {
    .ft-l {
      width: 10%;
      height: 300px;
      float: left;
    }
    .ft-r {
      float: right;
      height: 300px;
      width: 10%;
    }
    .ft-c {
      margin: 0 10%;
      height: 300px;
      display: flex;
      ul {
        list-style: none;
      }
      .ft-c-l {
        flex: auto;
        ul {
          float: right;
          margin-right: 30%;
          margin-top: 30px;
          li {
            height: 46px;
            line-height: 46px;
            text-indent: 16px;
            font-size: 16px;
            font-weight: normal;
          }
        }
      }
      .ft-c-r {
        flex: auto;
        ul {
          margin-left: 30%;
          margin-top: 30px;
          li {
            height: 46px;
            line-height: 46px;
            text-indent: 16px;
            font-size: 16px;
            font-weight: normal;
          }
        }
      }
    }
  }
  .foot-bot {
    text-align: center;
    height: 60px;
    line-height: 60px;
    background: #4c4c4c;
  }
  .foot-bot1 {
    text-align: center;
    height: 60px;
    line-height: 60px;
    background: #f2f2f2;
    padding: 30px;
  }
}
</style>
