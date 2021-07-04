<template>
  <div class="email-left">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search">
    </el-input>
    <div class="category-list">
    <div><i class="el-icon-menu"></i> 所有项目</div>
    <div><i class="el-icon-star-on"></i> 收藏</div>
    <div><i class="el-icon-delete"></i> 回收站</div>
    </div>

    <div class="category-list">
        <p class="category-p">类型</p>
        <div><i class="el-icon-picture-outline-round"></i> 登录</div>
        <div><i class="el-icon-bank-card"></i> 支付卡</div>
        <div><i class="el-icon-user"></i> 身份</div>
        <div><i class="el-icon-notebook-2"></i> 安全笔记</div>
    </div>
    
    <div class="category-list">
        <p class="category-p">文件夹</p>
        <div><i class="el-icon-folder-opened"></i> 默认文件夹</div>
    </div>

    <div class="category-list">
        <p class="category-p">集合</p>
        <div><i class="el-icon-suitcase"></i> 默认集合</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.email-left {
    margin: 0;
}
.category-list {
    margin: 16px 10px;
}
.category-p {
    font-size: 18px;
}
</style>
