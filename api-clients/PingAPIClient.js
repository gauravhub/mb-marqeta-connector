/// <reference path="../typings/nconf/nconf.d.ts" />
var unirest = require('unirest');
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
module.exports = PingAPIClient;
//# sourceMappingURL=PingAPIClient.js.map