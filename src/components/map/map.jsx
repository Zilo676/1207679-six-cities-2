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

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._initializeMap();
  }

  _initializeMap() {
    const map = leaflet.map(`map`, {
      center: MapConfiguration.CITY,
      zoom: MapConfiguration.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(MapConfiguration.CITY, MapConfiguration.ZOOM);
    leaflet
      .tileLayer(MapConfiguration.TILE_LAYER, {
        attribution: MapConfiguration.TILE_ATTRIBUTE
      })
      .addTo(map);

    const icon = leaflet.icon({
      iconUrl: MapConfiguration.ICON_URL,
      iconSize: MapConfiguration.ICON_SIZE
    });

    const offersСoordinates = this.props.coordinates;
    offersСoordinates.forEach((it) => {
      leaflet
        .marker(it, {icon})
        .addTo(map);
    });
  }

  render() {
    return <div className="cities__map map" id="map" />;
  }
}

// TODO: Написать кастомный пропс с длинной массива в 2 элемента
Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export {Map};
