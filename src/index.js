import * as factory from "./factory";
import * as logic from "./logic";

const running = new factory.todoItem('Running', 'Run 45 minutes', 'today', 'high');
const swimming = new factory.todoItem('swimming', 'swim swim swim', 'tomorrow', 'medium')
const workout = new factory.project('Workouts', 'my daily workouts', 'this week', 'medium');
logic.addTodoToProject(running, workout);
logic.addTodoToProject(swimming, workout);
logic.removeTodo(running, workout)

console.log(workout)