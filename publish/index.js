const siteConfig = require('../config.json');

const index = ({ css, script, config }) => {

    const currentConfig = siteConfig

    var themeName = String()

    if (currentConfig.theme) {themeName = `theme="${currentConfig.theme}"`}

    const container = (`<section id="${currentConfig.container}"></section>`)

    const configer = `<meta name="status" data="${config}" />`

    const bodyTag = (`<body ${themeName}>${container}${script}</body>`)

    const headTag = (`<head>${css}${configer}</head>`)

    const html = (`<html>${headTag}${bodyTag}</html>`)

    return html
}

module.exports.index = index