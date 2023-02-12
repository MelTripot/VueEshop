<template>
  <div class="product-card" @click="onCardClick">
    <div class="product-card__image">
      <img :src="card.img" />
    </div>
    <p class="product-card__likes">{{ card.likes }}</p>
    <h1 class="product-card__title">{{ card.title }}</h1>
    <p class="product-card__price">{{ card.price }} €</p>
  </div>
</template>

<script setup>
const card = defineProps({
  id: Number,
  title: String,
  price: Number,
  img: String,
  likes: Number,
});
const onCardClick = () => {
  router.push({ name: "/product", params: { id: card.id } });
};
console.log(card);
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 269px;
  height: 360px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  margin-right: 32px;
  margin-bottom: 48px;
  cursor: pointer;
}
.product-card__content {
  flex: 1;
}
.product-card__image {
  width: 237px;
  height: 180px;
  border-radius: 12px;
}
.product-card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product-card__title {
  font-weight: 500;
  font-size: 15px;
  color: #151515;
  margin-top: 16px;
  width: 236px;
  height: 45px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-card__footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}
.product-card__price {
  font-weight: 600;
  color: #151515;
  font-size: 18px;
}
.product-card__likes {
  font-weight: 600;
  color: #151515;
  font-size: 18px;
}
</style>
