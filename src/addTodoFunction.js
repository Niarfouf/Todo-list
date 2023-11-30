import saveData from "./saveData"

export default function addFunction(form, container) {

    
    container.projects.forEach( e => {
        if (e.name === form[4].value) {
            e.addTask(form[0].value, form[1].value, form[2].value, form[3].value)
        }
    })   
    saveData(container)
}