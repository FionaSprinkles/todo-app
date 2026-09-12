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
        class="todo-card"
        :class="{ selected: selectedTodo === todo }"
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

<style scoped>

h1 {
    text-align: center;
}

.todo-card {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 12px;
}

.todo-card.selected {
    background-color: purple;
}

.todo-card h2 {
    margin: 0 0 10px;
}

.todo-card p {
    margin: 0;
}

button {
    display: block;
    margin: 20px auto;
    padding: 10px 25px;
    border: none;
    border-radius: 8px;
}

</style>