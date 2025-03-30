<template>
  <div class="flex gap-x-4 items-stretch max-h-[120px]">
    <div class="h-full flex items-center">
      <img :src="img" class="max-h-full" />
    </div>
    <div class="flex flex-col h-full">
      <div class="font-bold text-3xl text-fire-bush-400">{{ number }}</div>
      <div class="font-bold text-lg hover:text-fire-bush-400 cursor-pointer">{{ title }}</div>
      <div class="text-gray-500 text-sm mt-2">{{ desc }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
