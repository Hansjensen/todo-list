"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["helper"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDcUM7QUFDckMsbUJBQW1CLHlIQUF5SDs7QUFFckk7O0FBRVAsbUJBQW1CLDhDQUFnQjtBQUNuQztBQUNBOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUCxzQkFBc0IsNkNBQWU7QUFDckM7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaWROdW0gPSAwXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgXG4gICAgXG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgaWQ6IGlkTnVtLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgXG4gICAgICAgIHRvZG8ucHJvamVjdElkID0gcHJvamVjdFxuXG4gICAgfVxuICAgIGlkTnVtKytcbiAgICByZXR1cm4gdG9kb1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgfVxuICAgIGlkTnVtKys7XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbiIsImltcG9ydCAqIGFzIGZhY3RvcnkgZnJvbSAnLi9mYWN0b3J5JztcbmNvbnN0IHRvZG9MaXN0ID0gW3tpZDogMSwgdGl0bGU6ICdIZWxsbyBXb3JsZCcsIGRlc2NyaXB0aW9uOiAnY29vbHNoaXQnLCBkdWVEYXRlOiAnMDMvMjkvMjMnLCBwcmlvcml0eTogJ0hpZ2gnLCBjaGVja2VkOiB0cnVlLCBwcm9qZWN0SWQ6IDF9XVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG5cbiAgICBsZXQgdG9kbyA9IG5ldyBmYWN0b3J5LnRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpXG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0xpc3RbaV0uaWQgPT09IHRvZG8uaWQpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHRvZG8sIHByaW9yaXR5KSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgXG4gICAgY2hhbmdlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKHRvZG8sIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgY2hhbmdlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlKHRvZG8sIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHRvZG8uaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByb2plY3RJZCh0b2RvLCBpZCkge1xuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UucHJvamVjdElkID0gaWRcblxufVxuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBwcm9qZWN0ID0gbmV3IGZhY3RvcnkucHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCkge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmlkID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eVByb2plY3QocHJvamVjdCwgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb25Qcm9qZWN0KHByb2plY3QsIGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gcHJvamVjdExpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRpdGxlUHJvamVjdChwcm9qZWN0LCB0aXRsZSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIGNoYW5nZS50aXRsZSA9IHRpdGxlO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlEYXRlKHgpIHtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlIFxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0QnlQcm9qZWN0KHgpIHtcblxuICAgIGxldCBsaXN0ID0gdG9kb0xpc3QuZmlsdGVyKHkgPT4geS5wcm9qZWN0SWQgPT09IHgpXG4gICAgcmV0dXJuIGxpc3RcbiAgICBcbn1cbmV4cG9ydCB7dG9kb0xpc3QsIHByb2plY3RMaXN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==