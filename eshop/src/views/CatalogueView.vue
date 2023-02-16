<template>
  <div class="catalogue">
    <h1>Catalogue</h1>
    <div class="container">
      <a
        style="margin: 1rem"
        v-for="item in categories"
        @click="filtered(item)"
        >{{ item }}</a
      >

      <a @click="filtered('All')">Voir tous les produits</a>

      <div>
        <div class="divGrid">
          <ProductCard
            v-for="P of filteredProducts"
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
import ProductCard from "../components/ProductCard.vue";
import { reactive, ref } from "vue";
const categories = await (
  await fetch("https://fakestoreapi.com/products/categories")
).json();

const AllProduct = await (
  await fetch("https://fakestoreapi.com/products")
).json();
const filteredProducts = ref(AllProduct);
//  const filteredProducts = AllProduct.filter(e => e.category === *~~variableCategory~~*)
function filtered(filtre) {
  if (filtre == "All") {
    filteredProducts.value = AllProduct;
  } else {
    filteredProducts.value = AllProduct.filter((C) => C.category == filtre);
  }
  console.log(filteredProducts.value);
}
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
