(function () {
    const fs = require('fs-extra')
    const isCi = process.env.CI

    if (!isCi && !fs.existsSync('./shapes/')){
        fs.mkdirSync('./shapes/')
    }
})()