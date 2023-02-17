<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <div class="app">
    <Menu></Menu>
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
.app {
  @apply h-screen;
}
</style>
