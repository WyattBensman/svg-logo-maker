const generateShapes = require('../logoGenerator');


describe('logoGenerator', () => {
    describe('circle', () => {
        it('should return back correct XML & Shape', () => {
            const result = `
    <svg width="200" height="100">
        <circle cx="150" cy="150" r="80" fill="#FFFFFF" />
        <text x="10" y="20" font-family="Arial" font-size="16" fill="#FFFFFF">ABC</text>
    </svg>
    `;
            const data = {
                shape: 'circle',
                shapeColor: 'white',
                text: 'ABC',
                textColor: 'white'
            }
            const logo = generateShapes(data);
            expect(logo).toEqual(result);
        })
    })
});