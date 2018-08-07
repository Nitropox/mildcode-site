<template>
    <div id="burger" class="burger center" :class="{burgerActive: getBurgerState()}" @click="clickBurger()">
        <div class="three-bars">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Burger',
  data(){
      return{
       
      }
  },
  computed:{
     
  },
  methods:{
      ...mapGetters([
      'getBurgerState'
    ]),
    ...mapActions(['clickBurger']),
   
  }
}
</script>

<style>
    .burgerActive{
         transform: rotate(90deg);
    }
</style>