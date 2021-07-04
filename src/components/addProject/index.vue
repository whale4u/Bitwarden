<template>
  <div>
     <el-dialog
    title="添加项目"
    :visible.sync="visible"
    width="80%"
    :before-close="handleClose">
    <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="这是什么类型的项目">
            <el-select v-model="form.project" placeholder="请选择项目">
            <el-option label="登录" value="login"></el-option>
            <el-option label="登出" value="logout"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="名称">
             <el-col :span="11">
             <el-input v-model="form.name"></el-input>
            </el-col>
            
             <el-col style="display: flex;" :span="11">
             <div class="one-row">文件夹:</div><el-input v-model="form.folder"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="用户名">
             <el-col :span="11">
             <el-input v-model="form.user"></el-input>
            </el-col>
            
             <el-col style="display: flex;" :span="11">
             <div class="one-row">密码: </div><el-input v-model="form.password"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="验证秘钥(TOTP)">
             <el-input v-model="form.varify"></el-input>
        </el-form-item>
        <el-form-item>
            <div style="display: flex;">
           <div class="one-row">url1: </div>
           <el-input v-model="form.url"></el-input>
            <el-select v-model="form.match" placeholder="匹配检测">
            <el-option label="默认匹配检测" value="default"></el-option>
            <el-option label="自定义" value="customermize"></el-option>
            </el-select></div>
        </el-form-item>
    </el-form>
    <div>笔记</div>
    <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入笔记"
    v-model="form.textarea">
    </el-input>

    <div class="customer-text">自定义字段</div>
    <div><el-button  style="color: #3a8ee6;" type="secondary"><i class="el-icon-plus el-icon--left"></i>新建自定义字段</el-button></div>
    <el-select v-model="form.customermize" placeholder="请选择">
    <el-option
      v-for="item in customerOption"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>

    <div class="authority">所有权</div>
    <div class="authority-second">谁拥有这个项目？</div>
    <el-select v-model="form.authority" placeholder="请选择">
    <el-option
      v-for="item in authorityOption"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
     <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit">保 存</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'mydialog',
  props: ['visible'],
  data () {
      return {
          form: {
            project: '',
            folder: '',
            name: '',
            user: '',
            password: '',
            varify: '',
            url: '',
            customermize: '',
            authority: '',
            textarea: '',
            match: ''
          },
          customerOption: [{
              label: '选择',
              value: '值'
          }],
          authorityOption: [{
              label: '选择',
              value: '值'
          }]
      }
  },
  methods: {
      dialogSubmit () {
          const cache = localStorage.getItem('emailCache');
          const parseCache = cache ? JSON.parse(cache) : [];
          if (!!this.form.user) {
            parseCache.push(this.form);
            localStorage.setItem('emailCache', JSON.stringify(parseCache));
          }
          this.$emit('submit', this.form);
      },
      handleClose () {
          this.$emit('handleClose');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.authority {
    margin: 16px 0;
}
.authority-second {
    font-weight: bold;
}
.one-row {
    width: 60px;
    margin-left: 20px;
}
.customer-text {
    margin-top: 20px;
}
</style>
