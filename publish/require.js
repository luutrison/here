const { config } = require('./config.js');
const configs = require("../config.json");
const fs = require('fs');

const path = require('path');
const { copyFolder, removeFolder } = require('./method.js');
const { index } = require('./index.js');
const statusConfig = require('./status.json');



const release = String(Math.round(Date.now() / 1000))

const configer = {
    release: release
}

const newConfigs = { ...configs, ...configer }


const configStatus = () => {
    const status = {...statusConfig, ...configer}
    const prd = btoa(JSON.stringify(status))
    return prd
}


const requireThings = () => {


    try {


        const newReleasePath = path.resolve(configs.containerPath, release)

        var css = String()
        var script = String()

        config.require.css.forEach(element => {
            const crent = String(element).replace("${release}", release)
            css += crent
        })

        config.require.script.forEach(element => {
            const cript = String(element).replace("${release}", release)
            script += cript
        })


        fs.writeFile(path.resolve(configs.containerPath, "index.html"), index({ css: css, script: script, config: configStatus() }), (err) => {
            fs.mkdir(newReleasePath, (err) => {
                copyFolder(path.resolve(configs.containerPath, configs.release), newReleasePath)


                fs.rm(path.resolve(configs.containerPath, configs.release), { recursive: true }, err => {
                    copyFolder(configs.basePath, configs.buildContainer)
                    fs.writeFile(path.resolve(config.basePath, config.configFile), JSON.stringify(newConfigs), (err) => { })
                })

            })
        })
    } catch (error) {
        fs.writeFile(path.resolve(config.basePath, config.configFile), JSON.stringify(newConfigs), (err) => { })
        console.error(error);
    }



}

module.exports.requireThings = requireThings

