import DefaultTheme from "vitepress/dist/client/theme-default";
import "./custom.styl";
import "./custom2.styl";
import { registerComponents } from "./register-components.js";
import goods from "../components/App.vue";
import Layout from "./Layout.vue";
import record from "../components/putOnRecord.vue";
// import DarkMode from "../components/DarkMode.vue"

export default {
  ...DefaultTheme,
  // ...Theme,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
    app.component("goods", goods);
    app.component("Layout", Layout);
    app.component("record", record);
    // app.component('DarkMode',DarkMode)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
  Layout: Layout,
};
