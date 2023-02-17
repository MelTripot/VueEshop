<template>
  <div class="wrapper">
    <div class="d-flex gap-12">
      <div class="row">
        <div class="column1">
          <div>{{ product.category }}</div>
          <img :src="product.image" width="400" class="product-img" />
          <h1>{{ product.title }}</h1>
        </div>
        <div class="column2">
          <div class="product-description">
            <span>{{ product.description }}</span>
            <span>
              {{ product.rating.rate }}
              <img src="../assets/star.png" class="icon" />
              - {{ product.rating.count }} avis</span
            >
            <span class="text-h4 text-secondary font-weight-bold">
              {{ product.price }} €
            </span>
            <button class="pannier">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const product = await (
  await fetch("https://fakestoreapi.com/products/" + id)
).json();
</script>

<style scoped>
.product {
  @apply;
}
.icon {
  max-width: 12px;
}
.pannier {
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
.wrapper {
  display: flex;
  align-items: center;
  min-height: 660px;
  width: 1000px;
}
.product-img {
  max-height: 37.5em;
}
.product-description {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.gap-12 {
  gap: 3rem;
}
.buttons-group {
  margin-top: auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 2em;
}
.column1 {
  float: left;
  width: 50%;
}
.column2 {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
