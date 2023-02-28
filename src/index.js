import * as factory from "./factory";
import * as logic from "./logic";
import 'typeface-roboto';
import css from "./style.css";
import { pageTemplate } from "./DOMmodule";

const running = new logic.addTodo('Running', 'Run 45 minutes', 'today', 'high');
const swimming = new logic.addTodo('swimming', 'swim swim swim', 'tomorrow', 'medium', 4)
const workout = new factory.project('Workouts', 'my daily workouts', 'this week', 'medium');
const run = logic.todoList[0]
pageTemplate();

logic.changePriority(run, 'low')
logic.changeProjectId(run, 4)
console.log(logic.todoList)