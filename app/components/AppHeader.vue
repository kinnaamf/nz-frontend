<template>
  <div class="absolute top-[18px] left-6">
    <button>
      <IconMenu/>
    </button>
  </div>
  <header class="flex justify-between  items-center py-6 uppercase px-[11.25rem]">
    <IconLogoSmall/>

    <div class="flex gap-8">
      <div class="flex items-center gap-2">
        <IconBag class="h-3 w-3"/>
        <NuxtLink to="/products">Магазин</NuxtLink>
      </div>
      <div class="flex items-center gap-2">
        <IconUser class="h-3 w-3"/>
        <NuxtLink to="/">Личный кабинет</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import IconMenu from "~/ui/IconMenu.vue";
import IconLogoSmall from "~/ui/IconLogoSmall.vue";
import IconBag from "~/ui/IconBag.vue";
import IconUser from "~/ui/IconUser.vue";
</script>

<style scoped lang="postcss">

</style>