"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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

function todoItem(title, description, dueDate, priority) {
    const idNum = 0
    id++
    return {
        id: idNum,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }

}

function project(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        todoList: []
    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



const running = new _factory__WEBPACK_IMPORTED_MODULE_0__.todoItem('Running', 'Run 45 minutes', 'today', 'high');
const swimming = new _factory__WEBPACK_IMPORTED_MODULE_0__.todoItem('swimming', 'swim swim swim', 'tomorrow', 'medium')
const workout = new _factory__WEBPACK_IMPORTED_MODULE_0__.project('Workouts', 'my daily workouts', 'this week', 'medium');
_logic__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject(running, workout);
_logic__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject(swimming, workout);
_logic__WEBPACK_IMPORTED_MODULE_1__.removeTodo(running, workout)

console.log(workout)

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoToProject": () => (/* binding */ addTodoToProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
function addTodoToProject(todo, project) {

    project.todoList.push(todo)

}

function removeTodo(todo, project) {
    
    
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QnFDO0FBQ0o7O0FBRWpDLG9CQUFvQiw4Q0FBZ0I7QUFDcEMscUJBQXFCLDhDQUFnQjtBQUNyQyxvQkFBb0IsNkNBQWU7QUFDbkMsb0RBQXNCO0FBQ3RCLG9EQUFzQjtBQUN0Qiw4Q0FBZ0I7O0FBRWhCOzs7Ozs7Ozs7Ozs7Ozs7QUNWTzs7QUFFUDs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IGlkTnVtID0gMFxuICAgIGlkKytcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogaWROdW0sXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICB0b2RvTGlzdDogW11cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBmYWN0b3J5IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCAqIGFzIGxvZ2ljIGZyb20gXCIuL2xvZ2ljXCI7XG5cbmNvbnN0IHJ1bm5pbmcgPSBuZXcgZmFjdG9yeS50b2RvSXRlbSgnUnVubmluZycsICdSdW4gNDUgbWludXRlcycsICd0b2RheScsICdoaWdoJyk7XG5jb25zdCBzd2ltbWluZyA9IG5ldyBmYWN0b3J5LnRvZG9JdGVtKCdzd2ltbWluZycsICdzd2ltIHN3aW0gc3dpbScsICd0b21vcnJvdycsICdtZWRpdW0nKVxuY29uc3Qgd29ya291dCA9IG5ldyBmYWN0b3J5LnByb2plY3QoJ1dvcmtvdXRzJywgJ215IGRhaWx5IHdvcmtvdXRzJywgJ3RoaXMgd2VlaycsICdtZWRpdW0nKTtcbmxvZ2ljLmFkZFRvZG9Ub1Byb2plY3QocnVubmluZywgd29ya291dCk7XG5sb2dpYy5hZGRUb2RvVG9Qcm9qZWN0KHN3aW1taW5nLCB3b3Jrb3V0KTtcbmxvZ2ljLnJlbW92ZVRvZG8ocnVubmluZywgd29ya291dClcblxuY29uc29sZS5sb2cod29ya291dCkiLCJleHBvcnQgZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdCh0b2RvLCBwcm9qZWN0KSB7XG5cbiAgICBwcm9qZWN0LnRvZG9MaXN0LnB1c2godG9kbylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyh0b2RvLCBwcm9qZWN0KSB7XG4gICAgXG4gICAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9