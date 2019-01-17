let serverstemplate = require('../serverstemplate.json')
let mongo = require('../logic/mongo.js');
let secret = require('../secret.json')

class service
{
    constructor(mongoer)
    {
        console.log("Alerting service started");
        this.mongoer = mongoer;
        setInterval(this.work.bind(this),3000);
    }

    async work()
    {
        console.log("working..");
        // this.mongoer.insertServers(serverstemplate);
        
        // ------- here goes code of the service ------------
    }
}

module.exports = service;