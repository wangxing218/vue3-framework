import {createStore} from 'vuex'

export default createStore({
  state: {
    user: {}
  },

  getters:{
    user(state){
      return state.user
    }
  },

  mutations: {
    user(state, data){
      state.user = data
    }
  }
})