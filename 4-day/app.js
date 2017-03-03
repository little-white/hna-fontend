var request = require('request');
var fs = require("fs");

var assetMapJson = JSON.parse(fs.readFileSync('asset-map.json', 'utf8'));
var assetObj = assetMapJson.library;

if (!fs.existsSync(assetMapJson.directory)) {
    fs.mkdirSync(assetMapJson.directory, 0777);
}

Object.keys(assetObj).map(function(key) {
    request(assetObj[key]).pipe(fs.createWriteStream(assetMapJson.directory + '/' + key + '.js'));
});
