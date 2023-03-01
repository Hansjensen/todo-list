import { projectList } from "./logic"


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
            )
        ),
    );
    body.appendChild(template)

}


export function todoItemRender(list) {
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

export function projectListRender() {

    let container = document.getElementById('projectLinks')
    let list = elementBuild('ul', {'id': 'projectList'},)

    for (let i = 0; i < projectList.length; i++) {
        let build =
        elementBuild('li', {'class' : 'projectListItem'}, 
                        elementBuild('a', {'class' : 'linkProject'}, projectList[i].title)
                    )
        list.appendChild(build)
    }
    container.appendChild(list)

}



