<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-10">
      <AppMainArticle class="col-span-2" />

      <AppSideBarNewsContainer>
        <AppSideBarNews
          title="Hydrogen VS Electric Cars"
          desc="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <AppSideBarNews
          title="The Downsides of AI Artistry"
          desc="What are the possible adverse effects of on-demand AI image generation?"
        />
        <AppSideBarNews
          title="Is VC Funding Drying Up?"
          desc="Private funding by VC firms is down 50% YOY. We take a look at what that means."
          :seperator="false"
        />
      </AppSideBarNewsContainer>
    </div>

    <div class="grid grid-cols-3 gap-10 mt-10">
      <AppFooterArticle
        number="01"
        title="Reviving Retro PCs"
        desc="What happens when old PCs are given modern upgrades?"
        img="/images/image-retro-pcs.jpg"
      />
      <AppFooterArticle
        number="02"
        title="Top 10 Laptops of 2022"
        desc="Our best picks for various needs and budgets."
        img="/images/image-top-laptops.jpg"
      /><AppFooterArticle
        number="03"
        title="The Growth of Gaming"
        desc="How the pandemic has sparked fresh opportunities."
        img="/images/image-gaming-growth.jpg"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
