const configs = require("../config.json")
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { copyFolder } = require('./method');
const { requireThings } = require('./require');

// const miniPath = path.resolve(configs.buildPath, configs.minify)
// const productPath = path.resolve(configs.buildPath, configs.product)


if (configs) {
    if (fs.existsSync(configs.buildContainer)) {
        fs.rm(configs.buildContainer, { recursive: true }, (err) => {
            const arrCheck = [configs.buildPath, configs.buildContainer]
    
            arrCheck.forEach(element => {
                if (!fs.existsSync(element)) {
                    fs.mkdirSync(element)
                }
            })
            
            requireThings()
        })
    }
    
    
   
}

