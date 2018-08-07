<template>
    <section class="menu-page">
        <div>
            <nav>
                <ul>
                    <li @click="clickMenu('/about')">About</li>
                    <li @click="clickMenu('/cases')">Cases</li>
                    <li @click="clickMenu('/contact')">Contact</li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'menus',
  methods: {
      ...mapActions(['clickMenu']),
  }
} 
</script>

<style lang="scss">
    
</style>