let mongoose = require('mongoose');
let settingschema = require('../schemas/settingschema.js');
let serverschema = require('../schemas/serverschema.js');
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
}

module.exports = mongo;