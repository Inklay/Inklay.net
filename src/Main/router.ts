// External imports
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

function index(ctx: any)
{
    ctx.status = 200
    ctx.body = '<h1>Lists of projects running on this server:</h1><ul><a href="https://github.com/Inklay/WebService/tree/main/src/SyncHelper"><li>ETS2 & ATS Sync Helper</li></a></ul>'
}

function setupMainRouter(app: Koa)
{
    const router = new Router()

    router.use('/', bodyParser())
    router.get('/', index)

    app.use(router.routes()).use(router.allowedMethods())
}

module.exports = setupMainRouter