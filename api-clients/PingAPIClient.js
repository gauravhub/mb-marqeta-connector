var unirest = require('unirest');
var nconf = require('nconf');
var PingAPIClient = (function () {
    function PingAPIClient() {
    }
    PingAPIClient.prototype.ping = function () {
        console.log("hello ping");
    };
    PingAPIClient.prototype.echo = function () {
        console.log("hello echo");
    };
    return PingAPIClient;
})();
exports.PingAPIClient = PingAPIClient;
//# sourceMappingURL=PingAPIClient.js.map