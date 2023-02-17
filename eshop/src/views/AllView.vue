<template>
  <div class="all">All</div>
</template>

<script setup>
const products = await fetch("https://fakestoreapi.com/products");
console.log(products);
</script>

<style scoped>
.all {
  @apply;
}
</style>
