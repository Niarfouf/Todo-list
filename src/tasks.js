export default class Task {
    constructor(title, description, dueDate, priority, index) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.index = index
        this.checked = false
    }
}