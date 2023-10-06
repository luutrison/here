const configs = require("../config.json")
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const {copyFolder} = require('./method');
const {requireThings} = require('./require');

// const miniPath = path.resolve(configs.buildPath, configs.minify)
// const productPath = path.resolve(configs.buildPath, configs.product)


const arrCheck = [configs.buildPath]

arrCheck.forEach(element => {
    if (!fs.existsSync(element)) {
        fs.mkdirSync(element)
    }
})

requireThings()


copyFolder(configs.basePath, configs.buildPath)


const publish = () => {

}