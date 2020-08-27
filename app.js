const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 3000 ;
const SyncHelper = require('./SyncHelper/SyncHelper.js');


app.get("/SyncHelper/app/check_version", (req, res) => {
    SyncHelper.checkVersion(req, res);
});

app.get("/SyncHelper/app/sync", (req, res) => {
    SyncHelper.sync(req, res);
});

app.get("/", (req, res) => {
    res.status("200").send("Hello there");
});

http.listen(port, () => {
    console.log(`Server running on port ${port}`)
});