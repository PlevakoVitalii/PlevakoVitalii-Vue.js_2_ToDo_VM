<template>
  <div id="app">
    <h1>Todo aplication</h1>
<<<<<<< HEAD
   <hr/>

   <router-view/>
=======
    <AddTodo @add-todo="addTodo" />
    <hr />
    <hr />
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
>>>>>>> 95c07843e754f306e5492d8f7a5d0583544e9a50
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
