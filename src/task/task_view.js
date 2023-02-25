const taskView = (task) => {

    const task_item = document.createElement('li');
    const task_container = document.createElement('div');
    const checkbox = document.createElement('input');
    const title_container = document.createElement('div');
    const title = document.createElement('p');
    const expand_button = document.createElement('button');
    const edit_button = document.createElement('button');
    const delete_button = document.createElement('button');
    const expand_icon = document.createElement('img');
    const edit_icon = document.createElement('img');
    const delete_icon = document.createElement('img');
    const description = document.createElement('p');

    task_item.classList.add('task');
    task_container.classList.add('task-container');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'task-checkbox');
    checkbox.classList.add('task-checkbox')
    title_container.classList.add('task-title-container');
    title.classList.add('task-title');
    expand_button.setAttribute('type', 'button');
    expand_button.classList.add('expand-task');
    edit_button.setAttribute('type', 'button');
    edit_button.classList.add('task-button');
    delete_button.setAttribute('type', 'button');
    delete_button.classList.add('task-button');
    description.classList.add('task-description');
    
    expand_icon.src = '../img/expand.svg';
    expand_icon.setAttribute('alt', 'Expand');
    
    delete_icon.src = '../img/delete.svg';
    delete_icon.setAttribute('alt', 'Delete');
    
    edit_icon.src = '../img/edit.svg';
    edit_icon.setAttribute('alt', 'Edit');

    task_item.appendChild(task_container);
    task_item.appendChild(description);
    task_container.appendChild(checkbox);
    task_container.appendChild(title_container);
    task_container.appendChild(delete_button);
    task_container.appendChild(edit_button);
    title_container.appendChild(title);
    title_container.appendChild(expand_button);
    expand_button.appendChild(expand_icon);
    edit_button.appendChild(edit_icon);
    delete_button.appendChild(delete_icon);

    title.textContent = task.title;
    description.textContent = task.description;
    checkbox.checked = task.isChecked;

    return task_item;
}

export default taskView;