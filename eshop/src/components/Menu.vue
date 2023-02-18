<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/" style="margin: 1rem">Home</RouterLink>
        <RouterLink to="/catalogue" style="margin: 1rem">Catalogue</RouterLink>

        <RouterLink to="/panier" style="margin: 1rem"
          >{{ count }} <img class="icon" src="../assets/panier.png"
        /></RouterLink>

        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>
</template>

<script setup>
import { usePanierStore } from "../stores/panier";
import { computed } from "vue";
const store = usePanierStore();
const count = computed(() => store.count);
</script>

<style scoped>
.nav {
  @apply inline-flex w-screen;
  margin-top: 2rem;
}

.icon {
  max-width: 24px;
}
</style>
