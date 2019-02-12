var express = require('express');
var router = express.Router();
const config = require('../config.json');
let config2 = require('../config2.json');
let fs = require('fs');
let logic = require('../logic/logic.js');
let path = require('path');

let methods = new logic();

const prefix ='/api'

// router.get('/',(req,res) =>
// {
//     res.redirect('/login');
// });

router.get('/',(req,res) =>
{
    // console.log("default route, login");
    // req.session.auth = false;
    // console.log("Your auth status is "+req.session.auth);

    if(req.session.auth)
    {
        res.redirect('/main');
    }
    // else
    // {
    //     res.sendFile(path.join(__dirname, '../alertingjsng_v1/index.html'));
    // }
   
});

router.get('/main',(req,res) =>
{
    console.log("vat?");
    console.log("Your auth status is "+req.session.auth);
    // res.sendFile(path.join(__dirname, '../alertingjsng_v1/index.html'));

    if(!req.session.auth)
    {
        console.log("am i here?");
        console.log(req.session.auth);
        res.redirect('/');
    }
    else
    {
        res.sendFile(path.join(__dirname, '../alertingjsng_v1/index.html'));
    }
});

router.get(prefix+'/initsettings',(req,res) =>
{
    methods.initSettings();
    if(!req.session.admin)
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status:true,hack:true}));
        res.end();
    }
    else
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({status:true}));
        res.end();
    }
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

router.get(prefix+'/logout',(req,res) =>
{
    console.log("logged out");
    req.session.auth = false;
    console.log("?!?!? "+req.session.auth);
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({logout:true}));
    res.end();
    res.redirect('/');
});

router.get(prefix+'/count',(req,res) =>
{
    methods.getCount(res,req);
});

router.get(prefix+'/mails',(req,res) =>
{
    methods.getMails(res,req);
});

router.get(prefix+'/auth',(req,res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({auth:req.session.auth,admin:req.session.admin}));
    res.end();
});

router.get('*', function(req, res){
    res.send('Page not found', 404);
});

module.exports = router;
