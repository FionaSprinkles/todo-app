<script setup>
    import { ref } from 'vue'

    const loadTodos = () => {
        try {
            return JSON.parse(localStorage.getItem('todos') ?? '[]')
            } catch {
            return []
        }
    }

    const todos = ref(loadTodos())

    const title = ref('')
    const description = ref('')
    const time = ref('')
    const deadline = ref('')
    const repeat = ref('')
    const repeatSchedule = ref('')
    const taskList = ref('')

    function addTodo() {
        todos.value.push({ // add to the todos array
            title: title.value, //add title value to new todos object
            description: description.value,
            time: time.value,
            deadline: deadline.value,
            repeat: repeat.value,
            repeatSchedule: repeatSchedule.value,
            taskList: taskList.value

        })

        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

</script>

<template>

    <form @submit.prevent="addTodo">

        <input id="title" type="text" placeholder="Title" v-model="title">

        <textarea
        id="description" placeholder="Description" v-model="description">
        </textarea>

        <label for="time">Estimated time to finish task</label>
        <select id="time" v-model="time">
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
        </select>

        <label for="deadline">Deadline</label>
        <input id="deadline" type="date" v-model="deadline">

            <fieldset>
        <legend>Repeat task?</legend>

        <label>
            <input type="radio" name="repeat" value="yes" v-model="repeat">
            Yes
        </label>

        <label>
            <input type="radio" name="repeat" value="no" v-model="repeat">
            No
        </label>
        </fieldset>

        <div v-if="repeat === 'yes'"> <!--"===" both value and datatype MUST be the same -->
            <select id="repeatSchedule" v-model="repeatSchedule">
                <option value="daily">Every day</option>
                <option value="weekly">Every week</option>
                <option value="monthly">Every month</option>
                <option value="yearly">Every year</option>
            </select>
        </div>

        <select id="taskList" v-model="taskList">
            <option value="">Choose a list</option>
            <option value="chores">Everyday chores</option>
            <option value="school">School</option>
            <option value="newList">Make new list</option>
        </select>

        <button type="submit">Add task</button>

    
    </form>
</template>

<style scoped>

form {
    width: 500px;
    max-width: 90%;
    margin: 30px auto;
    padding: 20px;
    background: purple;
    color: white;
    border-radius: 10px;
}

input,
textarea,
select {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

button {
    padding: 10px 20px;
    background: #5027b1;
    color: white;
    border: none;
    border-radius: 8px;
}

fieldset label {
    display: inline;
}
fieldset input {
    width: auto;
    margin-bottom: 0;
}

</style>