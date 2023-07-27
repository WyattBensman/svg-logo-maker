function createHTMLTemplate(svgCode) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>SVG Logo</title>
        </head>
        <body>
          <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            ${svgCode}
          </div>
        </body>
      </html>
    `;
}

module.exports = createHTMLTemplate;