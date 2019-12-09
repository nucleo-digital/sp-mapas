(function () {
    const fs = require('fs-extra')
    const isCi = false//process.env.CI

    if (!isCi && !fs.existsSync('./shapes/')){
        fs.mkdirSync('./shapes/')
    }
})()