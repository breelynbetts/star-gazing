import React, { useEffect, useState } from 'react'
import { searchEvents } from './api.js'

import './style/CategorySelection.css'
import { apiHost } from './api'

import moment from 'moment'; 
import {MapContainer, Map} from './components/Map.js'
import CategoriesModal from './CategoriesModal'

function CategorySelection() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [locations, setLocations] = useState([])
    
    useEffect(() => apiHost('http://localhost:4000'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchEvents({limit: 5});
                setData(result.events)
                setLocations(result.events)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
      }, []);

    return (
        <div>
            {locations === undefined ? <div>Working on displaying map ... </div> :
                <MapContainer>
                    <Map results={data}/>
                </MapContainer>
            }
           <span >
               <CategoriesModal />
           {data === undefined ? <div>Loading ...</div> : 
            <div>
                {data.map((event) => {
                    return (
                        <div className='eventColumns'> 
                            <div key={event.id} className='eventDiv'>
                                <h4 className='eventName'key={event.id}>{event.title}</h4 >
                                <h5>Event Category: {event.categories[0].title}</h5>  
                                <p>{moment(event.geometries[0].date).format('LLLL')}</p>
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