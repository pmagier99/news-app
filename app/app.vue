<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>

const config = useState('config', () => {});

await callOnce(async () => {
  config.value = await useAsyncStoryblok("global/config", {
    version: "draft",
  });
});
</script>
