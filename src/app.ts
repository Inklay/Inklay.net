// External imports
import fs from 'fs'
import Koa from 'koa'
import http from 'http'
import http2 from 'http2'
import mount from 'koa-mount'
import serve from 'koa-static'
import { constants } from 'crypto'

// General
const app = new Koa()
const react = new Koa()
react.use(serve("frontend/build"))
app.use(mount('/', react))
app.use(mount('/SyncHelper', react))
app.use(mount('/Pokemon-TCG', react))
var server: any

// HTTP Unsecured Server
function setupHttp() {
    const port: string = process.env.PORT || '80'
    if (process.env.USE_HTTPS === 'true')
    {
        const requestListener = function (req: any, res: any)
        {
            res.writeHead(301,
            {
                'Location':`https://${req.headers.host}${req.url}`
            })
            res.end()
        }
        http.createServer(requestListener).listen(port)
    }
    else
    {
        server = http.createServer().listen(port).on('request', app.callback())
    }
    console.log(`Server running HTTP at http://127.0.0.1:${port}`)
}

// HTTPS Secured Server
function setupHttps() {
    const port: string = process.env.SPORT || '443'
    const SSLOptions = {
        allowHTTP1: true,
        key: fs.readFileSync(`${process.env.CERTIFICATES}/privkey2.pem`),
        cert: fs.readFileSync(`${process.env.CERTIFICATES}/cert2.pem`),
        ca: fs.readFileSync(`${process.env.CERTIFICATES}/chain2.pem`),
        secureOptions: constants.SSL_OP_NO_SSLv2 | constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_TLSv1 | constants.SSL_OP_NO_TLSv1_1
    }
    server = http2.createSecureServer(SSLOptions).listen(port).on('request', app.callback())
    console.log(`Server running HTTPS at https://127.0.0.1:${port}`)
}

// Error handler
function setupFallback() {
    app.use(async (ctx: Koa.Context, next: Koa.Next) => {
        try {
            await next()
        }
        catch (err)
        {
            // Displays error
            ctx.status = err.status || 500;
            ctx.type = 'json'
            ctx.body = {
                status: 'KO',
                code: err.status,
                message: err.message
            }
            // Adds possibility to handle errors
            ctx.app.emit('error', err, ctx)
        }
    })
}

// Routers
function setupRouters() {
    require('./SyncHelper/router')(app)
}

// Uses HTTPS if given
if (process.env.USE_HTTPS === 'true')
    setupHttps()
setupHttp()
setupFallback()
setupRouters()
