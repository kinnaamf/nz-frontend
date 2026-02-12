<template>
  <AppHeader/>

  <main class="px-[11.25rem] pb-[6.25rem]">
    <div class="grid grid-cols-3 gap-x-3 gap-y-6">
      <div v-for="p in products" :key="p.id" class="text-center uppercase">
        <NuxtLink :to="{ name: 'products-id', params: { id: p.id } }">
          <div class="bg-[#F5F5F5] overflow-hidden p-[5.625rem] brightness-150">
            <img :src="p.images[0]" alt="" class="aspect-square w-full object-cover">
          </div>
          <div class="flex flex-col items-center mt-4">
            <h6>Base black T-shirt</h6>
            <div class="mt-[0.375rem] px-2 py-[2px] bg-[#F5F5F5] rounded-full w-max">
              <h6>·&hairsp;1999₽</h6>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";

const { products } = useProducts()
</script>


<style scoped lang="postcss">

</style>