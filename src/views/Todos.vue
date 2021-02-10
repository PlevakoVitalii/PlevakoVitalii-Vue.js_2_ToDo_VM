<template>
  <div>
    <h2>Todo aplication</h2>
    <AddTodo @add-todo="addTodo" />
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-if-else="todos.length"
      v-bind:todos="todos"
      @remove-todo="removeTodo"
    />
    <p>No Todos!</p>
  </div>
</template> 

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 3000);
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>