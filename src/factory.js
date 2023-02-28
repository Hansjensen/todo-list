let idNum = 0

export function todoItem(title, description, dueDate, priority, project) {
    
    
    const todo = {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        checked: false,
    }
    if (project) {
        
        todo.projectId = project

    }
    idNum++
    return todo

}

export function project(title, description, dueDate, priority) {
    const project = {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
    idNum++;
    return project
}
