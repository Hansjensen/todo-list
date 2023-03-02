"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["DOMmodule"],{

/***/ "./src/DOMmodule.js":
/*!**************************!*\
  !*** ./src/DOMmodule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageTemplate": () => (/* binding */ pageTemplate),
/* harmony export */   "projectListRender": () => (/* binding */ projectListRender),
/* harmony export */   "todoItemRender": () => (/* binding */ todoItemRender)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



function elementBuild (type, attributes, ...children) {

    const element = document.createElement(type)
    
    for (let key in attributes) {

        element.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child))
        }  else{
            element.appendChild(child)
        }
    })

    return element;
}

function pageTemplate() {
    const body = document.querySelector('body')
    const template =
    elementBuild('div', {'id' : 'wrapper'},
        elementBuild('header', {'id': 'header'}, 
            elementBuild('div', {'id': 'logoDiv'},
                elementBuild('h1', {'id': 'logo'}, "ODIN'S TODO")
            ),
            elementBuild('div', {'id': 'headerAddDiv'},
                elementBuild('button', {'id': 'headerAdd'}, '+'
                )
            )
        ),
        elementBuild('div', {'id' : 'sidebar'},
            elementBuild('div', {'id': 'staticLinks'},
                elementBuild('ul', {'id': 'staticList'},
                    elementBuild('li', {'id' : 'listHome'}, 
                        elementBuild('a', {'id' : 'linkHome'}, 'All Tasks')
                    ),
                    elementBuild('li', {'id' : 'listToday'}, 
                        elementBuild('a', {'id' : 'linkToday'}, 'Today')
                    ),
                    elementBuild('li', {'id' : 'listTomorrow'}, 
                        elementBuild('a', {'id' : 'linkTomorrow'}, 'Tomorrow')
                    ),
                    elementBuild('li', {'id' : 'listThisWeek'}, 
                        elementBuild('a', {'id' : 'linkThisWeek'}, 'This Week')
                    ),
                )
            ),
            elementBuild('p', {'id': 'projectsTitle'}, 'PROJECTS'),
            elementBuild('div', {'id': 'projectLinks'})
        ),
        elementBuild('div', {'id' : 'content'},
            elementBuild('div', {'id' : 'contentContainer'},
            )
        ),
    );
    body.appendChild(template)

}


function todoItemRender(list) {
    let container = document.getElementById('contentContainer')
    container.textContent = ''
  
    for (let i = 0 ; i < list.length; i++) {
        
        let build =
        elementBuild('div', {'class':'todoItem'}, 
                    checkboxBuilder(list[i]),
                    elementBuild('h3', {'class' : 'title', 'id' : 'title_' + list[i].id}, list[i].title),
                    selectPriorityBuilder(list[i]),
                    elementBuild('button', {'class' : 'todoEdit', 'id' : 'edit_' + list[i].id}, 'Edit'),
                    elementBuild('button', {'class' : 'todoDelete', 'id' : 'delete_' + list[i].id}, 'Delete')


        )

        container.appendChild(build)
        
        
    }


}

function checkboxBuilder(todo) {
    let checkbox = elementBuild('input', {'type' : 'checkbox'})
    if (todo.checked) {
        checkbox.checked = true;
        return checkbox;
    } else {
        checkbox.checked = false;
        return checkbox;
    }
}

function selectPriorityBuilder(todo) {

    let build = elementBuild('select', {'name' : 'priority'},
                        elementBuild('option', {'value' : 'Low', 'id': 'Low'}, 'Low'),
                        elementBuild('option', {'value' : 'Medium', 'id' : 'Medium'}, 'Medium'),
                        elementBuild('option', {'value' : 'High', 'id' : 'High'}, 'High')
                    )
    build.value = todo.priority
    return build

}

function projectListRender() {

    let container = document.getElementById('projectLinks')
    let list = elementBuild('ul', {'id': 'projectList'},)

    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
        let build =
        elementBuild('li', {'class' : 'projectListItem'}, 
                        elementBuild('a', {'class' : 'linkProject', 'id' : 'p' + _logic__WEBPACK_IMPORTED_MODULE_0__.projectList[i].id}, _logic__WEBPACK_IMPORTED_MODULE_0__.projectList[i].title)
                    )
        list.appendChild(build)
    }
    container.appendChild(list)

}





/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
let idNum = 0

