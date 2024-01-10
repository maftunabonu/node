const fs = require('fs');

// const files = fs.readdirSync('./') // files in the current directory
// console.log(files);

fs.readdir("./wd", function (err, files){
    if(err) console.log("Error:", err);
    else console.log(files);
})