<template>
  <div class="container">
    <h1>hello world</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <MyPagination
      v-model:page="state.pagination.page"
      v-model:limit="state.pagination.limit"
      v-model:total="state.pagination.total"
      @changePage="getData"
    />
  </div>
</template>
<script setup lang="ts">
import {
  getCurrentInstance,
  onMounted,
  reactive,
  type ComponentInternalInstance,
} from "vue";
import { useCounterStore } from "../stores/counter";
import MyPagination from "../components/MyPagination.vue";

const currentInstance = getCurrentInstance() as ComponentInternalInstance;
const { $http } = currentInstance.appContext.config.globalProperties;
const store = useCounterStore();
const state = reactive({
  form: {
    a: 1,
  },
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
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
  setTimeout(() => {
    state.pagination = {
      page: 1,
      limit: 10,
      total: 100,
    };
  }, 2000);
});
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  text-align: center;
}
</style>
