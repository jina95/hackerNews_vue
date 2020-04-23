import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/NewsView.vue'
import Jobs from '../views/JobsView.vue'
import Ask from '../views/AskView.vue'
import Comment from '../views/Comments.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'news',
    component: News
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/ask',
    name: 'ask',
    component: Ask
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path:'/user/:id',
    name: 'user',
    component: UserView
  },
  {
    path:'/item/:id',
    name: 'comment',
    component: Comment
  }

]

export const router = new VueRouter({ routes })

