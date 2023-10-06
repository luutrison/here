const config = {
    configFile: "./config.json",
    basePath: ".",
    require : {
        css: [
            '<link rel="icon" href="./${release}/configs/site/logo.svg"/>',
            '<link rel="manifest" href="./${release}/configs/site/manifest.webmanifest"/>'
        ],
        script: [
            '<script src="./${release}/libs/jquery/jquery.min.js"></script>',
            '<script src="./${release}/here/here.js"></script>'
        ]
    }
}

module.exports.config = config