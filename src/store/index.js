import Vue from 'vue'
import Vuex from 'vuex'
import { fetchListItem, fetchCommentItem, fetchUserInfo } from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list : [],
    comment : [],
    user :''
  },
  mutations: {
    SET_LIST(state, list){
      state.list = list 
    },
    SET_COMMENT(state, comment){
      state.comment = comment
    },
    SET_USER(state, user){
      state.user = user
    }
    
  },
  actions: {
    FETCH_LIST(context, pageName){
      return fetchListItem(pageName)
      .then(res =>{
        context.commit('SET_LIST', res.data)
        return res
      })
    },
    FETCH_USER(context, userName){
      return fetchUserInfo(userName)
      .then(res =>{
        context.commit('SET_USER', res.data)
        return res
      })
    },
    FETCH_COMMENT(context, pageId){
      return fetchCommentItem(pageId)
      .then( res=>{
        context.commit('SET_COMMENT', res.data)
        return res
      })
    }

  },
  modules: {
  }
})
