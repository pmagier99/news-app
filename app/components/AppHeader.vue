<template>
  <header class="container flex justify-between items-center py-12">
    <img src="/images/logo.svg" />

    <!-- desktop -->
    <UNavigationMenu
      v-if="width >= 768"
      :items="items"
      class="justify-center"
      variant="link"
      color="gray"
    />

    <!-- mobile -->
    <UDrawer v-else direction="right" :handle="false" v-model:open="open">
      <UButton
        variant="soft"
        icon="i-lucide-align-justify"
        class="bg-transparent"
        color="secondary"
        :ui="{
          leadingIcon: 'size-15',
        }"
      />
      <template #header>
        <UButton
          variant="soft"
          size="xl"
          icon="i-lucide-x"
          :ui="{
            leadingIcon: 'size-15',
          }"
          class="bg-transparent cursor-pointer float-end"
          color="secondary"
          @click="
            () => {
              console.log('Clicked!');
              open = false;
            }
          "
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          class="pl-10 pt-20 data-[orientation=vertical]:w-[calc(100vw*0.75)]"
          variant="link"
          color="gray"
          orientation="vertical"
          :ui="{
            linkLabel: 'text-2xl py-2',
          }"
        />
      </template>
    </UDrawer>
  </header>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "New",
    to: "/",
  },
  {
    label: "Popular",
    to: "/",
  },
  {
    label: "Trending",
    to: "/",
  },
  {
    label: "Categories",
    to: "/",
    class: "md:px-0 md:pl-5",
  },
]);

const { width } = useWindowSize();
const open = ref(false);
</script>

<style lang="scss" scoped></style>
