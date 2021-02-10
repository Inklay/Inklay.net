"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_router_1 = __importDefault(require("koa-router"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
function index(ctx) {
    ctx.status = 200;
    ctx.body = '<h1>Lists of projects running on this server:</h1><ul><a href="https://github.com/Inklay/WebService/tree/main/SyncHelper"><li>ETS2 & ATS Sync Helper</li></a></ul>';
}
function setupMainRouter(app) {
    var router = new koa_router_1.default();
    router.use('/', koa_bodyparser_1.default());
    router.get('/', index);
    app.use(router.routes()).use(router.allowedMethods());
}
module.exports = setupMainRouter;
