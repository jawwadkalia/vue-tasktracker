<template>
  <div id="main" class="container my-3 rounded border">
      <Header @toggle-task-form="toggleForm" :showAddTask="showAddTask" />
      <div v-if="showAddTask">
          <TaskForm @add-task="addTask" />
      </div>
      <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import TaskForm from './components/TaskForm.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Tasks,
        TaskForm,
        Footer
    },
    data(){
        return{
            tasks: [],
            showAddTask: false
        }
    },
    methods: {
        toggleForm(){
            this.showAddTask = !this.showAddTask
        },
        async addTask(task){
            const res = await fetch('http://localhost:5000/tasks',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task)
            })

            const data = await res.json()

            this.tasks = [...this.tasks, data]
        },
        async deleteTask(id){
            if(confirm('Are you sure?')){
                const res = await fetch(`http://localhost:5000/tasks/${id}`,{
                    method: 'DELETE'
                })

                res.status === 200 ? (this.tasks = this.tasks.filter((task)=>task.id != id)) : alert('Cannot delete task')

            }
        },
        async toggleReminder(id){
            const taskToggle = await this.fetchTask(id)
            const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

            const res = await fetch(`http://localhost:5000/tasks/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updateTask)
            })

            const data = await res.json()

            this.tasks = this.tasks.map((task)=>task.id == id ? {...task, reminder: data.reminder} : task)
        },
        async fetchTasks(){
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            return data
        },
        async fetchTask(id){
            const res = await fetch(`http://localhost:5000/tasks/${id}`)
            const data = await res.json()
            return data
        }
    },
    async created(){
        this.tasks = await this.fetchTasks()
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#main {
  background: #fff;
}

#tasklist {
    border-top:1px solid #f4f4f4;
    margin-bottom: 10px;
}

.task {
    background: #f4f4f4;
    margin: 5px;
    padding:10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}

</style>
