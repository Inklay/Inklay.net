module.exports = {
    checkVersion: function(req, res) {
        const app_version = "5.7.0"

        if (req.query.v != app_version)
            res.status("200").send("outdated")
        else
            res.status("200").send("current")
    },

    sync: function(req, res) {
        const fs = require('fs')

        game = req.query.game
        dlcstr = req.query.dlcs
        list = req.query.list

        if (game != "ets2" && game != "ats") {
            res.status("400").send("Unknown game.")
            return;
        }
        if (typeof list === 'undefined') {
            var now = new Date();
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            list = day % 8;
            console.log(day + ": " + list);
        }
        data = JSON.parse(fs.readFileSync(`SyncHelper/lists/${game}/${list}/base.json`))
        if (typeof dlcstr !== 'undefined' && dlcstr.length != 0) {
            dlcs = dlcstr.split(',')
            for (i = 0; i < dlcs.length; i++) {
                temp = JSON.parse(fs.readFileSync(`SyncHelper/lists/${game}/${list}/${dlcs[i]}.json`))
                data = {
                    ...data,
                    ...temp,
                }
            }
        }
        res.status("200").send(data)
    }
}