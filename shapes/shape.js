class Shape {
    constructor() {
        this.shapeColor = 'black';
    }

    // Call in Test to test the color
    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        throw new Error('Implement in a child class.');
    }
}

module.exports = Shape;