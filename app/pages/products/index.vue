<template>
  <AppHeader/>

  <main class="px-[11.25rem] pb-[6.25rem]">
    <ProductGrid :products="products" />
  </main>
</template>

<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";
import ProductGrid from "~/components/product/ProductGrid.vue";

const { products } = useProducts()
</script>