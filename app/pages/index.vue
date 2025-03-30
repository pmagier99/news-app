<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
   <!-- <pre>{{ story ? story : 'null' }}</pre> -->
</template>

<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
});
</script>

<style lang="scss" scoped></style>
