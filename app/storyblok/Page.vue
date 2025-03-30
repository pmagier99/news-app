<template>
  <div class="container">
    <div class="flex flex-col md:flex-row md:justify-between gap-10">
      <StoryblokComponent
        :key="blok.main_article[0]._uid"
        :blok="blok.main_article[0]"
        class="md:w-2/3 self-start"
      />

      <AppSideBarNewsContainer class="md:w-1/3 " >
        <StoryblokComponent
          v-for="news in blok.sidebar_news"
          :key="news._uid"
          :blok="news"
        />
      </AppSideBarNewsContainer>
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-10 my-20">
      <StoryblokComponent
        v-for="(article, index) in blok.footer_news"
        :key="article._uid"
        :number="`0${index + 1}`"
        :blok="article"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(["blok"]);

</script>
