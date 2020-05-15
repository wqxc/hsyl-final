<template>
  <div class="bussiness">
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <img v-lazy="bussinessUrl" alt="" class="img-responsive" /></div
      ></el-col>
    </el-row>
    <el-row class="bussRange">
      <el-col :span="24">
        <h3>公司业务范围</h3>
      </el-col>
    </el-row>
    <el-row class="bussList">
      <el-col :span="8" v-for="item in bussList">
        <el-card :body-style="{ 'text-align': 'center' }">
          <img v-lazy="item.url" class="image" />
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="plant">
      <el-col :span="24">
        <h3>经营植物概览</h3>
      </el-col>
    </el-row>
    <el-row class="plantList">
      <el-col :span="8" v-for="item in plantList">
        <el-card :body-style="{ 'text-align': 'center' }">
          <img v-lazy="item.url" class="image" />
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "outVue",
  data() {
    return {
      bussinessUrl: "http://huashiyuanlin.cn/bussiness.jpg",
      bussList: [
        { url: "http://huashiyuanlin.cn/public/bieshu.jpg", name: "别墅造型" },
        {
          url: "http://huashiyuanlin.cn/public/wenxinxiaowu.jpg",
          name: "温馨小屋"
        },
        {
          url: "http://huashiyuanlin.cn/public/fangguyuanlin.jpg",
          name: "仿古园林"
        },
        {
          url: "http://huashiyuanlin.cn/public/jiaotong.jpg",
          name: "交通绿化"
        },
        {
          url: "http://huashiyuanlin.cn/public/shangchang1.jpg",
          name: "商场美化"
        },
        {
          url: "http://huashiyuanlin.cn/public/xiezilou.jpg",
          name: "写字楼植物租赁"
        },
        {
          url: "http://huashiyuanlin.cn/public/shangchang.jpg",
          name: "卖场装扮"
        },
        {
          url: "http://huashiyuanlin.cn/public/youyuan.jpg",
          name: "游乐园装点"
        },
        { url: "http://huashiyuanlin.cn/public/huichang.jpg", name: "会场装饰" }
      ],
      plantList: [
        { url: "http://huashiyuanlin.cn/plant/xingfushu.jpg", name: "幸福树" },
        { url: "http://huashiyuanlin.cn/plant/sanweikui.jpg", name: "散尾葵" },
        {
          url: "http://huashiyuanlin.cn/plant/wangxingrongshu.jpg",
          name: "网形榕树"
        },
        { url: "http://huashiyuanlin.cn/plant/baximu.jpg", name: "巴西木" },
        {
          url: "http://huashiyuanlin.cn/plant/dishuiguanyin.jpg",
          name: "滴水观音"
        },
        {
          url: "http://huashiyuanlin.cn/plant/jiejiegaoshu.jpg",
          name: "节节高树"
        },
        { url: "http://huashiyuanlin.cn/plant/junzilan.jpg", name: "君子兰" },
        { url: "http://huashiyuanlin.cn/plant/tieshu.jpg", name: "大铁树" },
        { url: "http://huashiyuanlin.cn/plant/zhaocaishu.png", name: "招财树" },
        { url: "http://huashiyuanlin.cn/plant/zongzhu.jpg", name: "棕竹" },
        { url: "http://huashiyuanlin.cn/plant/yipinhong.jpeg", name: "一品红" },
        { url: "http://huashiyuanlin.cn/plant/longbo.jpeg", name: "龙柏" }
      ]
    };
  }
};
</script>
<style lang="scss">
.bussiness {
  .img-responsive {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
  .bussRange {
    height: 60px;
    line-height: 60px;
    h3 {
      text-align: center;
      color: green;
    }
  }
  .bussList {
    .el-col {
      padding: 10px;
    }
  }
  .plant {
    height: 60px;
    line-height: 60px;
    h3 {
      text-align: center;
      color: green;
    }
  }
  .plantList {
    .el-col {
      padding: 10px;
    }
  }
}
</style>
