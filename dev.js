const express  = require('express');

const mice = express()
const PORT = 5500


mice.use((request, response, next) => {
    // response.appendHeader("Cache-Control", "max-age=86400")
    next()
}, express.static("./src"))


mice.listen(PORT, () => {
    console.log("Running on http://localhost:" + PORT);
});