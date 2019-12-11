(function () {
    const fs = require('fs-extra')
    const path = require('path')
    const shapefile = require('shapefile')
    const findInDir = require('./modules/findInDir')

    const shapes = findInDir('./shapes', /.shp$/)

    const createGeojson = (shpPath, geoJsonPath, features = []) => {
        shapefile.open(shpPath)
            .then(source => source.read()
                .then(function createFile(result) {

                    if (result.done) return features//base case

                    features.push(result.value)

                    return source.read().then(createFile)
            }))
            .then(features => {
                const shapeContent = {
                    type: "FeatureCollection",
                    features
                }
                try {
                    const name = path.basename(shpPath, '.shp')
                    fs.writeFileSync(`${__dirname}/${geoJsonPath}/${name}.geojson`, JSON.stringify(shapeContent))
                    console.log(`Arquivo:  '${geoJsonPath}/${name}.geojson' criado`)
                }
                catch (err) { throw new Error(err) }
            })
            .catch(error => console.error(error.stack))
    }

    shapes.forEach(shape => createGeojson(shape, '../mapas'))
})()