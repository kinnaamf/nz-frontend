<template>
  <div class="grid grid-cols-3 gap-x-3 gap-y-6">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product"

defineProps<{
  products: Product
}>()
</script>
