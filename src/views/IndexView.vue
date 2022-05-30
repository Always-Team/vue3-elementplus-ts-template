<template>
  <div>123</div>
  <h1>hello world</h1>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
  <el-button @click="utils.switchDark">黑暗模式</el-button>
</template>
<script setup lang="ts">
import {
  getCurrentInstance,
  onMounted,
  reactive,
  type ComponentInternalInstance,
} from "vue";
import { useCounterStore } from "../stores/counter";
import utils from "@/utils/utils";

const currentInstance = getCurrentInstance() as ComponentInternalInstance;
const { $http } = currentInstance.appContext.config.globalProperties;
const store = useCounterStore();
const state = reactive({
  form: {
    a: 1,
  },
});
const getData = async () => {
  const res = await $http("/test", "post", {
    ...state.form,
    count: store.counter,
  });
  console.log(res);
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped></style>
