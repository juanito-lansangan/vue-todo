<template lang="html">
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
</template>

<script>
export default {
    name: 'todoitems',
    props: ['todos'],
    computed: {
        todoCount () {
            return this.todos.length
        }
    },
    methods: {
        removeTodo (index) {
            this.todos.splice(index, 1)
        }
    }
}
</script>

<style lang="css">
.strike-through {
    text-decoration: line-through;
}
</style>
