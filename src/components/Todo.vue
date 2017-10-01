<template>
    <div class="container w-50">
        <div class="row">
            <div class="col-sm-12">
                <h1 v-if="todoCount > 0">My Todos {{ todoCount }}</h1>
                <h1 v-else>Create Your TODO List</h1>
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="(todo, index) in todos">
                        <input class="mt-2 float-left" type="checkbox" v-model="todo.completed">
                        <span class="ml-3 mt-1 float-left"
                            v-bind:class="{'strike-through' : todo.completed}">
                            {{ todo.title }}</span>
                        <button type="button"
                            class="btn btn-danger btn-sm float-right"
                            v-on:click="removeTodo(index)"> Delete</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-12">
                <form v-on:submit.prevent="addTodo(newTodo)">
                  <div class="form-group">
                    <input type="text"
                        class="form-control"
                        v-model="newTodo.title"
                        placeholder="Add new todo">
                  </div>
                  <button type="submit" class="btn btn-primary d-flex justify-content-start">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'todo',

  data () {
    return {
      title: 'My Todos',
      todos: [{title: 'Learning Vue', completed: false}],
      newTodo: {title: '', completed: false}
    }
  },

  computed: {
      todoCount () {
          return this.todos.length
      }
  },

  methods: {
    addTodo (newTodo) {
        this.todos.push(newTodo)
        this.newTodo = {title: '', completed: false}
    },
    removeTodo (index) {
        this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .strike-through {
        text-decoration: line-through;
    }
</style>
