<template>
  <div class="product">Product</div>
  <input :value="idProduct" @input="idProduct = $event.target.value" />
</template>

<script setup>
const products = await fetch("https://fakestoreapi.com/products/" + idProduct);
console.log(products);
</script>

<style scoped>
.product {
  @apply;
}
</style>
