import * as logic from './logic'
import { projectListRender, todoItemRender, currentList} from './DOMmodule'

export function projectListener() {

    document.querySelectorAll('.linkProject').forEach(item =>
        item.addEventListener('click', e =>{
            
            //slice ID number from element ID
            let id = e.target.id.slice(1)
            
            //Create a list of all projects with that projects ID number.
            todoItemRender(logic.listByProject(id))
       
        }))


}

export function allTodoListener() {

    let listener = document.getElementById('linkHome');

    listener.addEventListener('click', e => {
        todoItemRender(logic.todoList);
    })
}

export function todayListener() {

    let today = document.getElementById('linkToday')
    today.addEventListener('click', e => {
        todoItemRender(logic.listByToday())
    } )
}

export function tomorrowListener() {

    let today = document.getElementById('linkTomorrow')
    today.addEventListener('click', e => {
        todoItemRender(logic.listByTomorrow())
    } )
}

export function thisWeekListener() {

    let today = document.getElementById('linkThisWeek')
    today.addEventListener('click', e => {
        todoItemRender(logic.listByThisWeek())
    } )
}

export function popUpDropdown() {

    let listen = document.getElementById('headerAdd')

    listen.addEventListener('click', e => {

        logic.dropdownClass()
        console.log('hey')
      
    } )   
}

window.onclick = function(event) {
    if (!event.target.matches('#headerAdd')) {
  
      var dropdown = document.getElementById("dropdown");
   
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    
  }

export function popUpListenerTodo() {

    let listen = document.getElementById('todoAdd')

    listen.addEventListener('click', e => {
        
        logic.popUpClass('todo')
       

    })

}

export function popUpListenerProject() {

    let listen = document.getElementById('projectAdd')

    listen.addEventListener('click', e => {
       
        logic.popUpClass('project');
       

    })

}


export function submitTodoButton() {

    let button = document.getElementById('submitTodoAdd')
    button.addEventListener('click', e => {
        let title = document.getElementById('titlePopT').value
        let description = document.getElementById('descriptionPopT').value
        let dueDate = document.getElementById('datePopT').value
        let priority = document.getElementById('priorityPopT').value
        let project = document.getElementById('projectPopT').value
        console.log('hey')
        logic.addTodo(title, description,dueDate,priority, project)
        logic.popUpClass('todo');
        todoItemRender(logic.todoList)
        document.getElementById('popUpFormT').reset();
    })

}

export function submitProjectButton() {

    let button = document.getElementById('submitProjectAdd')
    button.addEventListener('click', e => {
        let title = document.getElementById('titlePopP').value
        let description = document.getElementById('descriptionPopP').value
        let dueDate = document.getElementById('datePopP').value
        let priority = document.getElementById('priorityPopP').value
        logic.addProject(title, description,dueDate,priority)
        
        logic.popUpClass('project');
        todoItemRender(logic.todoList)
        projectListRender()
        document.getElementById('popUpFormP').reset();
    })

}

export function stopFormRefresh() {
    var form = document.getElementById("popUpFormP");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var formT = document.getElementById("popUpFormT");
function handleForm(event) { event.preventDefault(); } 
formT.addEventListener('submit', handleForm);
var formE = document.getElementById("editForm");
function handleForm(event) { event.preventDefault(); } 
formE.addEventListener('submit', handleForm);
}

export function popUpCloseEditListener() {

    let close = document.getElementById('popUpEditClose')
    close.addEventListener('click', e => {
        logic.popUpClass('edit');
    })

}

export function popUpCloseProjectListener() {
    let close = document.getElementById('popUpProjectClose')
    close.addEventListener('click', e => {
        logic.popUpClass('project');
    })
}

export function popUpCloseTodoListener() {
    let close = document.getElementById('popUpTodoClose')
    close.addEventListener('click', e => {
        logic.popUpClass('todo');
    })
}

export function todoDeleteButtonListener() {
    
    let deleteButt = document.querySelectorAll('.todoDelete')
    deleteButt.forEach(item => {
        item.addEventListener('click', e => {
            let todo = e.target.id
            todo = todo.slice(7)
            logic.removeTodo(todo);
            todoItemRender(currentList);
        })
    })

}

export function expandTodoItemListener() {

    let titletodo = document.querySelectorAll('.title');
    

    titletodo.forEach(item => {
        let parent = item.parentElement
        let drop = parent.nextElementSibling
        item.addEventListener('click', e => {
            
            if (drop.style.display == 'flex') {
                drop.style.display = 'none'
            } else {
                drop.style.display = 'flex'
            }
        })
    })
}

export function prioritySelectDropdown() {

    let priority = document.querySelectorAll('.prioritySelect')

    priority.forEach(item => {
        item.addEventListener('change', e => {
            let todoId = item.id.slice(9)
            logic.changePriority(todoId, item.value)
            
        })
    })
}

export function checkboxListener() {

    let checkbox = document.querySelectorAll('.checkBox')

    checkbox.forEach( item => {
        item.addEventListener('click', e => {
           let id = e.target.id.slice(6)
           logic.checkMarkTodo(id)
        })
    })

}

export function projectSelectorTodoListener() {

    let project = document.querySelectorAll('.projectTodoItem')

    project.forEach(item => {
        item.addEventListener('change', e => {
            let proId = item.value
            let id = item.id.slice(4)
            logic.changeProjectId(id, proId)
            
        })
    })
}

export function editFormPopUpListener() {
    let edit = document.querySelectorAll('.todoEdit')
    let title = document.getElementById('editTitle')
    let description = document.getElementById('editDescription')
    let date = document.getElementById('editDate')
    let submit = document.getElementById('submitEdit')
    edit.forEach(item => {
        item.addEventListener('click', e => {
            let todo = logic.todoList.find(x => x.id == e.target.id.slice(5))
            title.value = todo.title
            description.value = todo.description
            date.value = todo.dueDate
            submit.setAttribute('data-id', e.target.id.slice(5))
            logic.popUpClass('edit')
        })
    })
}

export function submitEditForm() {
    let title = document.getElementById('editTitle')
    let description = document.getElementById('editDescription')
    let date = document.getElementById('editDate')
    let submit = document.getElementById('submitEdit')

    submit.addEventListener('click', e => {
       
        logic.changeDescription(parseInt(submit.dataset.id), description.value )
        logic.changeTitle(parseInt(submit.dataset.id), title.value )
        logic.changeDueDate(parseInt(submit.dataset.id), date.value)
        logic.popUpClass('edit');
        todoItemRender(logic.todoList)
        projectListRender()

    })
}

export function deleteProjectListener() {
    
    let deleteProject = document.querySelectorAll('.deleteProject')
    deleteProject.forEach(item => {
        item.addEventListener('click', e => {
            let project = e.target.id
            let proId = project.slice(2)
            logic.removeProject(proId)
            projectListRender();
            console.log(logic.projectList)
            
        })
    })

}
