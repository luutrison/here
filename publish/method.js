const fs = require('fs');
const path = require('path');

const copyFolder = (from, to) => {
    try {
        fs.readdir(from, (err, files) => {
            if (files) {
                files.forEach(element => {
                    if (fs.statSync(path.resolve(from, element)).isFile()) {
                        fs.copyFile(path.resolve(from, element), path.resolve(to, element), (err) => {
                            if (err) {
                                console.error(err)
                            }
                        })
    
                    }
                    else if (fs.statSync(path.resolve(from, element)).isDirectory()) {
    
                        const productDirectory = path.resolve(to, element)
                        const currentBasePath = path.resolve(from, element)
                        const arrChecker = [productDirectory]
                        arrChecker.forEach(element => {
                            if (!fs.existsSync(element)) {
                                fs.mkdirSync(element)
                            }
                        })
                        copyFolder(currentBasePath, productDirectory)
                    }
                })
            }
        })
    } catch (err) {
        console.error(err);
    }
}



module.exports.copyFolder = copyFolder