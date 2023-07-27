const Square = require('../shapes/square')

describe('Square', () => {
    it('should render correctly with the given color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect width="200" height="200" fill="blue" />');
    });
});