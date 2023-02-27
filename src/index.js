// styles
import './css/reset.css';
import './css/style.css';

// views
import display_page from './page/page';
import home from './page/home';

// Objects
import Project from './project';
import Task from './task/task';

// Create dummy project
const project = new Project(0, "General", "#000000");

// Create dummy tasks list
const tasks = [
    new Task(0, "Task 1", "Testing...", project, false),
    new Task(1, "Task 2", "Testing...", project, false),
    new Task(2, "Task 3", "Testing...", project, false),
    new Task(3, "Task 4", "Testing...", project, false),
];

// Init main page
display_page();

// display home => all tasks
home(tasks);

// display all projects
// display project
