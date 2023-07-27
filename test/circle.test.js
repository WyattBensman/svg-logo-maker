const Circle = require('../shapes/circle')

describe('Circle', () => {
    it('should render correctly with the given color', () => {
        const circle = new Circle();
        circle.setColor('white');
        expect(circle.render()).toEqual('<circle cx="150" cy="150" r="80" fill="white" />');
    });
});