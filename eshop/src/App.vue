<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <div class="app">
    <Menu></Menu>
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  @apply h-screen;
}
</style>
