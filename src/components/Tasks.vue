<template>
    <div id="tasklist">
        <div @dblclick="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'task reminder' : 'task']" :key="task.id" v-for="task in tasks">
            <p class="fs-5 p-0 m-0">
                {{ task.text }}
                <i @click="onDelete(task.id)" class="bi bi-x"></i>
            </p>
            <p class="small p-0 m-0">{{ task.day }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Tasks',
        props: {
            tasks: Array,
        },
        methods: {
            onDelete(id){
               this.$emit('delete-task',id)
            }
        }
    }
</script>