<template>
  <div id="hi">
    <div>
      <a v-for="item in list" :key="item.id" href="https://shike.com/i/SXlobon">
        <div class="box-1 clearfix">
          <div class="ranking-list float">
            <div class="ranking-headline float" style="width:16px;">{{ item.id}}</div>
            <div class="float ranking-picture">
              <img src="picture/315556ec1285493e6a8afe72a770bf40.jpg" width="50" height="50">
            </div>
            <div class="float ranking-text-list">
              <div class="ranking-text1">
                应用试客
                <font color="green">【新手必做】</font>
              </div>
              <div class="ranking-text2">{{ item.name}}</div>
              <div class="ranking-text3">89568人加入</div>
            </div>
            <div class="float ranking-text4">进入</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Hi',
  data () {
    return {
      sheetVisible: true,
      list: []
    }
  },
  mounted () {
    axios
      .get('/static/data/links.json')
      .then(response => {
        this.list = response.data
        console.log(response)
      })
  }
}
</script>

<style scoped>
  .ranking-list {
    height: 80px;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px #f5f5f5;
  }

  .ranking-headline {
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
  .box-1 {
    width: 100%;
  }
  .box-1 {
    width: 100%;
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
  }

  .ranking-text1 {
    font-size: 14px;
  }
  .ranking-text2 {
    font-size: 12px;
  }
  .ranking-text3 {
    font-size: 10px;
    color: #9ec8a9;
  }
  .ranking-list {
    height: 80px;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px #f5f5f5;
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
    float: right;
    margin-top: 25px;
    margin-right: 3%;
  }
</style>
