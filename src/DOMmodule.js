
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
                elementBuild('div', {'class':'todoItem'}, 
                    elementBuild('input', {'type' : 'checkbox'}),
                    elementBuild('h3', {'class' : 'title'}, 'Prototype'),
                    elementBuild('select', {'name' : 'priority'},
                        elementBuild('option', {'value' : 'Low'}, 'Low'),
                        elementBuild('option', {'value' : 'Medium'}, 'Medium'),
                        elementBuild('option', {'value' : 'High'}, 'High')
                    ),
                    elementBuild('button', {'class' : 'todoEdit'}, 'Edit'),
                    elementBuild('button', {'class' : 'todoDelete'}, 'Delete')


                )
            )
        ),
    );
    body.appendChild(template)

}

