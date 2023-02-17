<template>
  <div class="panier">Panier</div>

  Votre panier est actuellement vide

  <div v-for="a of store.artictelst">
    <!-- <div> -->
    {{ a.title }}
    <button>+</button>
    {{ a.quantity }}
    <button>-</button>
  </div>
</template>

<script setup>
import { usePanierStore } from "../stores/panier";
const store = usePanierStore();
console.log(store.artictelst);
</script>
<style scoped>
.panier {
  @apply;
}
</style>
