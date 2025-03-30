<template>
  <div v-editable="blok" class="py-4" >
    <div
      class="text-lg font-bold text-white hover:text-fire-bush-400 cursor-pointer"
    >
      {{ blok.title }}
    </div>
    <p class="text-gray-200">
      {{ blok.description }}
    </p>

    <USeparator v-if="blok.seperator" class="pt-8" />
  </div>
</template>

<script setup>
defineProps(["blok"]);
</script>

<style lang="scss" scoped></style>
