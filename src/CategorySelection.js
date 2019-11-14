import React, { useEffect, useState } from 'react'
import { searchEvents } from './api.js'

import './style/CategorySelection.css'
import { apiHost } from './api'

import moment from 'moment'; 
import {MapContainer, Map} from './components/Map.js'

function CategorySelection() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => apiHost('http://localhost:4000'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchEvents({limit: 8});
                setData(result.events)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
      }, []);

    console.log(data)

    return (
        <div>
            <MapContainer>
                <Map />
            </MapContainer>
           <span >
           {data === undefined ? <div>Loading ...</div> : 
            <div className='events'>
                {data.map((event) => {
                    return (
                        <div className='eventColumns'> 
                            <div key={event.id} className='eventDiv'>
                                <p className='eventName'key={event.id}>{event.title}</p>
                                <p className='date'>{moment(event.geometries[0].date).format('LLLL')}</p>
                                <p className="category">Event Category: {event.categories[0].title}</p>  
                            </div>
                        </div>
                    )
                })}
            </div>
            }
            {error && (
                <div className="error">
                    {error}
                </div>
            )}
       </span>
    </div>
    )
}


export default CategorySelection