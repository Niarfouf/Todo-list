import displayTasks from "./displayTasks"
import saveData from "./saveData"


export default function(container) {
    const projectsDiv = document.querySelector("#projectsDiv")
    projectsDiv.textContent = ""
    container.projects.forEach( (e) => {
        const newDiv = document.createElement("div")
        const project = document.createElement("button")
        const deleteButton = document.createElement("button")
        project.textContent = e.name
        deleteButton.textContent = "X"
        project.addEventListener("click", () => {
            displayTasks(e)
        })
        deleteButton.addEventListener("click", () => {
            container.deleteProject(e)
            saveData(container)
        })
        newDiv.appendChild(project)
        if (e.name !== "general") {
            newDiv.appendChild(deleteButton)
        }
        
        projectsDiv.appendChild(newDiv)
    })
      
}
