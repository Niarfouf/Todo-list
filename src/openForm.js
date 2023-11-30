export default function openForm(container) {
    const selectProject = document.querySelector("#projectSelect")
    const formDiv = document.querySelector("#popup-Todo")
    const form = document.querySelector(".form-todo")
    form.reset()
    selectProject.innerText = ""
    container.projects.forEach( (e) => {
        const choice = document.createElement("option")
        choice.innerText = e.name
        choice.value = e.name
        selectProject.appendChild(choice)
    })
    formDiv.style.display = "block";
}

