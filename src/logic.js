import * as factory from './factory';
const todoList = []

export function addTodo(title, description, dueDate, priority, project) {

    let todo = new factory.todoItem(title, description, dueDate, priority, project)
    todoList.push(todo)
}

export function removeTodo(todo) {
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === todo.id) {
            todoList.splice(i, 1);
            return
        }
    }    
}

export function changePriority(todo, priority) {

    let change = todoList.find(x => x.id === todo.id)
    
    change.priority = priority;

}

export function changeDescription(todo, description) {

    let change = todoList.find(x => x.id === todo.id)
    change.description = description;

}

export function changeTitle(todo, title) {

    let change = todoList.find(x => x.id === todo.id)
    change.title = title;

}

export function changeProjectId(todo, id) {
    let change = todoList.find(x => x.id === todo.id)
    change.projectId = id

}

const projectList = []

export function addProject(title, description, dueDate, priority) {

    let project = new factory.project(title, description, dueDate, priority)
    projectList.push(project)
}

export function removeProject(project) {
    
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === project.id) {
            projectList.splice(i, 1);
            return
        }
    }    
}

export function changePriorityProject(project, priority) {

    let change = projectList.find(x => x.id === project.id)
    
    change.priority = priority;

}

export function changeDescriptionProject(project, description) {

    let change = projectList.find(x => x.id === project.id)
    change.description = description;

}

export function changeTitleProject(project, title) {

    let change = todoList.find(x => x.id === project.id)
    change.title = title;

}


export {todoList, projectList}