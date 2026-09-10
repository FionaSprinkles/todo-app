<template>

    <form>
        <input id="title" type="text" placeholder="Title">

        <textarea
        id="description" placeholder="Description">
        </textarea>

        <label for="time">Estimated time to finish task</label>
        <select id="time" placeholder="Estimated time to finish task">
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">60 minutes</option>
        </select>

        <label for="deadline">Deadline</label>
        <input id="deadline" type="date">

            <fieldset>
        <legend>Repeat task?</legend>

        <label>
            <input type="radio" name="repeat" value="yes">
            Yes
        </label>

        <label>
            <input type="radio" name="repeat" value="no">
            No
        </label>
        </fieldset>

        <select id="task-list">
            <option value="">Choose a list</option>
            <option value="chores">Everyday chores</option>
            <option value="school">School</option>
            <option value="newList">Make new list</option>
        </select>

        <button type="submit">Add task</button>

    
    </form>
</template>