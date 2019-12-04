import React from "react";
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const MapConfiguration = {
  ZOOM: 12,
  ICON_URL: `img/pin.svg`,
  ICON_SIZE: [30, 30],
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_ATTRIBUTE: `&copy; <a href="htps://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  CITY: [52.38333, 4.9],
};

const icon = leaflet.icon({
  iconUrl: MapConfiguration.ICON_URL,
  iconSize: MapConfiguration.ICON_SIZE
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    let coordinates = [0, 0];
    if (this.props.city) {
      coordinates = [this.props.city.location.latitude, this.props.city.location.longitude];
    }
    this._initializeMap();
    this._setMapView(coordinates);
    this._setMarkerGroup();
    this._setPoints();
  }

  componentDidUpdate() {

    let coordinates = [0, 0];
    if (this.props.city) {
      coordinates = [this.props.city.location.latitude, this.props.city.location.longitude];
    }
    this._markerGroup.clearLayers();
    this._setMapView(coordinates);
    this._setMarkerGroup();
    this._setPoints();
  }

  _initializeMap() {
    const container = this._mapRef.current;
    this._map = leaflet.map(container, {
      center: MapConfiguration.CITY,
      zoom: MapConfiguration.ZOOM,
      zoomControl: false,
      marker: true
    });
  }

  _setMarkerGroup() {
    this._markerGroup = leaflet.layerGroup().addTo(this._map);
  }

  _setMapView(cityCoordinates) {
    this._map.setView(cityCoordinates, MapConfiguration.ZOOM);
    leaflet
      .tileLayer(MapConfiguration.TILE_LAYER, {
        attribution: MapConfiguration.TILE_ATTRIBUTE
      })
      .addTo(this._map);
  }

  _setPoints() {
    const offersСoordinates = this.props.location;
    offersСoordinates.forEach((it) => {
      leaflet
        .marker([it.latitude, it.longitude], {icon})
        .addTo(this._markerGroup);
    });
  }

  render() {
    return <div className="cities__map map" id="map" ref={this._mapRef} />;
  }
}

Map.propTypes = {
  location: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  })),
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    })
  }),
};

export {Map};
