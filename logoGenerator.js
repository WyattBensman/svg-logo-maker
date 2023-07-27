function generateShapes(data) {
    return `
    <svg width="300" height="200">
        <${shape(data.shape)} ${shapeColor(data.shapeColor)} />
        <text x="100" y="100" font-family="Arial" font-size="25" ${textColor(data.textColor)}>${data.text}</text>
    </svg>
    `
}

function shape(shape) {
    if (shape === 'circle') {
        return `circle cx="150" cy="100" r="80"`
    } else if (shape === 'square') {
        return `rect x="50" y="20" rx="10" ry="10" width="150" height="150"`
    } else {
        return `polygon points="150 45,260 245, 40 245"`
    }
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