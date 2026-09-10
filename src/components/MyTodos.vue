<script setup>
import { ref } from 'vue'

const todos = ref(
    JSON.parse(localStorage.getItem('todos')) || [] //import from AddTodo.vue
)
</script>

<template>
    <h1>My todos</h1>

    <ul>
        <li
            v-for="todo in todos"
            :key="todos"
        >
            {{ todos }}
        </li>
    </ul>
</template>