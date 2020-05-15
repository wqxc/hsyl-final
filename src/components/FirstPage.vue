<template>
  <div class="F-page">
    <div class="slide">
      <el-carousel :interval="4000" type="card" height="600px">
        <el-carousel-item v-for="item in dataArr" :key="item.id">
          <img v-lazy="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="section-1">
      <h3>公司业务</h3>
      <el-row>
        <el-col v-for="item in bussnessArr">
          <el-card :body-style="{ padding: '20px' }">
            <img v-lazy="item.url" class="image" />
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
              <!-- <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">了解更多</el-button>
              </div> -->
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="more">
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <el-button type="success" @click="goCompanyBus"
              >了解更多&nbsp;&nbsp;<span class="el-icon-d-arrow-right"></span
            ></el-button></div
        ></el-col>
      </el-row>
    </div>
    <div class="section-2">
      <h3>关于我们</h3>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="aboutUsUrl" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <p>
              <span>公司概述：</span
              >上海华诗园林有限公司（简称：“华诗”）成立于2014年，是一家专业的园林绿化公司。公司一直秉承
              “诚信第一 质量第一
              服务至上”的理念，以“规范化管理，专业化服务”为标准要求自己的服务团队。在我们专业的服务和严谨的管理下，已在业内及客户中赢得了良好的口碑。
              “只有专业，才能卓越”是我们的企业精神，我们珍惜客户给予的每一次机会，努力创造人与自然环境完美组合的美景。
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="section-1">
      <h3>工程案例</h3>
      <el-row>
        <el-col v-for="item in caseArr">
          <el-card :body-style="{ padding: '20px' }">
            <img v-lazy="item.url" class="image" />
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
              <!-- <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">了解更多</el-button>
              </div> -->
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="more">
        <el-col :span="24"
          ><div class="grid-content bg-purple">
            <el-button type="success" @click="goCase"
              >了解更多&nbsp;&nbsp;<span class="el-icon-d-arrow-right"></span
            ></el-button></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  data() {
    return {
      dataArr: [
        { id: 1, url: "http://huashiyuanlin.cn/a.jpg" },
        { id: 2, url: "http://huashiyuanlin.cn/b.jpg" },
        { id: 3, url: "http://huashiyuanlin.cn/c.jpg" },
        { id: 4, url: "http://huashiyuanlin.cn/d.jpg" },
        { id: 5, url: "http://huashiyuanlin.cn/e.jpg" },
        { id: 6, url: "http://huashiyuanlin.cn/g.jpg" }
      ],
      currentDate: new Date(),
      aboutUsUrl: "http://huashiyuanlin.cn/aboutUs.jpg",
      bussnessArr: [
        { url: "http://huashiyuanlin.cn/shiwai.jpg", name: "室外" },
        { url: "http://huashiyuanlin.cn/shinei.jpg", name: "室内" },
        { url: "http://huashiyuanlin.cn/qiangmianGz.jpg", name: "墙面" }
      ],
      caseArr: [
        { url: "http://huashiyuanlin.cn/shanghaizhan.jpg", name: "上海站项目" },
        { url: "http://huashiyuanlin.cn/bieshu.jpg", name: "政立路别墅项目" },
        {
          url: "http://huashiyuanlin.cn/qiyeyuanGz.jpg",
          name: "越虹广场企业园项目"
        }
      ]
    };
  },
  methods: {
    goCase: function() {
      this.$router.push({ path: "/case" });
    },
    goCompanyBus: function() {
      this.$router.push({ path: "/companyBusiness" });
    }
  }
};
</script>

<style lang="scss">
.slide {
}
.F-page {
  .section-1 {
    h3 {
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: green;
    }
    .el-row {
      display: flex;
      padding-left: 10px;
      padding-right: 10px;
      .el-col {
        flex: 1;
        padding: 20px;
      }
    }
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both;
    }
    .more {
      .el-col {
        .el-button {
          float: right;
          margin-right: 20px;
        }
      }
    }
  }

  .section-2 {
    h3 {
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: green;
    }
    .el-row {
      width: 100%;
      .el-col:first-child {
        text-align: center;
      }
      .el-col {
        // border: 1px solid #ccc;
        text-align: left;
        line-height: 180%;
        height: 300px;
        color: #999;
        // img{
        //   height: 300px;
        // }
        .bg-purple-light {
          padding: 20px 80px;
        }
        p {
          span {
            font-weight: bold;
            color: black;
          }
        }
        .el-button {
          border: 1px solid red;
          float: right;
          bottom: 0px;
          // margin-top: 15%;
          // margin-top:-150px;
        }
      }
    }
  }
  .more {
    margin-top: 20px;
    margin-bottom: 20px;
    .el-col {
      height: 60px;

      .el-button {
        float: right;
        margin-right: 20px;
      }
    }
  }
}
</style>
