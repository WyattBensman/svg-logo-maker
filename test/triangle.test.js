const Triangle = require('../shapes/triangle')

describe('Triangle', () => {
    it('should render correctly with the given color', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
    });
});