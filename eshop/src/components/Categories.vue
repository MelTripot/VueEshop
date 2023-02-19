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
        trier par :
        <a class="sort" @click="sort('nd')"> note décroissante </a>
        <a class="sort" @click="sort('nc')"> note croissante </a>
        <a class="sort" @click="sort('a')"> odre alphabetique </a>
        <a class="sort" @click="sort('ad')">ordre alphabetique inverser </a>
      </div>

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
const fromProductCategorie = defineProps({ categories: String });
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
}
let sorted = "";
function sort(param) {
  if (param == "nd") {
    filteredProducts.value.sort((x) => x.rating.rate);
  } else if (param == "nc") {
    filteredProducts.value.sort(function (a, b) {
      return b.rating.rate - a.rating.rate;
    });
  } else if (param == "a") {
    filteredProducts.value.sort(function (a, b) {
      return a.title - b.title;
    });
  } else if (param == "ad") {
    filteredProducts.value.sort(function (a, b) {
      return b.title - a.title;
    });
  }
}
</script>

<style scoped>
.catalogue {
  @apply;
}
.sort {
  margin: 1rem;
}

.divGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
