<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import { darkthememap,lightthememap,darkmode,lightmode }  from './themefunc.js'
</script>

<template>
  <Layout>
    <template #navbar-search>
      <div class="area">
        <a id="sma" title="模式切换" @click="switchNightMode">
          <i class="fa-moon" v-if="currentMode"></i>
          <i class="fa-lightbulb" v-else></i>
        </a>
      </div>
    </template>
  </Layout>
</template>



<script>
  import changecolor from './changemode-color.js'
  export default {
    data(){
      return{
        currentMode: true,
        isFollow: true
      }
    },
    methods:{
      switchNightMode(){
        this.currentMode = !this.currentMode
        changecolor()
      }
    },
    mounted() {
    //这一部分是写了以下的函数,以满足自适应跟随系统改变暗黑模式的功能,当ifFollow是true时,会自动跟随,false时将不自动跟随.
    //vite打包报错 ReferenceError: window is not defined,因为这里面用到了window,而vite采用的是服务端渲染 所以此时找不到对应的window
    //解决方法是在组件实例被挂载后调用,也就是在mounted中使用,
    // mounted: function () {
    //   this.$nextTick(function () {
        // 仅在整个视图都被渲染之后才会运行的代码
    // })}
    this.$nextTick(function autodarkmode() {
      let media = window.matchMedia("(prefers-color-scheme: dark)");
      console.log(media);

      let callback = (e) => {
        let preferDarkMode = e.matches;
        if (preferDarkMode) {
          console.log("darkmode");
          darkmode(darkthememap);
        } else {
          console.log("lightmode");
          lightmode(lightthememap);
        }
      };

      if (typeof media.addEventListener === "function" && this.isFollow) {
        media.addEventListener("change", callback);
      }
    })
  },

  }
</script>




<style scoped>
  #sma {
    box-shadow: #aaa 2px 5px 10px;
    background: rgba(0, 0, 0, 0.86);
    width: 38px;
    height: 38px;
    display: block;
    border-radius: 50%;
    cursor: pointer;
  }

  .fa-moon::before{
    content: url("../moon.svg");
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
    content: url("../lightbulb.svg");
    position: absolute; 
    left: 6px;
    top: 3px;
  }

  .area{
    /* background-color #fff; */
    /* color: rgba(0, 0, 0, 0.86);
    padding: 22px 24px;
    border-radius: 8px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
    margin-bottom: 1.2em; */
    transition: background-color .5s ease;
    position: relative;
    right: -13px; 
  }

  .record{
    position: absolute;
    left: 814px;
    top: 900px;
  }





</style>