import saveData from "./saveData"

export default function addProjectFunction(form, container) {
    container.addProject(form[0].value)
    saveData(container)
}