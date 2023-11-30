import Project from "./projects"
export default class Container {
    constructor() {
        this.projects = []
    }

    addProject(name) {
        this.projects.push(new Project(name, this.projects.length))
    }

    deleteProject(project) {
            this.projects.splice(project.index, 1)
            if (project.tasks.length !== 0) {
                project.tasks.forEach(e => {
                    this.projects[0].tasks.push(e)
                });
                
            }
    }
}