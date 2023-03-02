const get_form = () => {

    const form = document.createElement('form');
    
    // task name input
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    titleLabel.textContent = "Title:"

    // task description input
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');
    descriptionLabel.textContent = "Description:"

    // choose project => todo

    // create project => todo

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = "Add"

    // Append elements
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(submitButton);

    return form;
}

export default get_form;