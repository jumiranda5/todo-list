import taskView from "../task/task_view";

const home = (tasks) => {

    const container = document.getElementById('main-container');

    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.textContent = 'All Tasks';

    const list = document.createElement('ul');
    list.classList.add('tasks');

    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        const item = taskView(tasks[i]);
        list.append(item);
    }

    container.appendChild(title);
    container.appendChild(list);

}

export default home;