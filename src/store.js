import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBurgerClicked: false,
    activePage: '/',
  },
  getters:{
    getBurgerState: state => state.isBurgerClicked,
    getActivePage:  state => state.activePage,
  },
  mutations: {
    setBurger: (state) =>{
      state.isBurgerClicked = !(state.isBurgerClicked);
    },
    setActivePage: (state, page) =>{
      state.activePage = page;
    }
  },
  actions: {
    clickBurger({commit}){
      commit('setBurger');
      if(this.state.isBurgerClicked){
        router.push('/menus');
      }else{
        router.push(this.state.activePage);
      }
    },
    clickMenu({commit}, page){
      commit('setActivePage',page);
      commit('setBurger');
      if(this.state.isBurgerClicked){
        router.push('/menus');
      }else{
        router.push(this.state.activePage);
      }

    }
  }
})
