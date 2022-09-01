import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';

const routes = [
  {
    //path: url 주소
    path: '/',
    //component: url 주소로 갔을 때 표시될 컴포넌트
    redirect: '/news',
  },
  {
    path: '/news',
    component:NewsView,
  },
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component:JobsView,
  },
  {
    path: '/user/:id',
    component:UserView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router