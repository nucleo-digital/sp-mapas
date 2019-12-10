const apiIndex = (baseUrl, filesPaths) => {
    const path = require('path')
    const list = filesPaths.map(path => path.replace('mapas', baseUrl))

    let markdownList = list.map(url => {
        const basename = path.basename(url)
        const name = path.basename(url, '.geojson')
        const urlParsed = url.replace(/\\/g, '/')
        return `|${name}| [url](${urlParsed}) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/${basename}) |`
    })
    const markdown = `| nome | json | preview |\n| - |:-:|:-:|\n${markdownList.join('\n')}`

    return { list, markdown }
}

module.exports = apiIndex