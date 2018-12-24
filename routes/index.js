var express = require('express');
var router = express.Router();
const config = require('../config.json');
let config2 = require('../config2.json');
let fs = require('fs');
let logic = require('../logic/logic.js');

let methods = new logic();

router.get('/initsettings',(req,res) =>
{
    methods.initSettings();
    res.send("init settings in mongo");
});

router.get('/initservers',(req,res) =>
{
    methods.initServers();
    res.send("init servers in mongo");
});

router.get('/getsettings',(req,res) =>
{
    methods.getSettings(res);
});

router.get('/getservers',(req,res) =>
{
    methods.getServers(res);
});

router.post('/postsettings',(req,res) =>
{
    methods.postSettings(res,req);
});

router.post('/postservers',(req,res) =>
{
    methods.postServers(res,req);
});

module.exports = router;