const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 3000 ;
const ets2sh = require('./ETS2SH/ETS2SH.js');
const cmd = require("node-cmd");
const crypto = require("crypto");
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get("/ETS2SH/app/check_version", (req, res) => {
    ets2sh.checkVersion(req, res);
});

app.get("/ETS2SH/app/sync", (req, res) => {
    ets2sh.sync(req, res);
});

const verifySignature = (req, res, next) => {
  const payload = JSON.stringify(req.body)
  const hmac = crypto.createHmac('sha1', process.env.SECRET)
  const digest = 'sha1=' + hmac.update(payload).digest('hex')
  const checksum = req.headers['x-hub-signature']

  if (!checksum || !digest || checksum !== digest) {
    return res.status(403).send('auth failed')
  }

  return next()
}

app.post('/git', verifySignature, (req, res) => {
  if (req.headers['x-github-event'] == 'push') {
    cmd.get('bash git.sh', (err, data) => {
      if (err) return console.log(err)
      cmd.run('refresh')
      return res.status(200).send(data)
    })
  } else if(req.headers['x-github-event'] == 'ping') {
    return res.status(200).send('PONG')
  } else {
    return res.status(200).send('Unsuported Github event. Nothing done.')
  }
})

http.listen(port, () => {
    console.log(`Server running on port ${port}`)
});