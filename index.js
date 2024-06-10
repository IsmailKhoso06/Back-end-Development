require('dotenv').config()
const express = require('express')
const app = express()
const port = 3301

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('//', (req, res) => {
  res.send('Hello Ismael!')
})


app.get('/login', (req, res) => {
    res.send('<h1>This is the login page</h1>');
  });

  app.get('/ismaelkhoso', (req, res) => {
    res.send('<h3>Hey Ismael Khoso Page is Here</h3>')
  })
  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})