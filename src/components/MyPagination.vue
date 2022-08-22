<template>
  <el-pagination
    style="display: flex; justify-content: center; margin: 10px 0"
    v-model:currentPage="state.page"
    v-model:page-size="state.limit"
    :total="state.total"
    :page-sizes="pageSizes"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next,jumper"
    :hide-on-single-page="hideOnSinglePage"
  />
</template>
<script setup lang="ts">
import { reactive, onMounted, watch, computed } from "vue";
const emits = defineEmits([
  "update:page",
  "update:limit",
  "update:total",
  "changePage",
]);
const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  background: {
    type: Boolean,
    default: true,
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false,
  },
  pageSizes: {
    type: Array<number>,
    default: () => [10, 20, 50, 100],
  },
});
const state = reactive({
  page: 1,
  limit: 10,
  total: 0,
});
watch(
  computed(() => props.page),
  () => {
    state.page = props.page;
  }
);
watch(
  computed(() => props.limit),
  () => {
    state.limit = props.limit;
  }
);
watch(
  computed(() => props.total),
  () => {
    state.total = props.total;
  }
);
watch(
  () => state.page,
  () => {
    updateData();
  }
);
watch(
  () => state.limit,
  () => {
    if (state.page === 1) return emits("changePage");
    state.page = 1;
  }
);
const updateData = () => {
  emits("update:page", state.page);
  emits("update:limit", state.limit);
  emits("update:total", state.total);
  emits("changePage");
};
onMounted(() => {
  state.page = props.page;
  state.limit = props.limit;
  state.total = props.total;
});
</script>
<style lang="less" scoped></style>
