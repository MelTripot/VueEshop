<template>
  <div class="product">Product</div>
</template>

<script setup>
const { id } = defineProps({
  id: Number,
});

const product = await (
  await fetch("https://fakestoreapi.com/products/" + id)
).json();
</script>

<style scoped>
.product {
  @apply;
}
</style>
