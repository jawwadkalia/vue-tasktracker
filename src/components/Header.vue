<template>
    <header>
        <h1>Task Tracker</h1>
        <Button :text="showAddTask ? 'Hide Form' : 'Add Task'" :type="showAddTask ? 'btn btn-danger' : 'btn btn-success'" @toggle-task-form="$emit('toggle-task-form')" />
    </header>
</template>

<script>
    import Button from './Button.vue'

    export default{
        name: 'Header',
        components: {
            Button,
        },
        props:{
            showAddTask: Boolean
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>