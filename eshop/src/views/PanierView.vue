<template>
  <div class="panier">Panier</div>

  Votre panier est actuellement vide

  <div v-for="a of artictelst">
    <!-- <div> -->
    {{ a.title }}
    <button>+</button>
    {{ a.quantity }}
    <button>-</button>
  </div>
</template>

<script setup>
import { usePanierStore } from "../stores/panier";
const artictelst = await (
  await fetch("https://fakestoreapi.com/products")
).json(); //todo change
</script>
<style scoped>
.panier {
  @apply;
}
</style>
