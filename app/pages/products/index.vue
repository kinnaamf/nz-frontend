<template>
  <AppHeader/>

  <main class="px-[11.25rem] pb-[7.5rem]">
    <div class="grid grid-cols-3 gap-x-3 gap-y-6">
      <div v-for="item in 6" :key="item" class="text-center uppercase">
        <div class="bg-[#F5F5F5] overflow-hidden p-[5.625rem] brightness-150">
          <img src="/shirt.png" alt="" class="aspect-square w-full object-cover">
        </div>
        <div class="flex flex-col items-center mt-4">
          <h6>Base black T-shirt</h6>
          <div class="mt-[0.375rem] px-2 py-[2px] bg-[#F5F5F5] rounded-full w-max">
            <h6>·&hairsp;1999₽</h6>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";
</script>


<style scoped lang="postcss">

</style>