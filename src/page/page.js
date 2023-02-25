const display_page = () => {
    const body = document.getElementsByTagName("BODY")[0];
    body.appendChild(create_header());
    body.appendChild(create_sidebar());

    const main_container = document.createElement('div');
    main_container.setAttribute('id', 'main-container');
    main_container.classList.add('main-container');
    body.appendChild(main_container);
}

const create_header = () => {

    // Create header element
    const header = document.createElement("header");
    header.classList.add("header");

    // Create logo container
    const logo = document.createElement("div");
    logo.classList.add("logo");

    // Add logo svg to logo container
    const logo_icon = 
    `
        <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
            <path d="M180 936q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600V533l60-60v403q0 24.75-17.625 42.375T780 936H180Zm281-168L239 546l42-42 180 180 382-382 42 42-424 424Z"/>
        </svg>
    `
    logo.innerHTML = logo_icon;

    // Create logo text
    const logo_text = document.createElement("span");
    logo_text.textContent = "TODO LIST";
    logo_text.classList.add("logo-text");

    // Append elements
    logo.appendChild(logo_text);
    header.appendChild(logo);

    return header;
}

const create_sidebar = () => {

    // Create sidebar container
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    // Buttons icons
    const iconHome = `<svg class="sidebar-button-icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm0 60q-24.75 0-42.375-17.625T160 876V486q0-14.25 6.375-27T184 438l260-195q8.295-6 17.344-9 9.049-3 18.853-3 9.803 0 18.717 3 8.915 3 17.086 9l260 195q11.25 8.25 17.625 21T800 486v390q0 24.75-17.625 42.375T740 936H530V686H430v250H220Zm260-353Z"/></svg>`;
    const iconProject = `<svg class="sidebar-button-icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm120-106q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm162 328h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 710H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 770Zm0-164h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 546H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 606Zm0-164h184q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T646 382H462q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T462 442ZM180 876V276v600Z"/></svg>`;
    const iconAdd = `<svg class="sidebar-button-icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M479.825 856Q467 856 458.5 847.375T450 826V606H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230 546h220V326q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 326v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730 606H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"/></svg>`;

    // Create sidebar buttons
    const homeButton = create_sidebar_button(iconHome, "Home");
    const projectsButton = create_sidebar_button(iconProject, "Projects");
    const addButton = create_sidebar_button(iconAdd, "Add Task");

    // Append buttons to sidebar
    sidebar.appendChild(homeButton);
    sidebar.appendChild(projectsButton);
    sidebar.appendChild(addButton);

    return sidebar;

}

const create_sidebar_button = (icon, text) => {

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("sidebar-button");
    button.innerHTML = icon;
    
    const buttonText = document.createElement("span");
    buttonText.textContent = text;
    buttonText.classList.add("sidebar-button-text");

    button.appendChild(buttonText);

    return button;

}

export default display_page;