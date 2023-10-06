const { config } = require('./config.js');
const configs = require("../config.json");
const fs = require('fs');
const path = require('path');
const {copyFolder} = require('./method.js');

const requireThings = () => {
    const release = String(Math.round(Date.now() / 1000))

    const configer = {
        release: release
    }

    const newConfigs = {...configs, ...configer}

    const newReleasePath = path.resolve(configs.containerPath, release)

    fs.mkdir(newReleasePath, (err) => {
        copyFolder(path.resolve(configs.containerPath, configs.release), newReleasePath)
        // fs.rmdir(path.resolve(configs.containerPath, configs.release), (err) => {
        //     if (err) {
        //         console.error(err);
        //     }
            
        // })


        fs.writeFile(path.resolve(config.basePath, config.configFile), JSON.stringify(newConfigs), (err) => {
            if(err){
                console.log(err)
            }

            console.log(path.resolve(config.basePath, config.configFile));
        })
    })



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
}

module.exports.requireThings = requireThings

