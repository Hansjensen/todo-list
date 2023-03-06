import { projectListener, todoDeleteButtonListener, expandTodoItemListener } from "./listeners"
import { projectList } from "./logic"

let currentList = []


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
    const popProject =  popUpBuilder('project');
    const popTodo = popUpBuilder('todo')
    const overlay = elementBuild('div', {'id' : 'overlay'})
    const template =
    
    elementBuild('div', {'id' : 'wrapper'},
        elementBuild('header', {'id': 'header'}, 
            elementBuild('div', {'id': 'logoDiv'},
                elementBuild('h1', {'id': 'logo'}, "ODIN'S TODO")
            ),
            elementBuild('div', {'id': 'headerAddDiv'},
                elementBuild('button', {'id': 'headerAdd'}, '+'
                ),
                elementBuild('div', {'id': 'dropdown'},
                    elementBuild('a', {'class': 'dropdownLink', 'id' : 'todoAdd'}, 'ADD TODO'),
                    elementBuild('a', {'class': 'dropdownLink', 'id' : 'projectAdd'}, 'ADD PROJECT')
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
    body.appendChild(popProject)
    body.appendChild(popTodo)
    body.appendChild(template)
    body.appendChild(overlay)

}


export function todoItemRender(list) {
    let container = document.getElementById('contentContainer')
    container.textContent = ''
    currentList = list
  
    for (let i = 0 ; i < list.length; i++) {
        

        let build =
        elementBuild('div', {'class':'todoItem'}, 
                    checkboxBuilder(list[i]),
                    elementBuild('h2', {'class' : 'title', 'id' : 'title_' + list[i].id}, list[i].title),
                    elementBuild('h3', {'class' : 'todoDate'}, list[i].dueDate),
                    selectPriorityBuilder(list[i]),
                    elementBuild('button', {'class' : 'todoEdit', 'id' : 'edit_' + list[i].id}, 'Edit'),
                    elementBuild('button', {'class' : 'todoDelete', 'id' : 'delete_' + list[i].id}, 'Delete')
                )
         let build2 = elementBuild('div', {'class' : 'todoItemLower'},
                    elementBuild('h2', {'class' : 'todoDescription'}, list[i].description),
                    elementBuild('div', {'class':'proListTodoItem'},
                        elementBuild('label', {'for': 'projectPop'}, 'PROJECT'),
                        projectListPopUp()
                    )
                )


        
        
        container.appendChild(build)
        container.appendChild(build2)
        
        
        
    }

    todoDeleteButtonListener()
    expandTodoItemListener()
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



export function projectListRender(x) {

    let container = document.getElementById('projectLinks')
    let list = elementBuild('ul', {'id': 'projectList'},)
    container.textContent = ""

    for (let i = 0; i < projectList.length; i++) {
        let build =
        elementBuild('li', {'class' : 'projectListItem'}, 
                        elementBuild('a', {'class' : 'linkProject', 'id' : 'p' + projectList[i].id}, projectList[i].title)
                    )
        list.appendChild(build)
    }
    container.appendChild(list)
    projectListener()

}




function popUpBuilder(x) {

    if (x === 'project') {
        let popUpForm = elementBuild('div', {'id' : 'popUpProject'},
        elementBuild('div', {'id' : 'popUpHeader'}, 
            elementBuild('h1', {'id' : 'popUpTitle'}, 'Add Project'),
            elementBuild('button', {'id' : 'popUpProjectClose'}, 'X' )),
        elementBuild('form', {'id' : 'popUpFormP', }, 
        elementBuild('label', {'for' : 'titlePop',"class" : 'popLabel' }, 'TITLE'),
        elementBuild('input', {'type' : 'text', 'id' : 'titlePopP', 'name' : 'titlePop'}),
        elementBuild('label', {'for' : 'descriptionPop', "class" : 'popLabel'}, 'DESCRIPTION'),
        elementBuild('textarea', {'type' : 'text', 'id' : 'descriptionPopP', 'name' : 'descriptionPop'}),
        elementBuild('label', {'for' : 'datePop',"class" : 'popLabel' }, 'DATE'),
        elementBuild('input', {'type' : 'date', 'id' : 'datePopP', 'name' : 'datePop'}),
        elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PRIORITY'),
        elementBuild('select', {'name' : 'priorityPop', 'id' : 'priorityPopP'},
                        elementBuild('option', {'value' : 'Low', }, 'Low'),
                        elementBuild('option', {'value' : 'Medium', }, 'Medium'),
                        elementBuild('option', {'value' : 'High', }, 'High')
                    ),
        elementBuild('input', {'type' : 'submit' , 'value': 'ADD', 'rows' : '10', 'id' : 'submitProjectAdd'}, 'ADD'))

        


    )
    return popUpForm;

    } else if (x === 'todo') {
        let popUpForm = elementBuild('div', {'id' : 'popUpTodo'},
        elementBuild('div', {'id' : 'popUpHeader'}, 
            elementBuild('h1', {'id' : 'popUpTitle'}, 'Add Todo'),
            elementBuild('button', {'id' : 'popUpTodoClose'}, 'X' )),
        elementBuild('form', {'id' : 'popUpFormT', }, 
        elementBuild('label', {'for' : 'titlePop',"class" : 'popLabel' }, 'TITLE'),
        elementBuild('input', {'type' : 'text', 'id' : 'titlePopT', 'name' : 'titlePop'}),
        elementBuild('label', {'for' : 'descriptionPop', "class" : 'popLabel'}, 'DESCRIPTION'),
        elementBuild('textarea', {'type' : 'text', 'id' : 'descriptionPopT', 'name' : 'descriptionPop'}),
        elementBuild('label', {'for' : 'datePop',"class" : 'popLabel' }, 'DATE'),
        elementBuild('input', {'type' : 'date', 'id' : 'datePopT', 'name' : 'datePop'}),
        elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PRIORITY'),
        elementBuild('select', {'name' : 'priorityPop', 'id' : 'priorityPopT'},
                        elementBuild('option', {'value' : 'Low', }, 'Low'),
                        elementBuild('option', {'value' : 'Medium', }, 'Medium'),
                        elementBuild('option', {'value' : 'High', }, 'High')
                    ),
                    elementBuild('label', {'for' : 'priorityPop',"class" : 'popLabel' }, 'PROJECT'),
        projectListPopUp(),
        elementBuild('input', {'type' : 'submit' , 'value': 'ADD', 'rows' : '10', 'id' : 'submitTodoAdd'}, 'ADD'))

        


    )
    return popUpForm;
    }

    

}

function projectListPopUp() {

    let element = elementBuild('select', {'name' : 'projectPop', 'class' : 'projectPopT'})
    element.appendChild(elementBuild('option', {'value' : 0}, 'None'))
    for (let i = 0; i < projectList.length; i++) {
        let title = projectList[i].title
        let id = projectList[i].id
        let option = elementBuild('option', {'value' : id}, title)
        element.appendChild(option)
    }
    
    return element
}

export {currentList}
