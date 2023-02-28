"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["DOMmodule"],{

/***/ "./src/DOMmodule.js":
/*!**************************!*\
  !*** ./src/DOMmodule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageTemplate": () => (/* binding */ pageTemplate)
/* harmony export */ });

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
                elementBuild('h3', {'id': 'logo'})
            )
        ),
        elementBuild('div', {'id' : 'sidebar'}),
        elementBuild('div', {'id' : 'content'}),
    );
    body.appendChild(template)

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMmodule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NbW9kdWxlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQyxnQ0FBZ0MsZUFBZTtBQUMvQyxpQ0FBaUMsZ0JBQWdCO0FBQ2pELG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET01tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBlbGVtZW50QnVpbGQgKHR5cGUsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSB7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIFxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKVxuICAgIH1cblxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpXG4gICAgICAgIH0gIGVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFnZVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCB0ZW1wbGF0ZSA9XG4gICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICd3cmFwcGVyJ30sXG4gICAgICAgIGVsZW1lbnRCdWlsZCgnaGVhZGVyJywgeydpZCc6ICdoZWFkZXInfSwgXG4gICAgICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnOiAnbG9nb0Rpdid9LFxuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZCgnaDMnLCB7J2lkJzogJ2xvZ28nfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgZWxlbWVudEJ1aWxkKCdkaXYnLCB7J2lkJyA6ICdzaWRlYmFyJ30pLFxuICAgICAgICBlbGVtZW50QnVpbGQoJ2RpdicsIHsnaWQnIDogJ2NvbnRlbnQnfSksXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlKVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9