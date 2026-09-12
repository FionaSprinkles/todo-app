<script setup>
import Hello from '../components/Hello.vue'
import ChooseOne from '../components/ChooseOne.vue'
</script>

<template>
  <main>
    <Hello />
    <ChooseOne />

      <RouterLink to="/addTodo">
        Add new Todo
      </RouterLink>
    
      <RouterLink to="/myTodos">
        My Todos
      </RouterLink>
  </main>

</template>
