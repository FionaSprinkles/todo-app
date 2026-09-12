import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodoView from '../views/AddTodoView.vue'
import MyTodosView from '../views/MyTodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addTodo',
      name: 'Add todo',
      component: AddTodoView
    },
    {
      path: '/myTodos',
      name: 'My Todos',
      component: MyTodosView
    },
  ],
})

export default router
