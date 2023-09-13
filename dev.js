const express  = require('express');

const mice = express()


mice.use((request, response, next) => {
    response.appendHeader("Cache-Control", "max-age=5000")
    next()
}, express.static("./src"))


mice.listen(5500, () => {
    console.log("Running 5500");
});