let serverstemplate = require('../serverstemplate.json')
let mongo = require('../logic/mongo.js');
let secret = require('../secret.json')

class service
{
    constructor(mongoer)
    {
        console.log("Alerting service started");
        this.mongoer = mongoer;
        setInterval(this.work.bind(this),60000); //minute
    }

    // ------- here goes code of the service ------------

    async work()
    {
        console.log("working..");
        // this.mongoer.insertServers(serverstemplate);

        // comment this for less stress:
        // this.randomData();

    }

    async randomData()
    {
        let data=[];
        let peak = await this.getPeakValue();
        let mails = await this.mongoer.getMails();
        let index = Math.floor((Math.random() * 6) + 21); // 21-27

        console.log("generate data");

        for(let i=0; i<index; i++)
        {
            let name = "srv"+i.toString();
            let cpu = Math.floor((Math.random() * 120) + 1);
            let ram = Math.floor((Math.random() * 120) + 1);
            let overloaded = false;

            if(cpu > peak || ram > peak)
                overloaded=true;
            
            data.push({id:i,server:name,cpu:cpu,ram:ram,overloaded:overloaded});
        }
        this.mongoer.insertServers(data);
        this.handlemails(data);
        console.log(data);
    }

    async handlemails(data,peak,cpu,ram)
    {
        let mails = await this.mongoer.getMails();
        let mail;
        for(let i=0; i<data.length;i++)
        {
            mail = "default@mail.com";
            for(let j=0; j<mails.length; j++)
            {
                if(mails[j].server == data[i].server)
                    mail=mails[j].mail;
            }
            if(data[i].overloaded)
                console.log("Sending mail/s to "+mail+" because "+data[i].server+"is overloaded");
        }
    }

    async getPeakValue()
    {
        let data = await this.mongoer.getSettings();
        let peak;
        // console.log(settings);
        for(let i=0;i<data.length;i++)
        {
          if(data[i].name=="peak")
          {
            let str = data[i].value;
            let cropped = str.slice(0,str.length-1)
            peak = Number(cropped);
            console.log(peak);
          }
        }
        return peak;
    }
}

module.exports = service;