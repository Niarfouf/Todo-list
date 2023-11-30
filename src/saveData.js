import displayProjects from "./displayProjects"
import displayTasks from "./displayTasks"

export default function saveData(container) {
    window.localStorage.clear()
    container.projects.forEach( (e, i) => {
        window.localStorage.setItem(i, JSON.stringify(e))
    })
    displayProjects(container)
    displayTasks(container.projects[0])
}