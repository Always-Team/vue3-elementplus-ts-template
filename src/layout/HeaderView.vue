<template>
  <div class="header">
    <div class="right_box">
      <el-button
        style="margin-right: 10px"
        type="primary"
        :icon="state.isDark ? Sunny : Moon"
        circle
        @click="switchDarkMode"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import utils from "@/utils/utils";
import { onMounted, reactive } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
const state = reactive({
  isDark: false,
});
const switchDarkMode = () => {
  utils.switchDark();
  isDark();
};
const watchDark = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      isDark();
    });
};
const isDark = () => {
  const html = document.querySelector("html");
  if (html) {
    setTimeout(() => {
      html.getAttribute("class") === "dark"
        ? (state.isDark = true)
        : (state.isDark = false);
    }, 1);
  }
};
onMounted(() => {
  watchDark();
  isDark();
});
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #3f72ff;
  border-bottom: 1px solid transparent;

  .right_box {
    float: right;
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
  }
}
.dark {
  .header {
    background-color: #121212;
    border-bottom: 1px solid #dddddd;
  }
}
</style>
