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
            :key="todo.title"
        >

            <h4>{{ todo.taskList }}</h4>

            <h2>{{ todo.title }}</h2>

            <h3>{{ todo.time }} minutes</h3>

            <p>Deadline: {{ todo.deadline }}</p>

            <p>{{ todo.description }}</p>

            <p>Repeat this task? {{ todo.repeat }}</p>
            <p v-if="todo.repeat === 'yes'">
                Schedule: {{ todo.repeatSchedule }}
            </p>
        </li>
    </ul>
</template>

<style scoped>

h1 {
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    max-width: 700px;
    margin: 0 auto;
}

li {
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
}

</style>