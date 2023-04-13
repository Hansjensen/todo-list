import * as factory from './factory';
import { pageTemplate, projectListRender, todoItemRender  } from "./DOMmodule";
import { allTodoListener, projectListener, todayListener,tomorrowListener, thisWeekListener, popUpListenerTodo, popUpListenerProject, submitTodoButton, submitProjectButton, stopFormRefresh, popUpCloseProjectListener, popUpCloseTodoListener, popUpDropdown, todoDeleteButtonListener, popUpCloseEditListener, submitEditForm} from "./listeners";
let todoList = []
let projectList = []
import { isToday, isTomorrow, parseISO, isThisWeek } from 'date-fns';
import { currentList } from './DOMmodule';

export function loadUp() {
    if (!localStorage.getItem('todoList')) {
        newUserLoad()
    } else {
       existingUserLoad()

    }
}

function newUserLoad() {
const running = new addTodo('Running', 'Run 45 minutes', '2023-03-01', 'High', 1);
const swimming = new addTodo('swimming', 'swim swim swim', '2023-03-02', 'Medium', 2)
const swimef = new addTodo('swimming', 'swim swim swim', '2023-04-02', 'Medium', 2)
const swimmfdfing = new addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 1)
const workout = new addProject('Workouts', 'my daily workouts', 'this week', 'Medium');
const worke = new addProject('neato', 'my daily workouts', 'this week', 'Medium');
const workdut = new addProject('Longer Title', 'my daily workouts', 'this week', 'Medium');
const wor33out = new addProject('shitts', 'my daily workouts', 'this week', 'Medium');

pageTemplate();
todoItemRender(todoList)
projectListRender()
allTodoListener()
projectListener()
todayListener()
tomorrowListener()
thisWeekListener()
popUpListenerTodo()
popUpListenerProject()
submitTodoButton()
submitProjectButton()
submitEditForm()
stopFormRefresh()
popUpDropdown()
popUpCloseProjectListener()
popUpCloseTodoListener()
popUpCloseEditListener()
}

function existingUserLoad() {

todoList = JSON.parse(localStorage.getItem('todoList'))

projectList =  JSON.parse(localStorage.getItem('projectList'))

pageTemplate();
todoItemRender(todoList)
projectListRender()
allTodoListener()
projectListener()
todayListener()
tomorrowListener()
thisWeekListener()
popUpListenerTodo()
popUpListenerProject()
submitTodoButton()
submitProjectButton()
submitEditForm()
stopFormRefresh()
popUpDropdown()
popUpCloseProjectListener()
popUpCloseTodoListener()
popUpCloseEditListener()
}

function saveTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

function saveProject() {
    localStorage.setItem('projectList', JSON.stringify(projectList))
}
export function addTodo(title, description, dueDate, priority, project) {

    let todo = new factory.todoItem(title, description, dueDate, priority, project)
    todoList.push(todo)
    saveTodo()
    
}

export function checkMarkTodo(id) {
    let change = todoList.find(x => x.id == id)
    
    change.checked = !change.checked;
    saveTodo()
    
}


export function removeTodo(todo) {
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == todo) {
            todoList.splice(i, 1);
            saveTodo()
            
        }
    }    
    
    for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].id == todo) {
            currentList.splice(i, 1);
            saveTodo()
            return;
        }
    }
    
}

export function changePriority(id, priority) {

    let change = todoList.find(x => x.id == id)
    
    change.priority = priority;
    saveTodo()

}

export function changeDescription(id, description) {

    let change = todoList.find(x => x.id === id)
    
    change.description = description;
    saveTodo()
    

}

export function changeTitle(todo, title) {

    let change = todoList.find(x => x.id === todo)
    
    change.title = title;
    saveTodo()
    

}

export function changeDueDate(id, date) {
    let change = todoList.find(x => x.id === id)
    change.dueDate = date;
    saveTodo()
}

export function changeProjectId(id, proId) {
    let change = todoList.find(x => x.id == id)
    change.projectId = proId
    saveTodo()

}



export function addProject(title, description, dueDate, priority) {

    let project = new factory.project(title, description, dueDate, priority)
    projectList.push(project)
    saveProject()
}

export function removeProject(project) {
    
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === project.id) {
            projectList.splice(i, 1);
            saveProject()
            return
        }
    }    
}

export function changePriorityProject(project, priority) {

    let change = projectList.find(x => x.id === project.id)
    
    change.priority = priority;
    saveProject()

}

export function changeDescriptionProject(project, description) {

    let change = projectList.find(x => x.id === project.id)
    change.description = description;
    saveProject()

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
    }  else if (x === 'edit') {
        popUp = document.getElementById('popUpEdit')
    }
    

    overlay.classList.toggle('active')
    popUp.classList.toggle('active')

}

export function dropdownClass() {
    let dropdown = document.getElementById('dropdown')

    dropdown.classList.toggle('show');

}



export {todoList, projectList}