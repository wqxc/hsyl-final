<template>
  <div class="case">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <img v-lazy="caseUrl" alt="" class="img-responsive" /></div
      ></el-col>
    </el-row>

    <div class="section-2">
      <h3>上海站项目</h3>
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="jianjieUrl" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目简介:</span></h3>
            <p class="sp">
              上海站位于上海市静安区秣陵路303号，是上海市乃至全国最为重要的火车站，每天接待大量来自全国各地的旅客。
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目定位:</span></h3>
            <p class="sp">
              以文化中国的理念与人文自然为主旨，匠心造就，以精益求精的工匠精神，筑就中国式火车站绿化典范。
            </p>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="dingweiUrl" alt="" /></div
        ></el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="teseUrl" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目特色:</span></h3>
            <p class="sp">
              绿植与花团锦簇寓意祖国欣欣向荣，将绿色与现代交通完美融合。构筑效果磅礴大气而又贴合自然。为匆匆而行的旅客心头添一抹绿色，也添一些清新。
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <!--别墅项目  -->
    <div class="section-2">
      <h3>政立路别墅项目</h3>
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="bieshu1url" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目简介:</span></h3>
            <p class="sp">
              政立路别墅是由上海中球实业有限公司开发。该项目坐拥百亩天然湿地公园，地处城市副中心的核心优越位置！整体设计风格为新中式纯墅社区
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目定位:</span></h3>
            <p class="sp">
              致力于打造上海市高端人文名仕尊邸。整体设计风格更彰显天人合一理念，园林设计与别墅群整体的风格相呼应，于闹中更显安静。
            </p>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="bieshu2url" alt="" /></div
        ></el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="bieshu3url" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>项目特色:</span></h3>
            <p class="sp">
              将中国传统的园林建筑规范与现代科技结合，北承西山皇家气象，南荟江南园林风情，溯源院子系坊巷规制。清新自然幽静。
            </p>
          </div></el-col
        >
      </el-row>
    </div>

    <!--其他什么项目  -->
    <div class="section-2">
      <h3>更多的项目案例</h3>
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="fengxianUrl" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>奉贤东篱园农庄:</span></h3>
            <p class="sp">
              东篱园以环境、人文为核心，展现了农家庄园的雅致与浪漫，园内竹林、湖泊、菜园与汉光陶瓷、酒坊浑然一体，将都市情怀镶嵌于浓厚的文化内涵之中，让人在不经意间体验到悠然见南山的心境
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>嘉定古琦园:</span></h3>
            <p class="sp">
              福禄主题的园林设计，古静清幽。
            </p>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="jiadingUrl" alt="" /></div
        ></el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="yangpuUrl" alt="" /></div
        ></el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>杨浦市光中学:</span></h3>
            <p class="sp">
              中学的园林绿化，奇趣自然，干净明洁净。贴合学校氛围。
            </p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="section-2">
      <el-row class="sss">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple-light">
            <h3><span>昆山，岱德工厂:</span></h3>
            <p class="sp">
              昆山，岱德工厂的绿化，将工业丛林带入了一抹绿色。
            </p>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
          ><div class="grid-content bg-purple">
            <img v-lazy="kunshanUrl" alt="" /></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "outVue",
  data() {
    return {
      // caseUrl: 'http://huashiyuanlin.cn/case.jpg',
      // jianjieUrl: 'http://huashiyuanlin.cn/shanghaizhan0.jpg',
      // dingweiUrl: 'http://huashiyuanlin.cn/shanghaizhan1.jpg',
      // teseUrl: 'http://huashiyuanlin.cn/shanghaizhan2.jpg',
      // bieshu1url: 'http://huashiyuanlin.cn/bieshu1.jpg',
      // bieshu2url: 'http://huashiyuanlin.cn/bieshu2.jpg',
      // bieshu3url: 'http://huashiyuanlin.cn/bieshu3.jpg',
      // xiezilou1Url: 'http://huashiyuanlin.cn/xiezilou1.jpg',
      // xiezilou2Url: 'http://huashiyuanlin.cn/xiezilou2.jpg',
      // xiezilou3Url: 'http://huashiyuanlin.cn/xiezilou3.jpg'

      caseUrl: "http://huashiyuanlin.cn/case.jpg",
      jianjieUrl: "http://huashiyuanlin.cn/shanghaizhan0.jpg",
      dingweiUrl: "http://huashiyuanlin.cn/shanghaizhan1.jpg",
      teseUrl: "http://huashiyuanlin.cn/shanghaizhan2.jpg",
      bieshu1url: "http://huashiyuanlin.cn/bieshu1.jpg",
      bieshu2url: "http://huashiyuanlin.cn/bieshu2.jpg",
      bieshu3url: "http://huashiyuanlin.cn/bieshu3.jpg",
      xiezilou1Url: "http://huashiyuanlin.cn/xiezilou1.jpg",
      xiezilou2Url: "http://huashiyuanlin.cn/xiezilou2.jpg",
      xiezilou3Url: "http://huashiyuanlin.cn/xiezilou3.jpg",

      fengxianUrl: "http://huashiyuanlin.cn/case/fengxian.jpeg",
      jiadingUrl: "http://huashiyuanlin.cn/case/jiading.jpeg",
      jinganUrl: "http://huashiyuanlin.cn/case/jingan.jpeg",
      kunshanUrl: "http://huashiyuanlin.cn/case/kunshan.jpeg",
      yangpuUrl: "http://huashiyuanlin.cn/case/yangpu.jpeg"
    };
  }
};
</script>
<style lang="scss">
.img-responsive {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
.case {
  .section-2 {
    h3 {
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: green;
    }
    .el-row {
      width: 90%;
      margin-left: 5%;
      border-top: 1px dashed #ccc;
      border-bottom: 1px dashed #ccc;
      p {
        // margin-top: 20px;
      }
      img {
        margin-top: 50px;
      }
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
}
</style>