function todoItem(title, description, dueDate, priority, project) {
    
    
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
let projId = 1
function project(title, description, dueDate, priority) {
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


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "changeDescription": () => (/* binding */ changeDescription),
/* harmony export */   "changeDescriptionProject": () => (/* binding */ changeDescriptionProject),
/* harmony export */   "changePriority": () => (/* binding */ changePriority),
/* harmony export */   "changePriorityProject": () => (/* binding */ changePriorityProject),
/* harmony export */   "changeProjectId": () => (/* binding */ changeProjectId),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "changeTitleProject": () => (/* binding */ changeTitleProject),
/* harmony export */   "listByDate": () => (/* binding */ listByDate),
/* harmony export */   "listByProject": () => (/* binding */ listByProject),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");

const todoList = [{id: 1, title: 'Hello World', description: 'coolshit', dueDate: '03/29/23', priority: 'High', checked: true, projectId: 1}]

function addTodo(title, description, dueDate, priority, project) {

    let todo = new _factory__WEBPACK_IMPORTED_MODULE_0__.todoItem(title, description, dueDate, priority, project)
    todoList.push(todo)
}

function removeTodo(todo) {
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === todo.id) {
            todoList.splice(i, 1);
            return
        }
    }    
}

function changePriority(todo, priority) {

    let change = todoList.find(x => x.id === todo.id)
    
    change.priority = priority;

}

function changeDescription(todo, description) {

    let change = todoList.find(x => x.id === todo.id)
    change.description = description;

}

function changeTitle(todo, title) {

    let change = todoList.find(x => x.id === todo.id)
    change.title = title;

}

function changeProjectId(todo, id) {
    let change = todoList.find(x => x.id === todo.id)
    change.projectId = id

}

const projectList = []

function addProject(title, description, dueDate, priority) {

    let project = new _factory__WEBPACK_IMPORTED_MODULE_0__.project(title, description, dueDate, priority)
    projectList.push(project)
}

function removeProject(project) {
    
    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].id === project.id) {
            projectList.splice(i, 1);
            return
        }
    }    
}

function changePriorityProject(project, priority) {

    let change = projectList.find(x => x.id === project.id)
    
    change.priority = priority;

}

function changeDescriptionProject(project, description) {

    let change = projectList.find(x => x.id === project.id)
    change.description = description;

}

function changeTitleProject(project, title) {

    let change = todoList.find(x => x.id === project.id)
    change.title = title;

}

function listByDate(x) {

    let today = new Date 

}

