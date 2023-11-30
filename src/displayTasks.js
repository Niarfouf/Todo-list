export default function(project) {
    const tasksDiv = document.querySelector("#tasksDiv")
    tasksDiv.innerText = ""
    project.tasks.forEach( (e) => {
        const task = document.createElement("button")
        task.innerText = e.title + " " + e.description + " " + e.date
        tasksDiv.appendChild(task)
    })
}