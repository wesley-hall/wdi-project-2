import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN


class Map extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      center: this.props.location,
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 9
    })

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    this.setMarker()
  }

  setMarker() {
    const { venue } = this.props
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`
        <h3><strong>${venue.name}</strong></h3>
        <p>${venue.address}</p>
        <p>${venue.town} ${venue.postcode}</p>
        <p><strong>Phone:</strong> ${venue.phone}</p>
      `)

    return new mapboxgl.Marker()
      .setLngLat(this.props.location)
      .setPopup(popup)
      .addTo(this.map)
  }


  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
