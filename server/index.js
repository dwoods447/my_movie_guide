const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const bodyParser = require('body-parser');

const movies = require('./routes/movies');
const tvshows = require('./routes/tvshows');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'


async function start () {
  // Init Nuxt.js
  // Build only in dev mode
  const nuxt = new Nuxt(config)
  let { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/movies', movies);
  app.use('/tvshows', tvshows);

  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.use(bodyParser.json());

  console.log(`PORT NUMBER IS : ${port}`);
  console.log(`HOST IS ${host}`);
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening from server/index.js on https://${host}:${process.env.PORT || port}`,
    badge: true
  })
}
start();

