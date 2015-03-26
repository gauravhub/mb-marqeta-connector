/// <reference path="../typings/nconf/nconf.d.ts" />

declare function require(name:string);
var unirest = require('unirest');

import nconf = require('nconf');

class PingAPIClient {
    ping(){
        console.log("hello ping");
    }

    echo(){
        console.log("hello echo");
    }
}

export = PingAPIClient;