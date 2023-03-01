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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3FDO0FBQ3JDLG1CQUFtQiwwSEFBMEg7O0FBRXRJOztBQUVQLG1CQUFtQiw4Q0FBZ0I7QUFDbkM7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVAsc0JBQXNCLDZDQUFlO0FBQ3JDO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGlkTnVtID0gMFxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIFxuICAgIFxuICAgIGNvbnN0IHRvZG8gPSB7XG4gICAgICAgIGlkOiBpZE51bSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfVxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIFxuICAgICAgICB0b2RvLnByb2plY3RJZCA9IHByb2plY3RcblxuICAgIH1cbiAgICBpZE51bSsrXG4gICAgcmV0dXJuIHRvZG9cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgaWQ6IGlkTnVtLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIH1cbiAgICBpZE51bSsrO1xuICAgIHJldHVybiBwcm9qZWN0XG59XG4iLCJpbXBvcnQgKiBhcyBmYWN0b3J5IGZyb20gJy4vZmFjdG9yeSc7XG5jb25zdCB0b2RvTGlzdCA9IFt7aWQ6IDEsIHRpdGxlOiAnSGVsbG8gV29ybGQnLCBkZXNjcmlwdGlvbjogJ2Nvb2xzaGl0JywgZHVlRGF0ZTogJzAzLzI5LzIzJywgcHJpb3JpdHk6ICdIaWdoJywgY2hlY2tlZDogZmFsc2UsIHByb2plY3RJZDogMX1dXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcblxuICAgIGxldCB0b2RvID0gbmV3IGZhY3RvcnkudG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdClcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5pZCA9PT0gdG9kby5pZCkge1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkodG9kbywgcHJpb3JpdHkpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBcbiAgICBjaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGUodG9kbywgdGl0bGUpIHtcblxuICAgIGxldCBjaGFuZ2UgPSB0b2RvTGlzdC5maW5kKHggPT4geC5pZCA9PT0gdG9kby5pZClcbiAgICBjaGFuZ2UudGl0bGUgPSB0aXRsZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvamVjdElkKHRvZG8sIGlkKSB7XG4gICAgbGV0IGNoYW5nZSA9IHRvZG9MaXN0LmZpbmQoeCA9PiB4LmlkID09PSB0b2RvLmlkKVxuICAgIGNoYW5nZS5wcm9qZWN0SWQgPSBpZFxuXG59XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW11cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXG4gICAgbGV0IHByb2plY3QgPSBuZXcgZmFjdG9yeS5wcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5UHJvamVjdChwcm9qZWN0LCBwcmlvcml0eSkge1xuXG4gICAgbGV0IGNoYW5nZSA9IHByb2plY3RMaXN0LmZpbmQoeCA9PiB4LmlkID09PSBwcm9qZWN0LmlkKVxuICAgIFxuICAgIGNoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEZXNjcmlwdGlvblByb2plY3QocHJvamVjdCwgZGVzY3JpcHRpb24pIHtcblxuICAgIGxldCBjaGFuZ2UgPSBwcm9qZWN0TGlzdC5maW5kKHggPT4geC5pZCA9PT0gcHJvamVjdC5pZClcbiAgICBjaGFuZ2UuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGl0bGVQcm9qZWN0KHByb2plY3QsIHRpdGxlKSB7XG5cbiAgICBsZXQgY2hhbmdlID0gdG9kb0xpc3QuZmluZCh4ID0+IHguaWQgPT09IHByb2plY3QuaWQpXG4gICAgY2hhbmdlLnRpdGxlID0gdGl0bGU7XG5cbn1cblxuXG5leHBvcnQge3RvZG9MaXN0LCBwcm9qZWN0TGlzdH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=