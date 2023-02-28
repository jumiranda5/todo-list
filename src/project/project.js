class Project {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    set name(value) {
        this._name = value;
    }

    set color(value) {
        this._color = value;
    }
}

export default Project;