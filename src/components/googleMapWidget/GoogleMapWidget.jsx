import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.map = null;
    this.marker = null;
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap = () => {
    if (!window.google) {
      const googleMapScript = document.createElement('script');
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener('load', () => {
        this.initMap();
      });
    } else {
      this.initMap();
    }
  }

  initMap = () => {
    this.map = new window.google.maps.Map(this.googleMapRef.current, {
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: 15
    });

    this.marker = new window.google.maps.Marker({
      position: { lat: this.props.latitude, lng: this.props.longitude },
      map: this.map,
      title: 'Mi Ubicación'
    });
  }

  render() {
    return (
      <div
        ref={this.googleMapRef}
        style={{ width: '100%', height: '300px', borderRadius: '8px' }}
      />
    );
  }
}

export default GoogleMap;
