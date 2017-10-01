<template lang="html">
    <div class="row mt-5">
        <div class="col-sm-12">
            <form v-on:submit.prevent="addTodo()">
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
</template>

<script>
export default {
    name: 'todoform',
    props: ['todos'],
    data () {
      return {
        newTodo: {title: '', completed: false},
      }
    },

    methods: {
      addTodo () {
        this.todos.push(this.newTodo)
        this.newTodo = {title: '', completed: false}
      }
    }
}
</script>

<style lang="css">
</style>
