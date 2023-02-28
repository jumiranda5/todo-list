import projectView from "../project/project_view";

const all_projects = (projects) => {

    const container = document.getElementById('main-container');

    const title = document.createElement('h1');
    title.classList.add('main-title');
    title.classList.add('main-content');
    title.textContent = 'Projects';

    const list = document.createElement('ul');
    list.classList.add('projects');
    list.classList.add('main-content');

    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i]);
        const item = projectView();
        list.append(item);
    }

    container.appendChild(title);
    container.appendChild(list);

}

export default all_projects;