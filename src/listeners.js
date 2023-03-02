import * as logic from './logic'
import { todoItemRender } from './DOMmodule'

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

    
}