const siteConfig = require('./config');

const index = ({ css, script, config }) => {

    const currentConfig = siteConfig.config

    var themeName = String()

    if (currentConfig.theme) {themeName = `theme="${currentConfig.theme}"`}

    const container = (`<section id="${currentConfig.container}"></section>`)

    const bodyTag = (`<body ${themeName}>${container}${script}${config}</body>`)

    const headTag = (`<head>${css}</head>`)

    const html = (`<html>${headTag}${bodyTag}</html>`)

    return html
}

module.exports.index = index