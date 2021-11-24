<template>
    <button @click="onClick()" :class="type">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            type: String,
        },
        methods: {
            onClick(){
                this.$emit('toggle-task-form',)
            }
        }
    }
</script>