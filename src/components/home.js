import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.eventCodes = [
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

  render() {
    return (
      <main className="hero is-white is-fullheight">
        <div className="hero-body">
          <div className="container container-home">
            <h2 className="title">Get Out in London</h2>
            <div className="tile is-ancestor">
              {this.eventCodes.map(eventCode =>
                <div key={eventCode.code} className="tile is-parent is-3">
                  <Link to={`/events/${eventCode.code}`} className="has-text-centered">
                    <div id={eventCode.code} className="tile is-child box">
                      {eventCode.name}
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <h4 className="has-text-centered has-text-grey-lighter is-italic">In memory of Greg</h4>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
