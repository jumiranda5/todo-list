class Task {
    constructor(id, title, description, project, isChecked) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.project = project;
        this.isChecked = isChecked;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get project() {
        return this._project;
    }

    get isChecked() {
        return this._isChecked;
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