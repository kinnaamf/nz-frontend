<template>
  <div @click="$emit('close-menu')" class="fixed inset-0 w-screen h-screen bg-black/10 backdrop-blur-lg z-[1000]">
    <div class="bg-white w-1/4 p-5 h-full" @click.stop>
      <aside class="font-normal flex flex-col gap-5 text-sm w-[23.75rem] uppercase h-full">

        <div class="flex items-center gap-20">
          <button @click="$emit('close-menu')">
            <IconCross/>
          </button>
          <IconLogoSmall/>
        </div>

        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="flex items-center gap-2">
              <IconBag class="h-3 w-3"/>
              <NuxtLink to="/">Корзина</NuxtLink>
            </div>
            <div class="flex items-center gap-2">
              <IconUser class="h-3 w-3"/>
              <NuxtLink to="/">Личный кабинет</NuxtLink>
            </div>
            <div class="mt-4 ml-5">
              <ul>
                <li v-for="el in topList" :key="el.text">
                  <NuxtLink :to="el.to">{{ el.text }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li v-for="el in bottomList" :key="el.text">
                <NuxtLink :to="el.to">{{ el.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconBag from "~/ui/IconBag.vue";
import IconUser from "~/ui/IconUser.vue";
import IconCross from "~/ui/IconCross.vue";
import IconLogoSmall from "~/ui/IconLogoSmall.vue";

const topList = [
  { to: '/', text: 'faq' },
  { to: '/', text: 'Контакты' },
  { to: '/', text: 'Клиентский сервис' },
]

const bottomList = [
  { to: '/', text: 'Договор оферты' },
  { to: '/', text: 'Политика конфиденциальности' },
  { to: '/', text: 'Условия доставки' },
]

defineEmits(['close-menu'])

onMounted(() => {
  document.body.style.overflow = "hidden";
})

onUnmounted(() => {
  document.body.style.overflow = "";
})
</script>

<style scoped lang="postcss">
.bg-white {
  animation: slideIn .3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
