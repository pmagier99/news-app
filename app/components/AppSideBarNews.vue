<template>
  <div class="py-4">
    <div
      class="text-lg font-bold text-white hover:text-fire-bush-400 cursor-pointer"
    >
      {{ title }}
    </div>
    <p class="text-gray-200">
      {{ desc }}
    </p>

    <USeparator v-if="seperator" class="pt-8" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  seperator: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
