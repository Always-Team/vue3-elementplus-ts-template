<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/dark/css-vars.css";
</style>
