<template>
  <div>
    <!-- <zy-right-menu>
      <zy-form :label-width="'150px'">
        <template slot="head">
          <zy-form-head title="项目目标成本程文审批表" :model="model">
            <el-button type="primary">打印单据</el-button>
            <el-button>切换完整版模式</el-button>
          </zy-form-head>
        </template>
        <zy-form-group title="基础信息" :model="model" :col-number="3">
          <zy-form-group-row label="创建日期" prop="createData"></zy-form-group-row>
          <zy-form-group-row label="创建者" prop="createUser"></zy-form-group-row>
          <zy-form-group-row label="编辑者" prop="updateUser"></zy-form-group-row>
        </zy-form-group>
        <zy-form-group title="基础信息" :model="model" :col-number="3">
          <zy-form-group-row label="项目编号" prop="billCode">
            <template slot-scope="{model}">
              <el-input placeholder="请输入项目编号" v-model="model.billCode"></el-input>
            </template>
          </zy-form-group-row>
          <zy-form-group-row label="项目编号1" prop="billStatusStr">

            <template slot-scope="{model}">
              <zy-image-viewers :images="model.images" type="list" imgWidth="55px" imgHeight="55px"></zy-image-viewers>
            </template>
          </zy-form-group-row>
          <zy-form-group-row label="姓名" prop="name">
          </zy-form-group-row>
          <zy-form-group-row label="年龄" prop="age">
          </zy-form-group-row>
          <zy-form-group-row label="单据类型" prop="billTypeStr">
          </zy-form-group-row>
          <zy-form-group-row label="项目编号5" prop="billStatusStr">
          </zy-form-group-row>
          <zy-form-group-row label="项目编号6" prop="billStatusStr">
          </zy-form-group-row>
          <zy-form-group-row label="项目编号7" prop="billStatusStr">
          </zy-form-group-row>
          <zy-form-group-row label="归属地" prop="info.city">
          </zy-form-group-row>
          <zy-form-group-row label="详细地址" prop="address" :col-span="24">
          </zy-form-group-row>
        </zy-form-group>
      </zy-form>
    </zy-right-menu> -->
    <zy-rich-text v-model="text"></zy-rich-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '12222',

      model: {
        createData: '2023-11-28 11:20:05',
        createUser: 'wilson',
        updateUser: '董柳兴',
        billCode: 'MBCB00000010',
        billStatusStr: '待处理',
        billStatus: 1,
        billTypeStr: '目标成本策划',
        name: 'wilson',
        age: 24,
        address: '广东省珠海市香洲区吉大街道金昇大厦',
        info: {
          city: '珠海'
        },
        images: [
          {
            fileUrl: 'https://img30.360buyimg.com/babel/s580x740_jfs/t20260319/72506/38/21991/18930/6417b403Ff13317bf/9b2df8fac5fa8b06.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          },
          {
            fileUrl: 'https://img13.360buyimg.com/babel/s580x740_jfs/t1/43429/20/22392/28721/63997c35Ee41242b5/15992ff74dc24a4c.png'
          }
        ],
      }
    };
  },
  methods: {
    rowContextMenu() {
      // eslint-disable-next-line
      debugger
    }
  }
};
</script>

<style  scoped>
.table-bg {
  width: 80%;
  height: 500px;
}
</style>