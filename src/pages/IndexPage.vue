<template>
  <q-page padding>

    <q-list>
      <q-item>
        <q-item-section>
          <q-file
            v-model="states.path"
            placeholder="请选择游戏路径"
            readonly
            ref="fileRef"
          />
        </q-item-section>
        <q-item-section avatar>
          <q-btn color="primary" label="选择路径" @click="methods.doChoosePath" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-select
            v-model="states.zoneServer"
            emit-value
            map-options
            :options="states.zoneServerOpts"
            placeholder="请选择游戏大区"
          ></q-select>
        </q-item-section>
        <q-item-section avatar>
          <q-btn color="primary" label="启动游戏" @click="methods.doStartGame"/>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="table-wrap">
      <q-table
        :rows="states.table.rows"
        :columns="states.table.columns"
        hide-pagination
        row-key="pid"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const states = reactive({
  path: '',
  zoneServer: '上海电信',
  zoneServerOpts: [
    /**
      * server格式
      [
        ["页面区名",
          ["服务器显示名","服务器id号-IGW-Pack", "服务器名", "页面所在区", "服务器ip地址", "服务器列表"],   
          ["服务器显示名1","服务器id号1-IGW-Pack", "服务器名1", "页面所在区1", "服务器ip地址1", "服务器列表"]
        ]
      ]
      注：IGW:1=TRUE 0=FALSE
          PACK:1=TRUE 0=FALSE
      */
    {
      label: '上海电信',
      value: [
        '上海电信',
        '1-1-1',
        'latale1',
        '上海电信',
        'chdlogin1.sdo.com:10000',
        '红樱桃,香蕉苹果,甜草莓,醉西湖,哈密瓜',
      ],
    },
    {
      label: '网通专区',
      value: [
        '网通专区',
        '2-1-1',
        'latale2',
        '网通专区',
        'chdlogin2.sdo.com:10000',
        '新浪网通',
      ],
    },
    {
      label: '四川电信',
      value: [
        '四川电信',
        '3-1-1',
        'latale3',
        '四川电信',
        'chdlogin3.sdo.com:10000',
        '黄玫瑰,解放碑',
      ],
    },
    {
      label: '武汉电信',
      value: [
        '武汉电信',
        '36-1-1',
        'latale36',
        '武汉电信',
        'chdlogin36.sdo.com:10000',
        '洞庭湖',
      ],
    },
    {
      label: '塞勒斯神殿',
      value: [
        '塞勒斯神殿',
        '53-1-1',
        'latale53',
        '塞勒斯神殿',
        'chdlogin53.sdo.com:10000',
        '神之使者',
      ],
    },
  ],
  table: {
    columns: [
      { name: 'pid', align: 'center', label: 'pid', field: 'pid' },
      {
        name: 'zoneServer',
        align: 'center',
        label: '区服',
        field: 'zoneServer',
      },
      { name: 'channel', align: 'center', label: '频道', field: 'channel' },
      {
        name: 'playerName',
        align: 'center',
        label: '玩家名字',
        field: 'playerName',
      },
      { name: 'level', align: 'center', label: '等级', field: 'level' },
      { name: 'exp', align: 'center', label: '经验', field: 'exp' },
      {
        name: 'currentMap',
        align: 'center',
        label: '当前地图',
        field: 'currentMap',
      },
      { name: 'status', align: 'center', label: '状态', field: 'status' },
    ] ,
    rows: [
      {
        pid: 1,
        zoneServer: '1',
        channel: '1',
        playerName: '1',
        level: '1',
        exp: '1',
        currentMap: '1',
        status: '1',
      },
      {
        pid: 2,
        zoneServer: '2',
        channel: '2',
        playerName: '2',
        level: '2',
        exp: '2',
        currentMap: '2',
        status: '2',
      },
    ],
  },
});

const fileRef = ref(null);

const methods = {
  // TODO: 这里要调用本地路径
  async doChoosePath() {
    console.log(fileRef.value.pickFiles());
  },
  // TODO: 启动游戏
  doStartGame(){
    console.log(states.zoneServer);
  }
};
</script>

<style scoped></style>
