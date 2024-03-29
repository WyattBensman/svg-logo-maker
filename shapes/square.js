const Shape = require('./Shape');

class Square extends Shape {
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;