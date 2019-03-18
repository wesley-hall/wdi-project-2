import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      eventcodes: [
        { code: 'fest', name: 'Festivals'},
        { code: 'live', name: 'Live Music'},
        { code: 'club', name: 'Clubbing and Dance Music'},
        { code: 'date', name: 'Dating'},
        { code: 'theatre', name: 'Theatre/Dance'},
        { code: 'comedy', name: 'Comedy'},
        { code: 'exhib', name: 'Exhibitions and Attractions'},
        { code: 'kids', name: 'Kids/Family'},
        { code: 'barpub', name: 'Bar/Pub'},
        { code: 'lgb', name: 'Gay/Lesbian'},
        { code: 'sport', name: 'Sporting'},
        { code: 'arts', name: 'The Arts'}
      ]
    }
  }

  render() {
    return (
      <main className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container container-home">
            <h2 className="title">G T F O</h2>
            <div className="tile is-ancestor">
              {this.state.eventcodes.map(eventcode =>
                <div key={eventcode.code} className="tile is-parent is-3">
                  <Link to={`/events/${eventcode.code}`} className="has-text-centered">
                    <div id={eventcode.code} className="tile is-child box">
                      {eventcode.name}
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
