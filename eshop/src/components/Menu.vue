<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/" style="margin: 1rem">Home</RouterLink>
        <RouterLink to="/catalogue" style="margin: 1rem">Catalogue</RouterLink>
        <RouterLink to="/all" style="margin: 1rem"
          >Tous les produits</RouterLink
        >
        <RouterLink to="/panier" style="margin: 1rem">Panier</RouterLink>

        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>
</template>

<script scoped></script>

<style scoped>
.nav {
  @apply inline-flex w-screen;
}
</style>
