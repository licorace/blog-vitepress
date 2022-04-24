import DefaultTheme from "vitepress/dist/client/theme-default";
import './custom.styl'
import './custom2.styl'
import { registerComponents } from "./register-components.js"
import goods from "../components/App.vue"
import ChangeMode from "./ChangeMode.vue"
// import DarkMode from "../components/DarkMode.vue"
import { darkthememap,lightthememap,darkmode,lightmode }  from './themefunc.js'

let media = window.matchMedia('(prefers-color-scheme: dark)')
console.log(media);

let callback = (e) => {
  let preferDarkMode = e.matches;
  if (preferDarkMode){
    console.log("darkmode");
    darkmode(darkthememap)
  }else{
    console.log("lightmode");
    lightmode(lightthememap)
  }
}

if (typeof media.addEventListener === "function"){
    media.addEventListener('change',callback)
}

export default {
  ...DefaultTheme,
    // ...Theme,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
    app.component('goods',goods)
    app.component('ChangeMode',ChangeMode)
    // app.component('DarkMode',DarkMode)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
  Layout:ChangeMode
}




