<template lang="html">
  <div class="container w-50">
      <todo-items :todos="todos"></todo-items>
      <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoItems from './TodoItems.vue'

export default {
    name: 'todoapp',
    components:{
         'todo-items': TodoItems,
         'todo-form': TodoForm
    },
    data () {
      return {
        title: 'My Todos',
        todos: [{title: 'Learning Vue', completed: false}],
      }
    }
}
</script>

<style lang="css">
</style>
