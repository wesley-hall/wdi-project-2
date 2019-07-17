import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Nav from './nav'
import Footer from './footer'


class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.getEvents = this.getEvents.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location !== this.props.location) {
      this.getEvents()
    }
  }

  getEvents() {
    window.scroll(0,0)
    axios.post('/api/events', {
      eventCode: this.props.match.params.code
    })
      .then(res => this.setState({ events: res.data.results }))
  }


  render() {
    if (!this.state.events) return(
      <div>
        <Nav />
        <main className="section">
          <div className="container">
            <p>Loading...</p>
          </div>
        </main>
      </div>
    )
    return (
      <div>
        <Nav onClick={this.getEvents} />
        <main className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.events && this.state.events.length === 0 && <p>No events found for this category. Please choose another category.</p>}
              {this.state.events && this.state.events.map(event => (
                <div key={event.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                  <Link to={`/events/${this.props.match.params.code}/${event.id}`} >
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">{event.eventname}</p>
                      </header>
                      <div className="card-image">
                        <figure className="image"><img src={event.largeimageurl} alt={event.eventname}/></figure>
                      </div>
                      <div className="card-content">
                        <div className="content"><p>{event.date}</p>
                          <p>{event.venue.name}, {event.venue.town}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>))}
            </div>
          </div>
        </main>
        <Footer onClick={this.getEvents} />
      </div>
    )
  }
}
export default EventsIndex
