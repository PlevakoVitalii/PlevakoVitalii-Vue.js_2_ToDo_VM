<template>
  <div>
    <ul>
      {{todo.title}}
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todo: { 
      type: Object,
      required: true
    },
  },
};
</script>