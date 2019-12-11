/**
* Returna uma lista de paths para uma determinada path e padrão e extensão.
* Lê subpaths se tiver arquivos.
* @param { String } dir Um diretório. Ex. './mapas'
* @param { RegExp } filter Um padrão regex do tipo de arquivo. Ex. /\.geojson$/
* @return { Array } Uma lista de paths
*/
const findInDir = (dir, filter, fileList = []) => {
    const fs = require('fs-extra')
    const path = require('path')
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
        const filePath = path.join(dir, file)
        const fileStat = fs.lstatSync(filePath)

        if (fileStat.isDirectory()) {
            findInDir(filePath, filter, fileList)
            } else if (filter.test(filePath)) {
            fileList.push(filePath)
        }
    })
    return fileList
}

module.exports = findInDir