(function () {
    const fs = require('fs-extra')
    const path = require('path')
    const findInDir = require('./modules/findInDir')
    const apiIndex = require('./modules/apiIndex')
    const baseUrl = process.argv[2]

    if (!fs.existsSync('./dist/')){
        fs.mkdirSync('./dist/')
    }
    else {
        fs.removeSync('./dist/', { recursive: true })
        fs.mkdirSync('./dist/')
    }

    const minified = (path) => {
        const data = fs.readFileSync(path)
        return JSON.stringify(JSON.parse(data))
    }

    const filesPaths = findInDir('./mapas', /\.geojson$/)

    let error = false
    filesPaths.forEach(filePath => {
        try {
            const outputData = minified(`${__dirname}/../${filePath}`)
            const ouputPath = filePath.replace('mapas', 'dist')
            const outputFolder = path.dirname(ouputPath)

            if (!fs.existsSync(outputFolder)){
                fs.mkdirSync(outputFolder)
            }
            fs.writeFileSync(ouputPath, outputData)
        }
        catch(error) {
            console.error(error)
            error = true
        }
    })

    try {
        const lists = apiIndex(baseUrl, filesPaths)
        const urls = lists.list
        const urlsStringfied = JSON.stringify({urls})
        fs.writeFileSync(`${__dirname}/../dist/index.js`, urlsStringfied)
        fs.writeFileSync(`${__dirname}/../dist/README.md`, lists.markdown)
    }
    catch (error){
        console.error(error)
        error = true
    }

    if (!error) console.log('Geojsons minificado no diretório /dist')
})()