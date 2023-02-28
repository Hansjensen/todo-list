
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

export function pageTemplate() {
    const body = document.querySelector('body')
    const template =
    elementBuild('div', {'id' : 'wrapper'},
        elementBuild('header', {'id': 'header'}),
        elementBuild('div', {'id' : 'sidebar'}),
        elementBuild('div', {'id' : 'content'}),
    );
    body.appendChild(template)

}