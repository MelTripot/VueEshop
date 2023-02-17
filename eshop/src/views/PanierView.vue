<template>
  <div class="panier">Panier</div>

  Votre panier est actuellement vide

  <div v-for="a of store.artictelst">
    <!-- <div> -->
    {{ a.title }}
    <button @click="changeQuantity(a.id, a.quantity - 1)">-</button>
    {{ a.quantity }}
    <button @click="changeQuantity(a.id, a.quantity + 1)">+</button>
  </div>
</template>

<script setup>
import { usePanierStore } from "../stores/panier";
const store = usePanierStore();
console.log(store.artictelst);
function changeQuantity(id, qte) {
  store.changeQuantity(id, qte);
}
</script>
<style scoped>
.panier {
  @apply;
}
</style>
