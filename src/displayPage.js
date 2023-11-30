import displayProjects from "./displayProjects";
import openProject from "./openProject"
import fetchData from "./fetchData";
import createContainer from "./createContainer";
import addTodoFunction from "./addTodoFunction"
import addProjectFunction from "./addProjectFunction";
import openForm from "./openForm"
export default function displayPage() {
    
    const projectsArray = fetchData()
    const container = createContainer(projectsArray)
        
    
    displayProjects(container)
const openFormTodo = document.querySelector("#addTask")
const openFormProject = document.querySelector("#createProject")
openFormTodo.addEventListener("click", () => {
    openForm(container)
})
openFormProject.addEventListener("click", () => {
    openProject()
})


const cancelButton = document.querySelector("#cancel")
const addTodo = document.querySelector(".form-todo")
const cancelButton2 = document.querySelector("#cancel2")
const addProject = document.querySelector(".form-project")

function closeForm() {
    document.querySelector("#popup-Todo").style.display = "none";
    document.querySelector("#popup-Project").style.display = "none";
}

addTodo.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodoFunction(e.target, container)
    closeForm()
})
addProject.addEventListener("submit", (e) => {
    e.preventDefault()
    addProjectFunction(e.target, container)
    closeForm()
})
cancelButton.addEventListener("click", closeForm)
cancelButton2.addEventListener("click", closeForm)
}