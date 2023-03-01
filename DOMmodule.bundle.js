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

function todoItemRender() {
    let container = document.getElementById('contentContainer')
    for (let todo in _logic__WEBPACK_IMPORTED_MODULE_0__.todoList) {
        
        let build =
        elementBuild('div', {'class':'todoItem'}, 
                    checkboxBuilder(todo),
                    elementBuild('h3', {'class' : 'title'}, todo.title),
                    elementBuild('select', {'name' : 'priority'},
                        elementBuild('option', {'value' : 'Low'}, 'Low'),
                        elementBuild('option', {'value' : 'Medium'}, 'Medium'),
                        elementBuild('option', {'value' : 'High'}, 'High')
                    ),
                    elementBuild('button', {'class' : 'todoEdit'}, 'Edit'),
                    elementBuild('button', {'class' : 'todoDelete'}, 'Delete')


        )

        container.appendChild(build)
        
        
    }


}

function checkboxBuilder(todo) {
    let checkbox = elementBuild('input', {'type' : 'checkbox'})
    if (todo.checked) {
        return checkbox.checked = true;
    } else {
        return checkbox.checked = false;
    }
    
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

function project(title, description, dueDate, priority) {
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
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");

const todoList = [{id: 1, title: 'Hello World', description: 'coolshit', dueDate: '03/29/23', priority: 'High', checked: false, projectId: 1}]

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMmodule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NbW9kdWxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7OztBQUdsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDLGdDQUFnQyxlQUFlO0FBQy9DLGlDQUFpQyxnQkFBZ0I7QUFDakQsb0NBQW9DLGFBQWE7QUFDakQ7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3RELHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QyxpQ0FBaUMsb0JBQW9CO0FBQ3JELG9DQUFvQyxtQkFBbUI7QUFDdkQsd0NBQXdDLGtCQUFrQjtBQUMxRCwyQ0FBMkMsa0JBQWtCO0FBQzdEO0FBQ0Esd0NBQXdDLG1CQUFtQjtBQUMzRCwyQ0FBMkMsbUJBQW1CO0FBQzlEO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RCwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RCwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUMsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0EscUJBQXFCLDRDQUFRO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CO0FBQ2hEO0FBQ0Esd0NBQXdDLGtCQUFrQjtBQUMxRCw0Q0FBNEMsb0JBQW9CO0FBQ2hFLGdEQUFnRCxnQkFBZ0I7QUFDaEUsZ0RBQWdELG1CQUFtQjtBQUNuRSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRSw0Q0FBNEMsdUJBQXVCOzs7QUFHbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsMENBQTBDLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNxQztBQUNyQyxtQkFBbUIsMEhBQTBIOztBQUV0STs7QUFFUCxtQkFBbUIsOENBQWdCO0FBQ25DO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVPOztBQUVQLHNCQUFzQiw2Q0FBZTtBQUNyQztBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tIFwiLi9sb2dpY1wiXG5cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikge1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgICAgIH0gIGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCB0ZW1wbGF0ZSA9XG4gICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICd3cmFwcGVyJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgeydpZCc6ICdoZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnbG9nb0Rpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDEnLCB7J2lkJzogJ2xvZ28nfSwgXCJPRElOJ1MgVE9ET1wiKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdoZWFkZXJBZGREaXYnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnaWQnOiAnaGVhZGVyQWRkJ30sICcrJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdzaWRlYmFyJ30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnc3RhdGljTGlua3MnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ3VsJywgeydpZCc6ICdzdGF0aWNMaXN0J30sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0SG9tZSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtIb21lJ30sICdBbGwgVGFza3MnKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRvZGF5J30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RvZGF5J30sICdUb2RheScpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VG9tb3Jyb3cnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVG9tb3Jyb3cnfSwgJ1RvbW9ycm93JylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUaGlzV2Vlayd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUaGlzV2Vlayd9LCAnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdwJywgeydpZCc6ICdwcm9qZWN0c1RpdGxlJ30sICdQUk9KRUNUUycpLFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ3Byb2plY3RMaW5rcyd9KVxuICAgICAgICApLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnQnfSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnY29udGVudENvbnRhaW5lcid9LFxuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW1SZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJylcbiAgICBmb3IgKGxldCB0b2RvIGluIHRvZG9MaXN0KSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnY2xhc3MnOid0b2RvSXRlbSd9LCBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hCdWlsZGVyKHRvZG8pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gzJywgeydjbGFzcycgOiAndGl0bGUnfSwgdG9kby50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnfSwgJ0xvdycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdNZWRpdW0nfSwgJ01lZGl1bScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdIaWdoJ30sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2NsYXNzJyA6ICd0b2RvRWRpdCd9LCAnRWRpdCcpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnY2xhc3MnIDogJ3RvZG9EZWxldGUnfSwgJ0RlbGV0ZScpXG5cblxuICAgICAgICApXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cbn1cblxuZnVuY3Rpb24gY2hlY2tib3hCdWlsZGVyKHRvZG8pIHtcbiAgICBsZXQgY2hlY2tib3ggPSBlbGVtZW50QnVpbGQoJ2lucHV0Jywgeyd0eXBlJyA6ICdjaGVja2JveCd9KVxuICAgIGlmICh0b2RvLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIFxufVxuXG4iLCJsZXQgaWROdW0gPSAwXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgXG4gICAgXG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgaWQ6IGlkTnVtLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgXG4gICAgICAgIHRvZG8ucHJvamVjdElkID0gcHJvamVjdFxuXG4gICAgfVxuICAgIGlkTnVtKytcbiAgICByZXR1cm4gdG9kb1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgfVxuICAgIGlkTnVtKys7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbiIsImltcG9ydCAqIGFzIGZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5JztcbmNvbnN0IHRvZG9MaXN0ID0gW3tpZDogMSwgdGl0bGU6ICdIZWxsbyBXb3JsZCcsIGRlc2NyaXB0aW9uOiAnY29vbHNoaXQnLCBkdWVEYXRlOiAnMDMvMjkvMjMnLCBwcmlvcml0eTogJ0hpZ2gnLCBjaGVja2VkOiBmYWxzZSwgcHJvamVjdElkOiAxfV1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXG4gICAgbGV0IHRvZG8gPSBuZXcgZmFjdG9yeS50b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KVxuICAgIHRvZG9MaXN0LnB1c2godG9kbylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8odG9kbykge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLmlkID09PSB0b2RvLmlkKSB7XG4gICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eSh0b2RvLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSB0b2RvLmlkKVxuICAgIFxuICAgIGNoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXNjcmlwdGlvbih0b2RvLCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSB0b2RvLmlkKVxuICAgIGNoYW5nZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaXRsZSh0b2RvLCB0aXRsZSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSB0b2RvLmlkKVxuICAgIGNoYW5nZS50aXRsZSA9IHRpdGxlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0SWQodG9kbywgaWQpIHtcbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgY2hhbmdlLnByb2plY3RJZCA9IGlkXG5cbn1cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgcHJvamVjdCA9IG5ldyBmYWN0b3J5LnByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5pZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlQcm9qZWN0KHByb2plY3QsIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY2hhbmdlID0gcHJvamVjdExpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgXG4gICAgY2hhbmdlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uUHJvamVjdChwcm9qZWN0LCBkZXNjcmlwdGlvbikge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIGNoYW5nZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaXRsZVByb2plY3QocHJvamVjdCwgdGl0bGUpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBjaGFuZ2UudGl0bGUgPSB0aXRsZTtcblxufVxuXG5cbmV4cG9ydCB7dG9kb0xpc3QsIHByb2plY3RMaXN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==