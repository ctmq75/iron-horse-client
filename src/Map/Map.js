import React,{ Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '50%'
  };

  export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 42.3040676,
              lng: -88.4367465
            }
          }
        >
        <Marker
        position={{lat: 42.3040676, lng: -88.4367465}} 
        onClick={this.onMarkerClick}
        name={'Roscoe Woodstock Antique Mall'}
      />
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
          <p>Open 7 days a week!</p>
          <ul>
              <li>890 Lake Ave</li>
              <li>Woodstock, IL 60090</li>
              <li>815.334.8960</li>
              <li>*Booth #M7</li>

          </ul>
          <p>NO REPRODUCTIONS - NO CRAFTS</p>
          <p>35,000 Sq. Ft. Of QUALITY ANTIQUES!</p>
        </div>
      </InfoWindow>
      </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAbs_-rCldIrwqDWH_cu-I8uXKfJPdxjPc'
  })(MapContainer);