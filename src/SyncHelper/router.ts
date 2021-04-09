// External imports
import fs from 'fs'
import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

function checkVersion(ctx: any)
{
    if (ctx.request.query.v == "5.9.0")
    {
        ctx.body = "current"
    }
    else
    {
        ctx.body = "outdated"
    }
}

function sync(ctx: any)
{
    const game: string = ctx.request.query.game
    var list: string = ctx.request.query.list
    const dlcstr: string = ctx.request.query.dlcs

    if (game != "ets2" && game != "ats")
    {
        ctx.status = 400
        ctx.body = "Unknown game."
        return
    }
    if (typeof list === 'undefined')
    {
        const now: Date = new Date()
        const start: Date = new Date(now.getFullYear(), 0, 0);
        const diff: number = now.getTime() - start.getTime()
        const oneDay: number = 1000 * 60 * 60 * 24
        const day: number = Math.floor(diff / oneDay)
        list = (day % 8).toString()
    }
    var data: any = JSON.parse(fs.readFileSync(`src/SyncHelper/lists/${game}/${list}/base.json`).toString())
    if (typeof dlcstr !== 'undefined' && dlcstr.length != 0)
    {
        const dlcs: Array<string> = dlcstr.split(',')
        for (let i: number = 0; i < dlcs.length; i++)
        {
            for (let j = 0; j < dlcs.length; j++)
            {
                let path: string
                if (i == j)
                {
                    continue
                }
                if (i < j)
                {
                    path = `src/SyncHelper/lists/${game}/${list}/${dlcs[i]}-${dlcs[j]}.json`
                }
                else
                {
                    path = `src/yncHelper/lists/${game}/${list}/${dlcs[j]}-${dlcs[i]}.json`
                }
                if (fs.existsSync(path))
                {
                    let temp: any = JSON.parse(fs.readFileSync(path).toString())
                    data = {
                        ...data,
                        ...temp,
                    }
                }
            }
            let temp: any = JSON.parse(fs.readFileSync(`src/SyncHelper/lists/${game}/${list}/${dlcs[i]}.json`).toString())
            data = {
                ...data,
                ...temp,
            }
        }
    }
    ctx.body = data;
}

function setupSyncHelperRouter(app: Koa)
{
    const router = new Router({
        prefix: '/SyncHelper'
    })

    router.use('/', bodyParser())
    router
        .get('/app/check_version', checkVersion)
        .get('/app/sync', sync)

    app.use(router.routes()).use(router.allowedMethods())
}

module.exports = setupSyncHelperRouter