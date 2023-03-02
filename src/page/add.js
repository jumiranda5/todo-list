import get_form from "../add/form";

const add_task_form = () => {

    const container = document.getElementById('main-container');

    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.classList.add('main-content');
    title.textContent = 'Add Task';

    const form = get_form();
    form.classList.add('main-content');

    container.appendChild(title);
    container.appendChild(form);

}

export default add_task_form;