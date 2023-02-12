<template>
  <div class="catalogue">
    <h1>Catalogue</h1>
    <div class="container">
      <div v-if="!IsAll">
        <a style="margin: 1rem" v-for="item in categories">{{ item }}</a>

        <a @click="IsAll = !IsAll">Voir tous les produits</a>
      </div>

      <div v-if="IsAll">
        <a @click="IsAll = !IsAll">Voir par categories</a>
        <div class="divGrid">
          <ProductCard
            v-for="P of AllProduct"
            :key="P"
            :id="P.id"
            :price="P.price"
            :title="P.title"
            :img="P.image"
            :likes="P.rating.rate"
          ></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
const categories = await (
  await fetch("https://fakestoreapi.com/products/categories")
).json();

const AllProduct = await (
  await fetch("https://fakestoreapi.com/products")
).json();
const IsAll = ref(false);
// const filteredProducts = AllProduct.filter(e => e.category === *~~variableCategory~~*)
</script>

<style scoped>
.catalogue {
  @apply;
}
.divGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
