import Vue from 'vue'
import Router from 'vue-router'
// import Todo from '@/components/Todo'
import TodoApp from '@/components/TodoApp'

Vue.use(Router)

export default new Router({
  routes: [
    //   {
    //       path: '/',
    //       name: 'todo',
    //       component: Todo
    //   },
      {
          path: '/',
          name: 'todoapp',
          component: TodoApp
      }
  ]
})
