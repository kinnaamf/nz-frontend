<template>
  <aside class="font-normal text-sm h-full w-[23.75rem]">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center gap-2">
          <IconBag class="h-3 w-3"/>
          <NuxtLink to="/products">Магазин</NuxtLink>
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
</template>

<script setup lang="ts">

import IconBag from "~/ui/IconBag.vue";
import IconUser from "~/ui/IconUser.vue";

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
</script>

<style scoped lang="postcss">

</style>