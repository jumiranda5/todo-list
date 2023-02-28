// styles
import './css/reset.css';
import './css/style.css';

// views
import display_page from './page/page';
import home from './page/home';
import all_projects from './page/projects';

// Objects
import Project from './project/project';
import Task from './task/task';

// Create dummy projects list
const projects = [
    new Project(0, "General", "#000000"),
    new Project(0, "Project 1", "#000000"),
    new Project(0, "Project 2", "#000000"),
    new Project(0, "Project 3", "#000000"),
];

// Create dummy tasks list
const tasks = [
    new Task(0, "Task 1 Task...", "Testing...", projects[0], false),
    new Task(1, "Task 2", "Testing...", projects[1], false),
    new Task(2, "Task 3", "Testing...", projects[2], false),
    new Task(3, "Task 4", "Testing...", projects[3], false),
];

// Init main page
display_page();

// display home => all tasks
home(tasks);

// display all projects
all_projects(projects);

// display project
