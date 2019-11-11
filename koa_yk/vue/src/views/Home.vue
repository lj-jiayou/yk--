<template>
  <div class="home">
    <el-row>
      <el-button type="primary" icon="el-icon-edit" style="margin-left:700px">添加</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 95%" max-height="450">
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="标题" width="220"></el-table-column>
      <el-table-column prop="province" label="作者" width="120"></el-table-column>
      <el-table-column prop="city" label="重要性" width="120"></el-table-column>
      <el-table-column prop="address" label="阅读数" width="300"></el-table-column>
      <el-table-column prop="zip" label="状态" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" @click="dialogFormVisible = true"> 编辑</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-button type="success" @click="dialogFormVisible = true"> 发布</el-button>
          <el-button
          type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            style="margin-left:1px"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "上海",
          province: "李江1",
          city: "☆☆",
          address: "123",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "上海",
          province: "李江2",
          city: "☆☆☆",
          address: "1234",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "上海",
          province: "李江3",
          city: "☆☆☆☆",
          address: "12345",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "上海",
          province: "李江4",
          city: "☆☆☆☆☆",
          address: "123456",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "上海",
          province: "李江5",
          city: "☆",
          address: "1234567",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "上海",
          province: "李江6",
          city: "☆☆☆☆☆☆",
          address: "12345678",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "上海",
          province: "李江7",
          city: "☆☆☆",
          address: "123456789",
          zip: 200333
        }
      ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style lang="scss" scoped>
dialog{
  z-index: 999;
}
</style>
