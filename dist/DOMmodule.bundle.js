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
                        elementBuild('a', {'class' : 'linkProject'}, _logic__WEBPACK_IMPORTED_MODULE_0__.projectList[i].title)
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

    let list = todoList.filter(y => y.projectId === x)
    return list
    
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMmodule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vbG9naWNcIlxuXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZCAodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgXG4gICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKVxuICAgICAgICB9ICBlbHNle1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgdGVtcGxhdGUgPVxuICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnd3JhcHBlcid9LFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2hlYWRlcicsIHsnaWQnOiAnaGVhZGVyJ30sIFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ2xvZ29EaXYnfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2gxJywgeydpZCc6ICdsb2dvJ30sIFwiT0RJTidTIFRPRE9cIilcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnaGVhZGVyQWRkRGl2J30sXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2lkJzogJ2hlYWRlckFkZCd9LCAnKydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCcgOiAnc2lkZWJhcid9LFxuICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJzogJ3N0YXRpY0xpbmtzJ30sXG4gICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCd1bCcsIHsnaWQnOiAnc3RhdGljTGlzdCd9LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdEhvbWUnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rSG9tZSd9LCAnQWxsIFRhc2tzJylcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdsaScsIHsnaWQnIDogJ2xpc3RUb2RheSd9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnYScsIHsnaWQnIDogJ2xpbmtUb2RheSd9LCAnVG9kYXknKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydpZCcgOiAnbGlzdFRvbW9ycm93J30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydpZCcgOiAnbGlua1RvbW9ycm93J30sICdUb21vcnJvdycpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnbGknLCB7J2lkJyA6ICdsaXN0VGhpc1dlZWsnfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2EnLCB7J2lkJyA6ICdsaW5rVGhpc1dlZWsnfSwgJ1RoaXMgV2VlaycpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgncCcsIHsnaWQnOiAncHJvamVjdHNUaXRsZSd9LCAnUFJPSkVDVFMnKSxcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydpZCc6ICdwcm9qZWN0TGlua3MnfSlcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdjb250ZW50J30sXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnRDb250YWluZXInfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVtcGxhdGUpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW1SZW5kZXIobGlzdCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENvbnRhaW5lcicpXG4gIFxuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBidWlsZCA9XG4gICAgICAgIGVsZW1lbnRCdWlsZCgnZGl2JywgeydjbGFzcyc6J3RvZG9JdGVtJ30sIFxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveEJ1aWxkZXIobGlzdFtpXSksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDMnLCB7J2NsYXNzJyA6ICd0aXRsZScsICdpZCcgOiAndGl0bGVfJyArIGxpc3RbaV0uaWR9LCBsaXN0W2ldLnRpdGxlKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJpb3JpdHlCdWlsZGVyKGxpc3RbaV0pLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2J1dHRvbicsIHsnY2xhc3MnIDogJ3RvZG9FZGl0JywgJ2lkJyA6ICdlZGl0XycgKyBsaXN0W2ldLmlkfSwgJ0VkaXQnKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdidXR0b24nLCB7J2NsYXNzJyA6ICd0b2RvRGVsZXRlJywgJ2lkJyA6ICdkZWxldGVfJyArIGxpc3RbaV0uaWR9LCAnRGVsZXRlJylcblxuXG4gICAgICAgIClcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGQpXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cblxufVxuXG5mdW5jdGlvbiBjaGVja2JveEJ1aWxkZXIodG9kbykge1xuICAgIGxldCBjaGVja2JveCA9IGVsZW1lbnRCdWlsZCgnaW5wdXQnLCB7J3R5cGUnIDogJ2NoZWNrYm94J30pXG4gICAgaWYgKHRvZG8uY2hlY2tlZCkge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGNoZWNrYm94O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJpb3JpdHlCdWlsZGVyKHRvZG8pIHtcblxuICAgIGxldCBidWlsZCA9IGVsZW1lbnRCdWlsZCgnc2VsZWN0JywgeyduYW1lJyA6ICdwcmlvcml0eSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdMb3cnLCAnaWQnOiAnTG93J30sICdMb3cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnb3B0aW9uJywgeyd2YWx1ZScgOiAnTWVkaXVtJywgJ2lkJyA6ICdNZWRpdW0nfSwgJ01lZGl1bScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdvcHRpb24nLCB7J3ZhbHVlJyA6ICdIaWdoJywgJ2lkJyA6ICdIaWdoJ30sICdIaWdoJylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgIGJ1aWxkLnZhbHVlID0gdG9kby5wcmlvcml0eVxuICAgIHJldHVybiBidWlsZFxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TGlzdFJlbmRlcigpIHtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpbmtzJylcbiAgICBsZXQgbGlzdCA9IGVsZW1lbnRCdWlsZCgndWwnLCB7J2lkJzogJ3Byb2plY3RMaXN0J30sKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnVpbGQgPVxuICAgICAgICBlbGVtZW50QnVpbGQoJ2xpJywgeydjbGFzcycgOiAncHJvamVjdExpc3RJdGVtJ30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJ1aWxkKCdhJywgeydjbGFzcycgOiAnbGlua1Byb2plY3QnfSwgcHJvamVjdExpc3RbaV0udGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChidWlsZClcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXG5cbn1cblxuXG5cbiIsImxldCBpZE51bSA9IDBcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBcbiAgICBcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH1cbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBcbiAgICAgICAgdG9kby5wcm9qZWN0SWQgPSBwcm9qZWN0XG5cbiAgICB9XG4gICAgaWROdW0rK1xuICAgIHJldHVybiB0b2RvXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICAgIGlkOiBpZE51bSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICB9XG4gICAgaWROdW0rKztcbiAgICByZXR1cm4gcHJvamVjdFxufVxuIiwiaW1wb3J0ICogYXMgZmFjdG9yeSBmcm9tICcuL2ZhY3RvcnknO1xuY29uc3QgdG9kb0xpc3QgPSBbe2lkOiAxLCB0aXRsZTogJ0hlbGxvIFdvcmxkJywgZGVzY3JpcHRpb246ICdjb29sc2hpdCcsIGR1ZURhdGU6ICcwMy8yOS8yMycsIHByaW9yaXR5OiAnSGlnaCcsIGNoZWNrZWQ6IHRydWUsIHByb2plY3RJZDogMX1dXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcblxuICAgIGxldCB0b2RvID0gbmV3IGZhY3RvcnkudG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdClcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5pZCA9PT0gdG9kby5pZCkge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkodG9kbywgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGUodG9kbywgdGl0bGUpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UudGl0bGUgPSB0aXRsZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvamVjdElkKHRvZG8sIGlkKSB7XG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSB0b2RvLmlkKVxuICAgIGNoYW5nZS5wcm9qZWN0SWQgPSBpZFxuXG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW11cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IHByb2plY3QgPSBuZXcgZmFjdG9yeS5wcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5UHJvamVjdChwcm9qZWN0LCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIFxuICAgIGNoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXNjcmlwdGlvblByb2plY3QocHJvamVjdCwgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVQcm9qZWN0KHByb2plY3QsIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeURhdGUoeCkge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RCeVByb2plY3QoeCkge1xuXG4gICAgbGV0IGxpc3QgPSB0b2RvTGlzdC5maWx0ZXIoeSA9PiB5LnByb2plY3RJZCA9PT0geClcbiAgICByZXR1cm4gbGlzdFxuICAgIFxufVxuZXhwb3J0IHt0b2RvTGlzdCwgcHJvamVjdExpc3R9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9