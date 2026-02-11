<template>
  <div class="uppercase h-full p-5 w-full flex gap-20">
    <AppSidebar/>

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

import IconLogo from "~/ui/IconLogo.vue";
import AppSidebar from "~/components/AppSidebar.vue";

</script>