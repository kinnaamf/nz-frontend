<template>
  <AppHeader/>

  <div class="flex flex-col items-center justify-center w-full pb-[6.25rem]">
    <div class="w-max">
      <img :src="product?.images[0]" alt="" class="aspect-square w-[35rem] h-auto brightness-150 p-16">
      <div class="flex justify-evenly mt-12">
        <img v-for="url in product?.images" :src="url" alt="" class="w-[6.875rem] h-auto aspect-square brightness-150">
      </div>
    </div>
    <div class="mt-10">
      <h4 class="text-2xl font-medium">{{ product?.name }}</h4>
      <h4 class="text-center text-xl">{{ product?.price }}₽</h4>
    </div>
    <div class="w-max mt-4">
      <div class="flex gap-2 w-max mb-[0.625rem]">
        <button
            v-for="size in product?.sizes"
            :key="size"
            @click="selectedSize = size"
            :class="['text-sm font-medium px-8 py-2 rounded-full transition-all',
            selectedSize === size ? 'bg-[#F5F5F5] text-black' : 'bg-white text-neutral-500',
            ]"

        >
          {{ size }}
        </button>
      </div>

      <button class="bg-black w-full text-white px-10 py-2 rounded-full">В корзину</button>
    </div>
    <div class="mt-[4.5rem]">
      <div class="flex gap-6 uppercase">
        <a
            v-for="tab in tabs"
            :key="tab.id"
            @click.prevent="selectedTab = tab.id"
            :class="[
                'transition-colors cursor-pointer',
                selectedTab === tab.id ? 'text-black font-medium' : 'text-neutral-300 hover:text-neutral-500',
            ]"
            href="#"> {{ tab.label }} </a>
      </div>
      <div class="mt-6 text-center">
        <p>{{ activeTabContent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getProduct } = useProducts()

const route = useRoute()

const product = computed(() => {
  return getProduct(Number(route.params.id))
})

const tabs = [
  {
    id: 'description',
    label: 'Описание',
    content: 'ТАМ СЯМ ТОСИ БОСИ ТУДА СЮДА ЗДЕСЬ ТАМ'
  },
  {
    id: 'size-chart',
    label: 'Размерная сетка',
    content: '...'
  },
  {
    id: 'delivery',
    label: 'Доставка',
    content: '...'
  },
]

const selectedSize = ref<string | null>(product.value?.sizes[0] ?? null)
const selectedTab = ref<string | null>(tabs[0].id ?? null)
const activeTabContent = computed(() => {
  return tabs.find((tab) => tab.id === selectedTab.value)?.content || ''
})

watchEffect(() => {
  selectedSize.value = product.value.sizes[0]
  selectedTab.value = tabs[0]
})


</script>