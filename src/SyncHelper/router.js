"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External imports
var fs_1 = __importDefault(require("fs"));
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
function checkVersion(ctx) {
    if (ctx.request.query.v == "5.8.1") {
        ctx.body = "current";
    }
    else {
        ctx.body = "outdated";
    }
}
function sync(ctx) {
    var game = ctx.request.query.game;
    var list = ctx.request.query.list;
    var dlcstr = ctx.request.query.dlcs;
    if (game != "ets2" && game != "ats") {
        ctx.status = 400;
        ctx.body = "Unknown game.";
        return;
    }
    if (typeof list === 'undefined') {
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now.getTime() - start.getTime();
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        list = (day % 8).toString();
    }
    var data = JSON.parse(fs_1.default.readFileSync("src/SyncHelper/lists/" + game + "/" + list + "/base.json").toString());
    if (typeof dlcstr !== 'undefined' && dlcstr.length != 0) {
        var dlcs = dlcstr.split(',');
        for (var i = 0; i < dlcs.length; i++) {
            for (var j = 0; j < dlcs.length; j++) {
                var path = void 0;
                if (i == j) {
                    continue;
                }
                if (i < j) {
                    path = "src/SyncHelper/lists/" + game + "/" + list + "/" + dlcs[i] + "-" + dlcs[j] + ".json";
                }
                else {
                    path = "src/yncHelper/lists/" + game + "/" + list + "/" + dlcs[j] + "-" + dlcs[i] + ".json";
                }
                if (fs_1.default.existsSync(path)) {
                    var temp_1 = JSON.parse(fs_1.default.readFileSync(path).toString());
                    data = __assign(__assign({}, data), temp_1);
                }
            }
            var temp = JSON.parse(fs_1.default.readFileSync("src/SyncHelper/lists/" + game + "/" + list + "/" + dlcs[i] + ".json").toString());
            data = __assign(__assign({}, data), temp);
        }
    }
    ctx.body = data;
}
function setupSyncHelperRouter(app) {
    var router = new koa_router_1.default({
        prefix: '/SyncHelper'
    });
    router.use('/', koa_bodyparser_1.default());
    router
        .get('/app/check_version', checkVersion)
        .get('/app/sync', sync);
    app.use(router.routes()).use(router.allowedMethods());
}
module.exports = setupSyncHelperRouter;
