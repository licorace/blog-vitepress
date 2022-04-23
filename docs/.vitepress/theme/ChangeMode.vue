<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #navbar-search>
      <div class="demo-area">
        <a id="sma" title="模式切换" @click="switchNightMode">
          <i class="fa-moon" v-if="currentMode"></i>
          <i class="fa-lightbulb" v-else></i>
        </a>
      </div>
      
    </template>
  </Layout>
  
</template>

<script>
  export default {
    data(){
      return{
        currentMode: true
      }
    },
    methods:{
      switchNightMode(){
        this.currentMode = !this.currentMode
        const mode = document.querySelector("i")
        console.log(mode.classList.value);
        const modevalue = mode.classList.value
        if(modevalue === 'fa-moon'){
          console.log("darkmode");
          const body = document.body
          body.style.setProperty('--c-brand','#31b27a')
          body.style.setProperty('background-color','#000')

          const navbar = document.querySelector('.nav-bar')
          navbar.style.setProperty('background-color','#000')
          const sidebar = document.querySelector('.sidebar')
          sidebar.style.setProperty('background-color','#000')
          const font_dark_color = document.querySelectorAll('body p,h1,h2,h3,h4,h5,h6,a,span')
          font_dark_color.forEach(item => item.style.setProperty('color','#fff'))
          const code_color = document.querySelectorAll('body code')
          code_color.forEach(item => item.style.setProperty('color','#33CCFF'))
          
          
          




          // const htmlnode = document.querySelector("html")
          // htmlnode.style.setProperty('filter','invert(1) hue-rotate(180deg)')
          // const imgnode = document.querySelector("img")
          // console.log(imgnode)
          // imgnode.style.setProperty('filter','invert(1) hue-rotate(180deg)')
        }else{
          console.log("lightmode");

          const body = document.body
          body.style.setProperty('--c-brand','')
          body.style.setProperty('background-color','')

          const navbar = document.querySelector('.nav-bar')
          navbar.style.setProperty('background-color','')
          const sidebar = document.querySelector('.sidebar')
          sidebar.style.setProperty('background-color','')
          const font_dark_color = document.querySelectorAll('body p,h1,h2,h3,h4,h5,h6,a,span')
          font_dark_color.forEach(item => item.style.setProperty('color',''))
          const code_color = document.querySelectorAll('body code')
          code_color.forEach(item => item.style.setProperty('color',''))
          





          // const htmlnode = document.querySelector("html")
          // const imgnode = document.querySelector("img")
          // htmlnode.style.setProperty('filter','')
          // imgnode.style.setProperty('filter','')
        }
      }
    }

  }
</script>




<style scoped>
  #sma {
    box-shadow: #aaa 2px 5px 10px;
    background: #000;
    width: 38px;
    height: 38px;
    display: block;
    border-radius: 50%;
    cursor: pointer;
  }

  .fa-moon::before{
    content: url("moon.svg");
    /* background-color: red; */

    /* 位置不是很好看(以后) */
    position: absolute; /* 相对定位 */
    /* right: 26px;
    top: 99px; */
    /* z-index: 200; */
    left: 6px;
    top: 3px;
  }

  .fa-lightbulb::before{
    content: url("lightbulb.svg");
    position: absolute; 
    left: 6px;
    top: 3px;
  }

  .demo-area{
    /* background-color #fff; */
    /* color: #000;
    padding: 22px 24px;
    border-radius: 8px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
    margin-bottom: 1.2em; */
    transition: background-color .5s ease;
    position: relative;
    right: -13px;
  
}




</style>