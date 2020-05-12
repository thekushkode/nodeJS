const fs = require('fs');
const path = require('path');

function filterNames(dirName, ext, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) {
            callback(err);
            return;
        }
        const filteredList = list.filter(item => {
            if ("." + ext === path.extname(item)) {
                return true;
            } else {
                return false;
            }
        });
        callback(null, filteredList);
    });
}

module.exports = filterNames;