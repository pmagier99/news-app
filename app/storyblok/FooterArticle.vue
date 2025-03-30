<template>
  <div class="flex gap-x-4 items-center">
    <div class="w-32 h-full flex-shrink-0">
      <img :src="blok.image.filename" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col h-full">
      <div class="font-bold text-3xl text-fire-bush-400">{{ number }}</div>
      <div class="font-bold text-lg hover:text-fire-bush-400 cursor-pointer">
        {{ blok.title }}
      </div>
      <div class="text-gray-500 text-sm mt-2">{{ blok.description }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["blok", "number"]);
</script>

<style lang="scss" scoped></style>
