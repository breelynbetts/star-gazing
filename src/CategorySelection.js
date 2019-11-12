import React, { useEffect, useState } from 'react'
import { searchEvents } from './api.js'

import './style/CategorySelection.css'
import { apiHost } from './api'


function CategorySelection() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => apiHost('https://eonet.sci.gsfc.nasa.gov/api/v2.1'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchEvents({limit: 5});
                console.log('result', result)
                setData(result)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
        
      }, []);

    console.log(data)
    return (
        <div>
           <span >
           {data[0] === undefined ? <div>Loading ...</div> : 
            <div>
                {data[0].events.map((event) => {
                    return (
                        <div key={event.id} className='eventDiv'>
                            <h4 className='eventName'key={event.id}>{event.title}</h4 >   
                            {event.geometries.map((loc) => {
                                return (
                                    <div key={loc.date}>
                                        <p>{loc.date}</p>
                                        <p>location: <br/>
                                           lat:  {loc.coordinates[0]} lng:  { loc.coordinates[1] }
                                        </p>                            
                                    </div>
                                )
                            })}
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