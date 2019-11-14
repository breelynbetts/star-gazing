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
    const [title, setTitle] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchEvents({limit: 8});
                setLocations(result.events)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
      }, []);
    
    return (
        <div>
        <GoogleMap
            defaultZoom={1.5}
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
                                        lat: loc.geometries[0].coordinates[1],
                                        lng: loc.geometries[0].coordinates[0]
                                    }}
                                    onClick={() => {
                                        setSelectedEvent(coord); setTitle(loc.title)
                                    }}
                                    name={loc.title}
                                />
                                {selectedEvent && (
                                <InfoWindow
                                    onCloseClick={() => {setSelectedEvent(null)}}
                                    position={{
                                        lat: selectedEvent.coordinates[1],
                                        lng: selectedEvent.coordinates[0]
                                    }}
                                >
                                    <div>
                                        <p>{title}</p>
                                        <p>{moment(selectedEvent.date).format('LLLL')}</p>
                                    </div>
                                </InfoWindow>
                                )}
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </GoogleMap>
        {error && (
            <div className="error">
                {error}
            </div>
        )}
        </div>
)}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function MapContainer() {
    return (
        <div style={{ width: "50%", height: "425px", marginLeft: "25%", position:'relative', zIndex:'0', marginBottom:'25px'}}>
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