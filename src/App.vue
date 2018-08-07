<template>
  <div id="app">
    <header>
      <div class="navbar">
          <Burger/>
      </div>
    </header>
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Burger from '@/components/Burger.vue'


export default {
  name: 'app',
  components: {
    Burger,
  },
}
</script>

<style lang="scss" src="./assets/css/style.scss">
    
   
   .roll-enter-active{
      transform: rotate(90deg);
   }
</style>