function listByProject(x) {

    let list = todoList.filter(y => y.projectId == x)
    return list
    
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMmodule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVPOztBQUVQOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9sb2dpY1wiXG5cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgICAgIH0gIGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCB0ZW1wbGF0ZSA9XG4gICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICd3cmFwcGVyJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgeydpZCc6ICdoZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnbG9nb0Rpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDEnLCB7J2lkJzogJ2xvZ28nfSwgXCJPRElOJ1MgVE9ET1wiKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdoZWFkZXJBZGREaXYnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnOiAnaGVhZGVyQWRkJ30sICcrJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdzaWRlYmFyJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnc3RhdGljTGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ3VsJywgeydpZCc6ICdzdGF0aWNMaXN0J30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0SG9tZSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtIb21lJ30sICdBbGwgVGFza3MnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRvZGF5J30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RvZGF5J30sICdUb2RheScpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VG9tb3Jyb3cnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVG9tb3Jyb3cnfSwgJ1RvbW9ycm93JylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUaGlzV2Vlayd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUaGlzV2Vlayd9LCAnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgeydpZCc6ICdwcm9qZWN0c1RpdGxlJ30sICdQUk9KRUNUUycpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ3Byb2plY3RMaW5rcyd9KVxuICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnQnfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnY29udGVudENvbnRhaW5lcid9LFxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbVJlbmRlcihsaXN0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJylcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICBcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOid0b2RvSXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hCdWlsZGVyKGxpc3RbaV0pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gzJywgeydjbGFzcycgOiAndGl0bGUnLCAnaWQnIDogJ3RpdGxlXycgKyBsaXN0W2ldLmlkfSwgbGlzdFtpXS50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFByaW9yaXR5QnVpbGRlcihsaXN0W2ldKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2NsYXNzJyA6ICd0b2RvRWRpdCcsICdpZCcgOiAnZWRpdF8nICsgbGlzdFtpXS5pZH0sICdFZGl0JyksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYnV0dG9uJywgeydjbGFzcycgOiAndG9kb0RlbGV0ZScsICdpZCcgOiAnZGVsZXRlXycgKyBsaXN0W2ldLmlkfSwgJ0RlbGV0ZScpXG5cblxuICAgICAgICApXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cbn1cblxuZnVuY3Rpb24gY2hlY2tib3hCdWlsZGVyKHRvZG8pIHtcbiAgICBsZXQgY2hlY2tib3ggPSBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdjaGVja2JveCd9KVxuICAgIGlmICh0b2RvLmNoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByaW9yaXR5QnVpbGRlcih0b2RvKSB7XG5cbiAgICBsZXQgYnVpbGQgPSBlbGVtZW50QnVpbGQoJ3NlbGVjdCcsIHsnbmFtZScgOiAncHJpb3JpdHknfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTG93JywgJ2lkJzogJ0xvdyd9LCAnTG93JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ29wdGlvbicsIHsndmFsdWUnIDogJ01lZGl1bScsICdpZCcgOiAnTWVkaXVtJ30sICdNZWRpdW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnSGlnaCcsICdpZCcgOiAnSGlnaCd9LCAnSGlnaCcpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICBidWlsZC52YWx1ZSA9IHRvZG8ucHJpb3JpdHlcbiAgICByZXR1cm4gYnVpbGRcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdExpc3RSZW5kZXIoKSB7XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaW5rcycpXG4gICAgbGV0IGxpc3QgPSBlbGVtZW50QnVpbGQoJ3VsJywgeydpZCc6ICdwcm9qZWN0TGlzdCd9LClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJ1aWxkID1cbiAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnY2xhc3MnIDogJ3Byb2plY3RMaXN0SXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnY2xhc3MnIDogJ2xpbmtQcm9qZWN0JywgJ2lkJyA6ICdwJyArIHByb2plY3RMaXN0W2ldLmlkfSwgcHJvamVjdExpc3RbaV0udGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZClcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG5cbn1cblxuXG5cbiIsImxldCBpZE51bSA9IDBcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBcbiAgICBcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBcbiAgICAgICAgdG9kby5wcm9qZWN0SWQgPSBwcm9qZWN0XG5cbiAgICB9XG4gICAgaWROdW0rK1xuICAgIHJldHVybiB0b2RvXG5cbn1cbmxldCBwcm9qSWQgPSAxXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgaWQ6IHByb2pJZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG4gICAgcHJvaklkKys7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbiIsImltcG9ydCAqIGFzIGZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5JztcbmNvbnN0IHRvZG9MaXN0ID0gW3tpZDogMSwgdGl0bGU6ICdIZWxsbyBXb3JsZCcsIGRlc2NyaXB0aW9uOiAnY29vbHNoaXQnLCBkdWVEYXRlOiAnMDMvMjkvMjMnLCBwcmlvcml0eTogJ0hpZ2gnLCBjaGVja2VkOiB0cnVlLCBwcm9qZWN0SWQ6IDF9XVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kbyA9IG5ldyBmYWN0b3J5LnRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpXG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0xpc3RbaV0uaWQgPT09IHRvZG8uaWQpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHRvZG8sIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgXG4gICAgY2hhbmdlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKHRvZG8sIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgY2hhbmdlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlKHRvZG8sIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByb2plY3RJZCh0b2RvLCBpZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UucHJvamVjdElkID0gaWRcblxufVxuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBwcm9qZWN0ID0gbmV3IGZhY3RvcnkucHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmlkID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eVByb2plY3QocHJvamVjdCwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb25Qcm9qZWN0KHByb2plY3QsIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gcHJvamVjdExpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlUHJvamVjdChwcm9qZWN0LCB0aXRsZSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIGNoYW5nZS50aXRsZSA9IHRpdGxlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlEYXRlKHgpIHtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlIFxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlQcm9qZWN0KHgpIHtcblxuICAgIGxldCBsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4geS5wcm9qZWN0SWQgPT0geClcbiAgICByZXR1cm4gbGlzdFxuICAgIFxufVxuZXhwb3J0IHt0b2RvTGlzdCwgcHJvamVjdExpc3R9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9