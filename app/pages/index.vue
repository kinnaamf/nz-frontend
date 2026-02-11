<template>
  <div class="uppercase h-full p-5 w-full flex gap-20">
    <aside class="font-normal text-sm h-full w-[23.75rem]">
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center gap-2">
            <IconBag class="h-3 w-3"/>
            <NuxtLink to="/">Магазин</NuxtLink>
          </div>
          <div class="flex items-center gap-2">
            <IconUser class="h-3 w-3"/>
            <NuxtLink to="/">Личный кабинет</NuxtLink>
          </div>
          <div class="mt-4 ml-5">
            <ul v-for="el in topList">
              <li>
                <NuxtLink :to="el.to">{{ el.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul v-for="el in bottomList">
            <li>
              <NuxtLink :to="el.to">{{ el.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <main class="flex-1 flex flex-col gap-5 min-w-0">
      <header>
        <IconLogo/>
      </header>

      <div class="flex-1 min-h-0">
        <img src="/background.png" alt="" class="w-full h-full object-cover"/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

import IconBag from "~/ui/IconBag.vue";
import IconUser from "~/ui/IconUser.vue";
import IconLogo from "~/ui/IconLogo.vue";

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