function generateShapes(data) {
    return `
    `
}

function shapeColor(color) {
    if (color === 'white') {
        return `fill="#FFFFFF"`;
    } else if (color === 'red') {
        return `fill="#FF0000"`;
    } else if (color === 'green') {
        return `fill="#00FF00"`;
    } else if (color === 'blue') {
        return `fill="#0000FF"`;
    } else if (color === 'orange') {
        return `fill="#FFA500"`;
    } else if (color === 'yellow') {
        return `fill="#FFFF00"`;
    }
}

function textColor(color) {
    if (color === 'white') {
        return `fill="#FFFFFF"`;
    } else if (color === 'red') {
        return `fill="#FF0000"`;
    } else if (color === 'green') {
        return `fill="#00FF00"`;
    } else if (color === 'blue') {
        return `fill="#0000FF"`;
    } else if (color === 'orange') {
        return `fill="#FFA500"`;
    } else if (color === 'yellow') {
        return `fill="#FFFF00"`;
    }
}

module.exports = generateShapes;