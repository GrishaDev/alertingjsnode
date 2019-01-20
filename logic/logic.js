let mongo = require('../logic/mongo.js');
let service = require('../logic/service.js');
let config2 = require('../config2.json');
let serverstemplate = require('../serverstemplate.json')
let serverstemplate2 = require('../serverstemplate2.json')
let mailstemplate = require('../mailstemplate.json')
let secret = require('../secret.json')
let session = require('express-session');

class methods
{
    constructor()
    {
        this.mongoer = new mongo(secret.mongopath);
        this.servicer = new service(this.mongoer);
    }
    async initSettings() 
    {
        this.mongoer.insertSettings(config2);
    }
    async initServers() 
    {
        this.mongoer.insertServers(serverstemplate);
    }

    async initMails() 
    {
        this.mongoer.insertMails(mailstemplate);
    }

    async getSettings(res)
    {
        let data = await this.mongoer.getSettings();
        
        if(data === "error")
        {
            res.header("Access-Control-Allow-Origin", "*");
            res.send({id:-1,name:"error",value:"its mongodb error, try again later"});
        }
        else
        {
            let configjsn=[];

            for(let i=0; i<data.length;i++)
            {
                configjsn.push({id:data[i].id,name:data[i].name,value:data[i].value});
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.send(configjsn);
            console.log("sent settings");
        }
    }
    async postSettings(res,req)
    {
        await this.mongoer.insertSettings(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status:true}));
        res.end();
    }

    async getServers(res)
    {
        let data = await this.mongoer.getServers();

        let maildata = await this.mongoer.getMails();

        if(data === "error")
        {
            res.header("Access-Control-Allow-Origin", "*");
            res.send({id:-1,server:"error",cpu:"error",ram:"error",overloaded:"true",mail:"its mongodb error, try again later"});
        }
        else
        {
            let configjsn=[];

            for(let i=0; i<data.length;i++)
            {
                configjsn.push({id:data[i].id,server:data[i].server,cpu:data[i].cpu,ram:data[i].ram,overloaded:data[i].overloaded,mail:"default@mail.com"});
               // configjsn[i].mail = "default@mail.com";
                for(let j=0; j<maildata.length; j++)
                {
                    if(maildata[j].server == data[i].server)
                    {
                        configjsn[i].mail = maildata[j].mail;
                    }
                }
               // if(maildata[i].server == data[i].server
               // configjsn.push({id:data[i].id,server:data[i].server,cpu:data[i].cpu,ram:data[i].ram,overloaded:data[i].overloaded,mail:data[i].mail});
            }
            res.header("Access-Control-Allow-Origin", "*");
            res.send(configjsn);
            console.log("sent settings");
        }
    }

    async postServers(res,req)
    {
        await this.mongoer.insertServers(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status:true}));
        res.end();
    }

    async postMails(res,req)
    {
        console.log(req.body);
        await this.mongoer.insertMails(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status:true}));
        res.end();
    }

    async change()
    {
        await this.mongoer.insertServers(serverstemplate2);
    }

    async login(res,req)
    {
        var user = req.body.user;
        var pass = req.body.pass;

        if(user == secret.user && pass == secret.pass)
        {
            req.session.auth = true;
            console.log(req.session.auth);
            console.log("Authorized!");
            req.session.auth = true;
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({auth:true})); 
            res.end();
        }
        else
        {
            console.log("Not Authorized!");
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({auth:false})); 
            res.end();
        }
    }
}

module.exports = methods;