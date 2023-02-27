const taskView = (task) => {

    // Icons
    const expand_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M480 699q-6 0-11-2t-10-7L261 492q-8-8-7.5-21.5T262 449q10-10 21.5-8.5T304 450l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501 690q-5 5-10 7t-11 2Z"/></svg>';
    const edit_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>';
    const delete_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>';

    // Task list item
    const task_item = document.createElement('li');
    task_item.classList.add('task');
    
    // Task container: wraps title, checkbox, edit and delete
    const task_container = document.createElement('div');
    task_container.classList.add('task-container');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'task-checkbox');
    checkbox.classList.add('task-checkbox')
    
    // Title
    const title_container = document.createElement('div');
    const title = document.createElement('p');
    title_container.classList.add('task-title-container');
    title.classList.add('task-title');

    // Expand button
    const expand_button = document.createElement('button');
    expand_button.setAttribute('type', 'button');
    expand_button.classList.add('expand-task');
    expand_button.innerHTML = expand_icon;
    
    // Edit button
    const edit_button = document.createElement('button');
    edit_button.setAttribute('type', 'button');
    edit_button.classList.add('task-button');
    edit_button.innerHTML = edit_icon;
    
    // Delete button
    const delete_button = document.createElement('button');
    delete_button.setAttribute('type', 'button');
    delete_button.classList.add('task-button');
    delete_button.innerHTML = delete_icon;
    
    // Description
    const description = document.createElement('p');
    description.classList.add('task-description');

    // Events
    expand_button.addEventListener('click', () => {
        if (description.classList.contains('expanded')) {
            expand_button.classList.remove('expand-less');
            description.classList.remove('expanded');
        }
        else {
            expand_button.classList.add('expand-less');
            description.classList.add('expanded');
        } 
    });

    
    /*
        Elements:
        li task
            div task-container
                input checkbox
                div title-container 
                    p title
                    button expand
                button edit
                button delete
            p description
    */

    task_item.appendChild(task_container);
    task_item.appendChild(description);
    task_container.appendChild(checkbox);
    task_container.appendChild(title_container);
    task_container.appendChild(edit_button);
    task_container.appendChild(delete_button);
    title_container.appendChild(title);
    title_container.appendChild(expand_button);
    
    // Set text content
    title.textContent = task.title;
    description.textContent = task.description;
    checkbox.checked = task.isChecked;

    return task_item;
}

export default taskView;