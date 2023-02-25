
let idNum = 0

export function todoItem(title, description, dueDate, priority) {
    
    
    const todo = {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
    idNum++
    return todo

}

export function project(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        todoList: []
    }
}
