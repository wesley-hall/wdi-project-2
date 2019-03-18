import React from 'react'
import axios from 'axios'

import Nav from './nav'
import Map from './map'
import Footer from './footer'

import skiddleLogo from '../images/skiddle.png'

const skiddleKey = process.env.SKIDDLE_KEY


class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/${this.props.match.params.id}`, {
      params: {
        api_key: skiddleKey
      }
    })
      .then(res => this.setState({ event: res.data.results }))
  }

  render() {
    if (!this.state.event) return(
      <div>
        <Nav />
        <main className="section">
          <div className="container">
            <p>Loading...</p>
          </div>
        </main>
      </div>
    )
    const {event} = this.state
    const location = {
      lat: event.venue.latitude,
      lng: event.venue.longitude
    }
    const venue = {...event.venue}
    return(
      <div>
        <Nav />
        <main className="section">
          <div className="container">
            {!event && <p>Loading...</p>}
            <div className="columns">
              <div className="column is-one-quarter-desktop">
                <figure className="image">
                  <img src={event.largeimageurl} alt={event.eventname} />
                </figure>
              </div>
              <div className="column is-half-desktop">
                <h4 className="title is-4">{event.eventname}</h4>
                <p>{event.description}</p>
                <h5><strong>Date:</strong> {event.date}</h5>
                <p><strong>Doors open:</strong> {event.openingtimes.doorsopen}</p>
                <p><strong>Doors close:</strong> {event.openingtimes.doorsclose}</p>
                <a className="button button-skiddle" href={event.link} target="_blank" rel="noopener noreferrer"><img src={skiddleLogo} alt="Click for more on Skiddle"/></a>
              </div>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-one-third has-text-right">
                <h4 className="title is-4 location-title">{event.venue.name}, {event.venue.town}</h4>
                <p>{event.venue.address}</p>
                <p>{event.venue.town}</p>
                <p>{event.venue.postcode}</p>
                <p>{event.venue.country}</p>
                <p>{event.venue.phone}</p>
              </div>
              <div className="column is-two-thirds">
                <Map location={location} venue={venue} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default EventsShow
