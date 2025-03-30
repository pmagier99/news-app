<template>
  <div class="grid grid-cols-2 gap-10">
    <div class="col-span-2">
      <img :src="imgSrc" />
    </div>
    <div class="text-6xl font-bold text-black">The Bright Future of Web 3.0?</div>
    <div class="flex flex-col justify-between">
      <p class="text-base/7 text-gray-500">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <UButton label="READ MORE" size="xl" class="px-8 py-3 hover:bg-ebony-950 cursor-pointer self-start"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    default: "../images/image-web-3-desktop.jpg",
  },
});
</script>

<style lang="scss" scoped></style>
