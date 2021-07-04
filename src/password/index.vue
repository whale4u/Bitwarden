<template>
  <div class="email-home-wrap">
      <div><span>{{title}}</span>
      <el-button style="margin-left: 15%;" type="secondary"><i class="el-icon-setting el-icon--left"></i></el-button>
      <el-button  @click="addProject" style="margin-left: 16px;;color: #3a8ee6;" type="secondary"><i class="el-icon-plus el-icon--left"></i>添加项目</el-button>
      </div>
      <el-divider></el-divider>
      <div v-if="tableData.length">没有可列出的项目</div>
      <el-button @click="addProject" style="margin-left: 16px;color: #3a8ee6;" type="secondary"><i class="el-icon-plus el-icon--left"></i>添加项目</el-button>
      <myDialog :visible="visible" @submit="submit" @handleClose="cancle"></myDialog>
      
      <el-checkbox-group style="margin: 20px 0;" v-model="checkedUsers" @change="handleChecked">
        <div style="display: flex;align-items: center;" v-for="(table, index) in tableData" v-bind:key="index">
          <el-checkbox ></el-checkbox> <div style="display: inline-block;margin-left: 16px;"><div style="color: #409eff;">{{table.user}}</div><div>{{table.name}}</div></div>
        </div>
      </el-checkbox-group>
  </div>
</template>

<script>
import myDialog from '../components/addProject/index'
export default {
  name: 'Home',
  components: {
    myDialog
  },
  data () {
    return {
      title: '我的密码库',
      tableData: [],
      visible: false,
      checkedUsers:[]
    }
  },
  mounted() {
    const cache = localStorage.getItem('emailCache');
    if (!!cache) this.tableData = JSON.parse(cache);
  },
  methods: {
      handleChecked () {

      },
      addProject(e) {
        this.visible = true;
      },
      submit (v) {
        const cache = localStorage.getItem('emailCache');
        if (!!cache) this.tableData = JSON.parse(cache);
        this.visible = false;
      },
      cancle () {
        this.visible = false;
        console.log('cancle');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.email-home-wrap {
    margin: 0 20px;
}
.el-checkbox-group {
    font-size: 16px;
}
</style>
