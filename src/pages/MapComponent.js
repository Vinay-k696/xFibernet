import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react/cjs/react.production.min';
import '../Styles/maps.scss'
import '../Styles/responsive.scss'

const mapStyle = {
    //position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '10px',}

export class MapComponent extends Component {
    render() {
        return (
            <>  
            <div className='maps container'>
            <Map google={this.props.google}
                    zoom={18} style={mapStyle}
                    initialCenter={{ lat: 14.790105893920545, lng: 75.40130989047675 }} 
                    >
                    <Marker title="AsvishXFiberNet" key="marker_1"  position={{ lat: 14.79021064673792, lng: 75.40145516395569 }}/>
                </Map> 
            </div>  
            </>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: "AIzaSyDYUHHHnHV1oY00Q8R6A_6_V6g93HjPQB0"    
})(MapComponent)
