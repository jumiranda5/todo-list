const projectView = () => {

    // Project container => li
    const container = document.createElement('li');
    container.classList.add('project');

    // Project title
    const title = document.createElement('p');
    title.classList.add('project-title');
    title.textContent = 'Project';

    // Task counter
    const counter = document.createElement('p');
    counter.classList.add('project-counter');
    counter.textContent = '12 items';

    // Progress
    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');

    const progressText = document.createElement('p');
    progressText.classList.add('progress-text');
    progressText.textContent = "50%";

    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.setAttribute("width", "50%");

    // html tree
    container.appendChild(title);
    container.appendChild(counter);
    container.appendChild(progressContainer);
    progressContainer.appendChild(progressText);
    progressContainer.appendChild(progress);

    return container;

}

export default projectView;