<template>
  <div class="catalogue">
    <h1>Catalogue</h1>
    <div class="container">
      <div v-for="item in categories">
        <p>{{ item }}</p>
      </div>

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
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
const categories = await (
  await fetch("https://fakestoreapi.com/products/categories")
).json();

const AllProduct = await (
  await fetch("https://fakestoreapi.com/products")
).json();

console.log(AllProduct);
</script>

<style scoped>
.catalogue {
  @apply;
}
</style>
