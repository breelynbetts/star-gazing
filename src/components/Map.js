import React, { useState, useEffect } from 'react'
import { 
    GoogleMap, 
    Marker, 
    InfoWindow, 
    withGoogleMap, 
    withScriptjs 
} from "react-google-maps";

import { searchEvents } from '../api.js'
import moment from 'moment'

function Map() {
    const [locations, setLocations] = useState([])
    const [error, setError] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchEvents({limit: 5});
                setLocations(result.events)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
      }, []);
    
    return (
        <GoogleMap
            defaultZoom={1}
            defaultCenter={{ lat: 0, lng: 0}}
        >
            {locations.map((loc) => {
                return (
                    <div>
                        {loc.geometries.map((coord) => {
                            return (
                            <div>
                                <Marker 
                                    key={coord.date}
                                    position={{
                                        lat: coord.coordinates[1],
                                        lng: coord.coordinates[0]
                                    }}
                                    onClick={() => {setSelectedEvent(coord)}}
                                    name={loc.title}
                                />
                                
                                <InfoWindow
                                    onCloseClick={() => {setSelectedEvent(null)}}
                                    position={{
                                        lat: coord.coordinates[1],
                                        lng: coord.coordinates[0]
                                    }}
                                >
                                    <div>
                                        <p>{loc.title}</p>
                                        <p>{moment(coord.date).format('LLLL')}</p>
                                    </div>
                                </InfoWindow>
                                
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </GoogleMap>
)}

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