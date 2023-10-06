const express  = require('express');

const mice = express()
const PORT = 5500


mice.use((request, response, next) => {
    next()
}, express.static("./container"))


mice.listen(PORT, () => {
    console.log("Running on http://localhost:" + PORT);
});