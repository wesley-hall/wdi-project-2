require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const skiddleKey = process.env.SKIDDLE_KEY

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

function eventsIndex(req, res) {
  axios.get('https://www.skiddle.com/api/v1/events/search/', {
    params: {
      latitude: 51.509865,
      longitude: -0.118092,
      radius: 5,
      order: 'date',
      eventcode: req.body.eventCode.toUpperCase(),
      api_key: skiddleKey
    }
  })
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(400).json(err))
}

function eventsShow(req, res) {
  axios.get(`https://www.skiddle.com/api/v1/events/${req.params.id}`, {
    params: {
      api_key: skiddleKey
    }
  })
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(400).json(err))
}

// POST used because needed req body
app.post('/api/events', eventsIndex)
app.get('/api/events/:id', eventsShow)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`App is listening on port ${port}`))
