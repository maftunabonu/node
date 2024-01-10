const url = "http://mylogger.com";

console.log(__filename);
console.log(__dirname);
function logger (message) {
    console.log(message);
}
module.exports.logger = logger;
module.exports.endPoint = url;
