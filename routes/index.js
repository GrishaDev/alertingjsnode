var express = require('express');
var router = express.Router();
const config = require('../config.json');
let config2 = require('../config2.json');
let fs = require('fs');
let logic = require('../logic/logic.js');
let path = require('path');

let methods = new logic();

const prefix ='/api'

router.get(prefix+'/',(req,res) =>
{
    res.sendFile(path.join(__dirname, '../alertingjsng_v1/index.html'));
});

router.get('/main',(req,res) =>
{
    console.log("vat?");
    console.log("Your auth status is "+req.session.auth);
    if(!req.session.auth)
    {
        console.log("am i here?");
        console.log(req.session.auth);
        res.redirect('/');
    }
    else
    {     
        res.redirect('/main');
    }
});

router.get(prefix+'/initsettings',(req,res) =>
{
    methods.initSettings();
    res.send("init settings in mongo");
});

router.get(prefix+'/initservers',(req,res) =>
{
    methods.initServers();
    res.send("init servers in mongo");
});

router.get(prefix+'/initmails',(req,res) =>
{
    methods.initMails();
    res.send("init mails in mongo");
});

router.get(prefix+'/change',(req,res) =>
{
    methods.change();
    res.send("trigger servers change");
});

router.get(prefix+'/getsettings',(req,res) =>
{
    methods.getSettings(res);
});

router.get(prefix+'/getservers',(req,res) =>
{
    methods.getServers(res);
});

router.post(prefix+'/postsettings',(req,res) =>
{
    methods.postSettings(res,req);
});

router.post(prefix+'/postservers',(req,res) =>
{
    methods.postServers(res,req);
});

router.post(prefix+'/postmails',(req,res) =>
{
    methods.postMails(res,req);
});

router.post(prefix+'/loginsubmit',(req,res) =>
{
    methods.login(res,req);
});

module.exports = router;
