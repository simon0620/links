<template>
  <div>
    <router-link to="/jieshao">
      <div class="box-1 clearfix">
        <div class="ranking-list flex flex-row">
          <div class="ranking-headline" style="width:16px;"></div>
          <div class="float ranking-picture">
            <img src="/static/icons/jieshao.png" width="50" height="50">
          </div>
          <div class="ranking-text-list flex flex-column">
            <div class="ranking-text5">
              新手攻略
            </div>
            <div class="ranking-text6">以下平台是可以同时做任务的</div>
          </div>
          <div class="ranking-text4" style="background: #26a2ff;">了解</div>
        </div>
      </div>
    </router-link>
    <a v-for="item in linkList" :key="item.id" :href="item.link">
      <div class="box-1 clearfix">
        <div class="ranking-list flex flex-row">
          <div class="ranking-headline" style="width:16px;">{{ item.id}}</div>
          <div class="ranking-picture">
            <img :src="iconPath(item)" width="50" height="50">
          </div>
          <div class="ranking-text-list flex flex-column">
            <div class="ranking-text1">
              {{ item.name }}
              <font color="green">【{{ item.mark }}】</font>
            </div>
            <div class="ranking-text2">{{ item.detail }}</div>
            <div class="ranking-text3">89568人加入</div>
          </div>
          <div class="ranking-text4 flex-end">进入</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Links',
  data () {
    return {
      sheetVisible: true,
      linkList: []
    }
  },
  mounted () {
    axios
      .get('/static/data/links.json')
      .then(response => {
        this.linkList = response.data
        console.log(response)
      })
  },
  methods: {
    // 计算属性的 getter
    iconPath: function (item) {
      // `this` 指向 vm 实例
      return '/static/icons/' + item.iconName
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-end {
    justify-content:flex-end
  }
  .ranking-list {
    height: 80px;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px #f5f5f5;
  }

  .ranking-headline {
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 2%;
    margin-right: 2%;
    text-align: center;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
  .ranking-picture {
    margin-top: 14px;
  }
  .float {
    float: left;
  }
  .float-right {
    float: right;
  }
  .box-1 {
    width: 100%;
    font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu
  }
  .content .clearfix:after {
    content: "020";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    width: 100%;
  }
  .clearfix:after {
    content: "020";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    width: 100%;
  }

  .ranking-text-list {
    margin-top: 14px;
    margin-left: 10px;
    flex: auto;
  }

  .ranking-text1 {
    font-size: 14px;
    text-align: left;
  }
  .ranking-text2 {
    font-size: 12px;
    text-align: left;
  }
  .ranking-text3 {
    font-size: 10px;
    color: #9ec8a9;
    text-align: left;
  }
  .ranking-text4 {
    width: 58px;
    height: 30px;
    background: #e61414;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    border-radius: 3px;
    margin-top: 25px;
    margin-right: 3%;
  }
  .ranking-text5 {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
  .ranking-text6 {
    font-size: 14px;
    text-align: left;
  }
</style>
