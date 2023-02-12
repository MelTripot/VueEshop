<template>
  <div class="Categorie">TOdo link le nom</div>
</template>

<script setup>
const products = await fetch(
  "https://fakestoreapi.com/products/category/" + category
);
console.log(products);
</script>

<style scoped>
.Categorie {
  @apply;
}
</style>
