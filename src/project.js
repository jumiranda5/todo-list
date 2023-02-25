class Project {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    set name(value) {
        this._name = value;
    }

    set color(value) {
        this._color = value;
    }
}

export default Project;