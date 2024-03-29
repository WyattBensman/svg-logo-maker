const Shape = require('./Shape');

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" fill="${this.shapeColor}" />`;
    }
}

module.exports = Circle;