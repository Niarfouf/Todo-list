import Task from "./tasks"
export default class Project {
    constructor(name, index) {
        this.name = name
        this.index = index
        this.tasks = []
    }
   
    addTask(title, description, dueDate, priority) {
        this.tasks.push(new Task(title, description, dueDate, priority, this.tasks.length))
    }
    deleteTask(task) {
        this.tasks.splice(task.index, 1)
    }
}