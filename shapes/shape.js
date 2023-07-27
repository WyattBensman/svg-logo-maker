class Shape {
    constructor() {
        this.shapeColor = 'black';
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        throw new Error('Implement in a child class.');
    }
}

module.exports = Shape;