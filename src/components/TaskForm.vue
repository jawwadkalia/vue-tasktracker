<template>

    <div class="row justify-content-center my-3">
        <div class="col-6">
            <h2 class="fs-5 text-center">Add Task</h2>
            <form class="form-control" @submit="onSubmit">
                <div class="form-control form-control-check">
                    <label>Task</label>
                    <input type="text" name="text" v-model="text">
                </div>
                <div class="form-control form-control-check">
                    <label>Day</label>
                    <input type="text" name="day" v-model="day">
                </div>
                <div class="form-control form-control-check">
                    <label>Reminder</label>
                    <input type="checkbox" name="reminder" v-model="reminder">
                </div>
                <div class="form-control form-control-check">
                    <input type="submit" class="btn btn-success" value="Add Task">
                </div>

            </form>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'TaskForm',
        data() {
            return{
                text: '',
                day: '',
                reminder: false,
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                if(!this.text){
                    alert('Please add task to proceed')
                }

                const newTask = {
                    //id: Math.floor(Math.random()*100),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                this.$emit('add-task', newTask)

                //console.log(newTask)

                this.text = ''
                this.day = ''
                this.reminder = false

            }
        }
    }
</script>

<style scoped>
    .form-control {border: none}
    .form-control-check {display: flex; align-items: center; justify-content: space-between}
    .form-control label {display: block}
    .form-control-check label {flex: 1;}
    .form-control-check input {flex: 2;  height: 20px;}
    .form-control input {width: 100%; padding: 3px 7px; height:30px}
</style>