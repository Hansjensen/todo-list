import * as factory from "./factory";
import * as logic from "./logic";
import 'typeface-roboto';
import css from "./style.css";
import { pageTemplate, projectListRender, todoItemRender  } from "./DOMmodule";
import { allTodoListener, projectListener, todayListener,tomorrowListener, thisWeekListener, popUpListenerTodo, popUpListenerProject, submitTodoButton, submitProjectButton, stopFormRefresh, popUpCloseProjectListener, popUpCloseTodoListener, popUpDropdown, todoDeleteButtonListener, popUpCloseEditListener} from "./listeners";
import { isToday, parseISO } from "date-fns";

const running = new logic.addTodo('Running', 'Run 45 minutes', '2023-03-01', 'High', 1);
const swimming = new logic.addTodo('swimming', 'swim swim swim', '2023-03-02', 'Medium', 2)
const swimef = new logic.addTodo('swimming', 'swim swim swim', '2023-04-02', 'Medium', 2)
const swimmfdfing = new logic.addTodo('swimming', 'swim swim swim', 'tomorrow', 'Medium', 1)
const workout = new logic.addProject('Workouts', 'my daily workouts', 'this week', 'Medium');
const worke = new logic.addProject('neato', 'my daily workouts', 'this week', 'Medium');
const workdut = new logic.addProject('Longer Title', 'my daily workouts', 'this week', 'Medium');
const wor33out = new logic.addProject('shitts', 'my daily workouts', 'this week', 'Medium');

pageTemplate();
todoItemRender(logic.todoList)
projectListRender()
allTodoListener()
projectListener()
todayListener()
tomorrowListener()
thisWeekListener()
popUpListenerTodo()
popUpListenerProject()
submitTodoButton()
submitProjectButton()
stopFormRefresh()
popUpDropdown()
popUpCloseProjectListener()
popUpCloseTodoListener()
popUpCloseEditListener()

console.log(logic.listByTomorrow())

console.log(isToday(parseISO(logic.todoList[1].dueDate)))

