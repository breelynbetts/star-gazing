import React, { useState } from 'react'
import { 
    GoogleMap, 
    Marker, 
    InfoWindow, 
    withGoogleMap, 
    withScriptjs 
} from "react-google-maps";
import moment from 'moment'; 

const Map = props => {
    const [selectedEvent, setSelectedEvent] = useState(null)
    const data = Array.from(props)
    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        >
            {data.map((loc) => {
                return (
                    <div>
                        {loc.geometries.map((coord) => {
                            return (
                            <div>
                                <Marker 
                                    key={coord.date}
                                    position={{
                                        lat: coord.coordinates[0],
                                        lng: coord.coordinates[1]
                                    }}
                                    onClick={() => {setSelectedEvent(coord)}}
                                />
                                {/* {selectedEvent && (
                                <InfoWindow
                                    onCloseClick={() => {setSelectedEvent(null)}}
                                    position={{
                                        lat: selectedEvent.coordinates[1],
                                        lng: selectedEvent.coordinates[0]
                                    }}
                                >
                                    <div>
                                        <p>{loc.title}</p>
                                        <p>{moment(selectedEvent.date).format('LLLL')}</p>
                                    </div>
                                </InfoWindow>
                                )} */}
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </GoogleMap>
    )
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function MapContainer() {
    return (
        <div style={{ width: "50%", height: "400px", marginLeft: "25%" }}>
          <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
    );
}

export {
    MapContainer,
    Map
}