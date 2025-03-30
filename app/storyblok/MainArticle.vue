<template>
  <div class="md:grid md:grid-cols-2 md:gap-10 gap-5 flex flex-col">
    <div class="md:col-span-2">
      <img
        :src="width >= 768 ? blok.image.filename : blok.mobileImage.filename"
        class="h-full"
      />
    </div>
    <div class="md:text-6xl text-4xl font-bold text-black">
      {{ blok.title }}
    </div>
    <div class="flex flex-col justify-between md:gap-0 gap-5">
      <p class="text-base/7 text-gray-500">
        {{ blok.description }}
      </p>
      <UButton
        label="READ MORE"
        size="xl"
        class="px-8 py-3 hover:bg-ebony-950 hover:text-white text-ebony-950 cursor-pointer self-start font-bold"
      />
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const screenWidth = ref(width.value); // Manually track width

// Ensure reactivity on mobile
watchEffect(() => {
  screenWidth.value = width.value;
});

defineProps(["blok"]);
</script>

<style lang="scss" scoped></style>
