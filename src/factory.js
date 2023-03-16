let idNum = 0

export function todoItem(title, description, dueDate, priority, project) {
    
    
    let todo = {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        checked: false,
        projectId: 0
    }
    if (project) {
        
        todo.projectId = project

    } else {
        todo.projectId = 0
    }
    idNum++
    return todo

}
let projId = 1
export function project(title, description, dueDate, priority) {
    const project = {
        id: projId,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
    projId++;
    return project
}
