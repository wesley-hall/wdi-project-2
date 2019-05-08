import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor() {
    super()

    this.state = {
      eventcodes: [
        { code: 'fest', name: 'Festivals'},
        { code: 'live', name: 'Live Music'},
        { code: 'club', name: 'Clubbing/Dance Music'},
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
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="footnav">
            {this.state.eventcodes.map(eventcode =>
              <div key={eventcode.code}>
                <Link to={`/events/${eventcode.code}`} onClick={this.props.onClick}>{eventcode.name}</Link>
              </div>
            )}
          </div>
          <p><strong>Get Out in London</strong> made with &hearts; by <strong>GA</strong> & <strong>WH</strong></p>
        </div>
      </footer>
    )
  }
}

export default Footer
