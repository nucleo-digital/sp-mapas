const apiIndex = (baseUrl, filesPaths) => {
    const path = require('path')
    const list = filesPaths.map(path => path.replace('mapas', baseUrl))

    let markdownList = list.map(url => {
        const parent = path.basename(path.dirname(url))
        const basename = parent === 'sp-mapas' ? path.basename(url) : `${parent}/${path.basename(url)}`
        const name = path.basename(url, '.geojson')
        const urlParsed = url.replace(/\\/g, '/')

        return `|${name}| [http](${urlParsed}) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/${basename}) |`
    })
    const markdown = `| arquivo | http | embed |\n| - | - | - |\n${markdownList.join('\n')}`

    return { list, markdown }
}

module.exports = apiIndex