class Task {
    constructor(id, title, description, project, isChecked) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.project = project;
        this.isChecked = isChecked;
    }

    set title(value) {
        this._title = value;
    }

    set description(value) {
        this._description = value;
    }

    set project(value) {
        this._project = value;
    }

    set isChecked(value) {
        this._isChecked = value;
    }
}

export default Task;