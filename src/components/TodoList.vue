<template>
  <div>
    <ul>
      <TodoItem 
      v-for="todo of todos"
      v-bind:key="todo.index"
      v-bind:todo="todo" 
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props:['todos'],
  components:{
    TodoItem
  }
}
</script>
