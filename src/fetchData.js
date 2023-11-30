export default function fetchData() {
    const projectsArray = []
    const keys = Object.keys(window.localStorage)
    for (let i = 0; i < keys.length; i++) {
        projectsArray.push(JSON.parse(window.localStorage.getItem(keys[i])))
    }
    return projectsArray
}