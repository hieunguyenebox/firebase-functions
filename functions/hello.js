const functions = require('firebase-functions')
const app = require('./app')
const auth = require('./auth')

app.use(auth)
app.get('/hello', (req, res) => {
  res.json({ data: { msg: 'hello' } })
})

module.exports = functions.https.onRequest(app);