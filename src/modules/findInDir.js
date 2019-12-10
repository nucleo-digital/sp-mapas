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