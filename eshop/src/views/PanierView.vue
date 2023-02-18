<template>
  <div class="panier">Panier</div>

  Votre panier est actuellement vide

  <div v-for="a of store.artictelst">
    <!-- <div> -->
    {{ a.title }}
    <button @click="changeQuantity(a.id, a.quantity - 1)">-</button>
    {{ a.quantity }}
    <button @click="changeQuantity(a.id, a.quantity + 1)">+</button>
    <img class="icon" @click="remove(a)" src="../assets/trash.png" />
    <span> prix unitaire : {{ a.price }}</span>
    <span> prix total : {{ a.qtePrice }}</span>
  </div>
  Total panier : {{ total }}

  <button class="payer" @click="payer">
    <img class="iconPanier" src="../assets/panier.png" /> Payer
  </button>
</template>

<script setup>
import { usePanierStore } from "../stores/panier";
const store = usePanierStore();
function changeQuantity(id, qte) {
  store.changeQuantity(id, qte);
}
function remove(article) {
  store.removeItem(article.id);
}
const payer = () => {
  store.$reset();
};
const total = store.prixTot;
</script>
<style scoped>
.icon {
  margin-top: 2rem;
  max-width: 24px;
}
.panier {
  @apply;
}
.payer {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgb(27 31 35 / 10%) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
