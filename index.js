var db = require('./db'),
    LayerModel = require('./LayerModel'),
    fs = require('fs');

function getFiles(dir,files_){
    files_ = files_ || [];
    if (typeof files_ === 'undefined') files_=[];
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];

        if (name.indexOf('.geojson') > 0) {
            files_.push(name);
        }
    }
    return files_;
}

getFiles('.').forEach(function (v,k) {
    fs.readFile(v, {encoding: 'utf-8'}, function (err, data) {
      if (err) throw err;

        var geo_file = JSON.parse(data);
        var name_layer = v.substr(5);
        name_layer = name_layer.replace(/.geojson/, '');

        var layer = new LayerModel({name:name_layer, features:geo_file})

        layer.save(function(err2,results) {
            if (err) console.log(err);
            console.log('Suuuuucesso: '+ name_layer);
        });
    });
});