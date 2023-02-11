<template>
  <div class="catalogue">Catalogue</div>
</template>

<script setup>
const products = await fetch("https://fakestoreapi.com/products/categories");
console.log(products);
</script>

<style scoped>
.catalogue {
  @apply;
}
</style>
