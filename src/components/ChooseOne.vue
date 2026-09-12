<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const todos = ref(
    JSON.parse(localStorage.getItem('todos')) || []
)

const chosenTodos = ref([])
const selectedTodo = ref(null)
const lockedIn = ref(false)

function chooseTodos() {
    chosenTodos.value = todos.value
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
}

function selectTodo(todo) {
    selectedTodo.value = todo
}

function lockIn() {
    lockedIn.value = true
}

function finishTodo() {
    todos.value = todos.value.filter(todo => todo !== selectedTodo.value)

    localStorage.setItem('todos', JSON.stringify(todos.value))

    router.push('/')
}

chooseTodos()
</script>

<template>
    <h1>Choose one</h1>

    <div v-if="!lockedIn">

        <div
            v-for="todo in chosenTodos"
            :key="todo.title"
            @click="selectTodo(todo)"
        >
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.time }} minutes</p>
        </div>

        <button v-if="selectedTodo" @click="lockIn">
            LOCK IN
        </button>

    </div>

    <div v-else>
        <h2>{{ selectedTodo.title }}</h2>
        <p>{{ selectedTodo.time }} minutes</p>

        <button @click="finishTodo">
            FINISHED
        </button>
    </div>
</template>