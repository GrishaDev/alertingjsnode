let mongoose = require('mongoose');
let settingschema = require('../schemas/settingschema.js');
let serverschema = require('../schemas/serverschema.js');
let mailschema = require('../schemas/mailschema.js');
let groupschema = require('../schemas/groupschema.js');

//let config2 = require('../config2.json');

class mongo
{
    constructor(path)
    {
        mongoose.connect(path);
    }
    async test()
    {
        console.log("mongo test");
    }
    async insertSettings(data)
    {
        try
        {
            await settingschema.remove({});

            for(let i=0;i<data.length;i++)
            {
                let insertmongo = await new settingschema(data[i]);
                insertmongo.save();
            }
            console.log("settings inserted to mongo");
        }
        catch(err)
        {
            console.log("dberror:: "+err);
        }
    }
    async getSettings()
    {
        try
        {
            let data = await settingschema.find({});
            console.log("got settings from mongo");
            return data;
        }
        catch(err)
        {
            console.log("dberror:: "+err);
            return "error";
        }
    }

    async getServers()
    {
        try
        {
            let data = await serverschema.find({});
            console.log("got servers from mongo");
            return data;
        }
        catch(err)
        {
            console.log("dberror:: "+err);
            return "error";
        }
    }

    async insertServers(data)
    {
        try
        {
            await serverschema.remove({});

            for(let i=0;i<data.length;i++)
            {
                let insertmongo = await new serverschema(data[i]);
                insertmongo.save();
            }
            console.log("servers inserted to mongo");
        }
        catch(err)
        {
            console.log("dberror:: "+err);
        }
    }
    async getMails()
    {
        try
        {
            let data = await mailschema.find({});
            console.log("got mails from mongo");
            return data;
        }
        catch(err)
        {
            console.log("dberror:: "+err);
            return "error";
        }
    }
    async insertMails(data)
    {
        try
        {
           // await mailschema.remove({});
            let obj = await mailschema.find({server: data.server});
            console.log("INSERT GROUPS? "+obj)

            if(obj && obj.length)
            {
                console.log("UPDATE NAW");
                await mailschema.findOneAndUpdate({server: data.server}, 
                    {$set:data}, 
                    {new: true});
            }
            else
            {
                console.log("NEW?!");
                let insertmongo = await new mailschema(data);
                insertmongo.save();
            }

            console.log("mails inserted to mongo");
        }
        catch(err)
        {
            console.log("dberror:: "+err);
        }
    }

    async getGroups()
    {
        try
        {
            let data = await groupschema.find({});
            console.log("got groups from mongo");
            return data;
        }
        catch(err)
        {
            console.log("dberror:: "+err);
            return "error";
        }
    }
    async insertGroups(data)
    {
        try
        {
           // await mailschema.remove({});
            let obj = await groupschema.find({server: data.server});
            console.log("INSERT GROUPS? "+obj)
            if(obj && obj.length)
            {
                console.log("UPDATE NAW");
                await groupschema.findOneAndUpdate({server: data.server}, 
                    {$set:data}, 
                    {new: true});
            }
            else
            {
                console.log("NEW?!");
                let insertmongo = await new groupschema(data);
                insertmongo.save();
            }

            console.log("groups inserted to mongo");
        }
        catch(err)
        {
            console.log("dberror:: "+err);
        }
    }

    
}

module.exports = mongo;