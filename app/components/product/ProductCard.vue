<template>
  <NuxtLink :to="{ name: 'products-id', params: { id: product.id } }">
    <div class="bg-[#F5F5F5] overflow-hidden p-[5.625rem] brightness-150">
      <img
          :src="product.images[0]"
          alt=""
          class="aspect-square w-full object-cover">
    </div>
    <div class="flex flex-col items-center mt-4">
      <h6>{{ product.name }}</h6>
      <div class="mt-[0.375rem] px-2 py-[2px] bg-[#F5F5F5] rounded-full w-max">
        <h6>·&hairsp;{{ product.price }}₽</h6>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

defineProps<{
  product: Product
}>()
</script>
