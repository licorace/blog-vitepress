<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
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
        currentMode: true
      }
    },
    methods:{
      switchNightMode(){
        this.currentMode = !this.currentMode
        changecolor()
      }
    }

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




</style>