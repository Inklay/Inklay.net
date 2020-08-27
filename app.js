const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 3000 ;
const ets2sh = require('./ETS2SH/ETS2SH.js');
const cmd = require("node-cmd");
const crypto = require("crypto");

app.get("/ETS2SH/app/check_version", (req, res) => {
    ets2sh.checkVersion(req, res);
});

app.get("/ETS2SH/app/sync", (req, res) => {
    ets2sh.sync(req, res);
});

app.post('/git', (req, res) => {
    let hmac = crypto.createHmac("sha1", process.env.SECRET);
    let sig  = "sha1=" + hmac.update(JSON.stringify(req.body)).digest("hex");

    if (req.headers['x-github-event'] == "push" && sig == req.headers['x-hub-signature']) { 
        cmd.run('chmod 777 git.sh');
        cmd.get('./git.sh', (err, data) => {
            if (data) console.log(data);
            if (err) console.log(err);
        });
        cmd.run('refresh');
        console.log("> [GIT] Updated with origin/master");
    }
    res.sendStatus(200);
  });

http.listen(port, () => {
    console.log(`Server running on port ${port}`)
});