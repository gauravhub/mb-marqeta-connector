declare function require(name:string);
var unirest = require('unirest');
var nconf = require('nconf');

class PingAPIClient {
    ping(){
        console.log("hello ping");
    }

    echo(){
        console.log("hello echo");
    }
}

export = PingAPIClient;