import * as factory from "./factory";
import * as logic from "./logic";
import 'typeface-roboto';
import css from "./style.css";
import { pageTemplate, projectListRender, todoItemRender  } from "./DOMmodule";
import { projectListener } from "./listeners";

const running = new logic.addTodo('Running', 'Run 45 minutes', 'today', 'High', 1);
const swimming = new logic.addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 2)
const swimef = new logic.addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 2)
const swimmfdfing = new logic.addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 1)
const workout = new logic.addProject('Workouts', 'my daily workouts', 'this week', 'Medium');
const worke = new logic.addProject('neato', 'my daily workouts', 'this week', 'Medium');
const workdut = new logic.addProject('Longer Title', 'my daily workouts', 'this week', 'Medium');
const wor33out = new logic.addProject('shitts', 'my daily workouts', 'this week', 'Medium');

console.log (logic.projectList)
pageTemplate();
console.log(logic.listByProject(1))
todoItemRender(logic.listByProject(1))
projectListRender()
projectListener()
console.log(logic.listByProject(4))