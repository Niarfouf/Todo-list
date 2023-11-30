import Container from "./containerProjects"

export default function createContainer(projectsArray) {
    const container = new Container()
    if (projectsArray.length === 0) {
        projectsArray = [{name: "general", index: 0, tasks: []}]
    }
    projectsArray.forEach( (e, i) => {
        container.addProject(e.name)
        e.tasks.forEach(ele => {
            container.projects[i].addTask(ele.title, ele.description, ele.dueDate, ele.priority)
        })
    })
    return container
}
