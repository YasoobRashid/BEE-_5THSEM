const fs = require("fs");

function myread(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            let fdata = JSON.parse(data);
            if (err) {
                return reject(err);
            } else {
                return resolve(fdata);
            }
        });
    });
}

function mywrite(filepath, data) {
   let fdata = JSON.stringify(data);
    return new Promise((resolve, reject) => {
            fs.writeFile(filepath,fdata, (err) => {

                if(err) return reject(err);
                resolve(fdata);
                
        });
    });
}

module.exports.myread=myread;
module.exports.mywrite=mywrite;