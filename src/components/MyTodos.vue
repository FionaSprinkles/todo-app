<script setup>
import { ref } from 'vue'

const todos = ref(
    JSON.parse(localStorage.getItem('todos')) || [] //import from AddTodo.vue
)

function deleteTodo(todo) {
    todos.value = todos.value.filter(item => item !== todo)

    localStorage.setItem('todos', JSON.stringify(todos.value))
}

const editingTodo = ref(null)

const editTitle = ref('')
const editDescription = ref('')
const editTime = ref('')
const editDeadline = ref('')
const editRepeat = ref('')
const editRepeatSchedule = ref('')

function editTodo(todo) {
    editingTodo.value = todo

    editTitle.value = todo.title
    editDescription.value = todo.description
    editTime.value = todo.time
    editDeadline.value = todo.deadline
    editRepeat.value = todo.repeat
    editRepeatSchedule.value = todo.repeatSchedule
}

function saveTodo() {
    editingTodo.value.title = editTitle.value
    editingTodo.value.description = editDescription.value
    editingTodo.value.time = editTime.value
    editingTodo.value.deadline = editDeadline.value
    editingTodo.value.repeat = editRepeat.value
    editingTodo.value.repeatSchedule = editRepeatSchedule.value

    localStorage.setItem('todos', JSON.stringify(todos.value))

    editingTodo.value = null
}
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

             <button @click="editTodo(todo)">
                Edit
            </button>

            <button @click="deleteTodo(todo)">
                Delete
            </button>


            <!-- The same form as in add todo-->
            <div v-if="editingTodo === todo">

                <h3>Edit Todo</h3>

                <label for="editTitle">Title</label>
                <input
                    id="editTitle"
                    type="text"
                    v-model="editTitle"
                >

                <label for="editDescription">Description</label>
                <textarea
                    id="editDescription"
                    v-model="editDescription"
                ></textarea>

                <label for="editTime">
                    Estimated time to finish task
                </label>

                <select
                    id="editTime"
                    v-model="editTime"
                >
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                </select>

                <label for="editDeadline">Deadline</label>

                <input
                    id="editDeadline"
                    type="date"
                    v-model="editDeadline"
                >

                <fieldset>
                    <legend>Repeat task?</legend>

                    <label>
                        <input
                            type="radio"
                            name="editRepeat"
                            value="yes"
                            v-model="editRepeat"
                        >
                        Yes
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="editRepeat"
                            value="no"
                            v-model="editRepeat"
                        >
                        No
                    </label>
                </fieldset>

                <div v-if="editRepeat === 'yes'">

                    <label for="editRepeatSchedule">
                        Schedule for repeating
                    </label>

                    <select
                        id="editRepeatSchedule"
                        v-model="editRepeatSchedule"
                    >
                        <option value="daily">Every day</option>
                        <option value="weekly">Every week</option>
                        <option value="monthly">Every month</option>
                        <option value="yearly">Every year</option>
                    </select>

                </div>

                <button @click="saveTodo">
                    Save
                </button>
            </div>
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