<template>
  <header class="sticky left-0 top-0 bg-white/90 backdrop-blur-md z-[50] before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]">
    <div class="absolute top-[18px] left-6">
      <button @click="isVisible = true">
        <IconMenu/>
      </button>
    </div>
    <div class="flex justify-between items-center py-6 uppercase px-[11.25rem]">
      <NuxtLink :to="{ name: 'index' }">
        <IconLogoSmall/>
      </NuxtLink>

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
    </div>
  </header>
  <Teleport to="body">
    <Transition name="slide">
      <AppMenu v-if="isVisible" @close-menu="isVisible = false" />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">

import IconMenu from "~/ui/IconMenu.vue";
import IconLogoSmall from "~/ui/IconLogoSmall.vue";
import IconBag from "~/ui/IconBag.vue";
import IconUser from "~/ui/IconUser.vue";
import AppMenu from "~/components/AppMenu.vue";

const isVisible = ref(false)
</script>

<style scoped lang="postcss">
.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
}

.slide-enter-from .bg-white,
.slide-leave-to .bg-white {
  transform: translateX(-100%);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>