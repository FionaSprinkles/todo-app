<script setup>
import addTodo from '../components/AddTodo.vue'
</script>

<template>
    <main>
        <addTodo/>
        
        <RouterLink to="/">
        Todo
        </RouterLink>
    </main>
</template>