<template>
  <div id="hi">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
    </mt-header>
  <div>
    <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
        </mt-actionsheet>
  </div>
  </div>
</template>

<script>

/* eslint-disable */
export default {
  name: 'Hi',
  data () {
    return {
        sheetVisible: true,
        actions: ["Test","Test12"]
    }
  }
}
</script>

<style scoped>
</style>