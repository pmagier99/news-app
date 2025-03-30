export default defineAppConfig({
  ui: {
    colors: {
      primary: "coral-red",
      secondary: "var(--color-ebony-950)"
    },
    navigationMenu: {
      slots:{
        link: "hover:text-(--ui-primary)"
      },
      variants:{
        orientation:{
          horizontal: {
            link: "px-5",
          }
        }
      },
      
    },
    button:{
      slots:{
        label: "tracking-[0.3em]",
      },
    }
  },
});
