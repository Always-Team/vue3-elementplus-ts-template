<template>
  <HeaderView />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDark } from "@vueuse/core";
import HeaderView from "./layout/HeaderView.vue";
useDark();
</script>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/dark/css-vars.css";
</style>
