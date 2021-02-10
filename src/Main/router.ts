// External imports
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { createReadStream } from 'fs'

function index(ctx: any)
{
    ctx.type = 'text/html'
    ctx.status = 200
    ctx.body = createReadStream('src/Main/html/index.html')
}

function setupMainRouter(app: Koa)
{
    const router = new Router()

    router.use('/', bodyParser())
    router.get('/', index)

    app.use(router.routes()).use(router.allowedMethods())
}

module.exports = setupMainRouter