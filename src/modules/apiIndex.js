const apiIndex = (baseUrl, filesPaths) => {
    const path = require('path')
    const list = filesPaths.map(path => path.replace('mapas', baseUrl))

    let markdownList = list.map(url => { 
        const name = path.basename(url, '.geojson')
        return `- [${name}](${url})`
    })

    const markdown = `## Lista de mapas\n${markdownList.join('\n')}`

    return { list, markdown }
}

module.exports = apiIndex