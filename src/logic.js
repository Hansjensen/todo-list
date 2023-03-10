import * as factory from './factory';
const todoList = [{id: 1, title: 'Hello World', description: 'coolshit', dueDate: '2023-03-01', priority: 'High', checked: true, projectId: 1}]
import { isToday, isTomorrow, parseISO, isThisWeek } from 'date-fns';

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

export function listByToday() {

    let today = todoList.filter(y => isToday(parseISO(y.dueDate))) 
    return today

}

export function listByTomorrow() {
    let tomorrow = todoList.filter(y => isTomorrow(parseISO(y.dueDate))) 
    return tomorrow
}

export function listByThisWeek() {
    let tomorrow = todoList.filter(y => isThisWeek(parseISO(y.dueDate))) 
    return tomorrow
}

export function listByProject(x) {

    let list = todoList.filter(y => y.projectId == x)
    return list
    
}

export function popUpClass(x) {
    let popUp;
    let overlay = document.getElementById('overlay')
    if (x === 'project'){
        popUp = document.getElementById('popUpProject')
    } else if (x === 'todo'){
        popUp = document.getElementById('popUpTodo')
    } 
    

    overlay.classList.toggle('active')
    popUp.classList.toggle('active')

}

export function dropdownClass() {
    let dropdown = document.getElementById('dropdown')

    dropdown.classList.toggle('show');

}

export {todoList, projectList}