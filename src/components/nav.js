import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
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
    return(
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">G T F O</Link>
          <a role="button"
            className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Event Categories</a>
              <div className="navbar-dropdown">
                {this.state.eventcodes.map(eventcode =>
                  <Link key={eventcode.code} to={`/events/${eventcode.code}`} onClick={this.props.onClick} className="dropdown-item">{eventcode.name}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default Nav
