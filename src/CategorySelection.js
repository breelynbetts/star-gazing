import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './style/CategorySelection.css'

function CategorySelection() {
    const [data, setData] = useState([])
    const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5';

    
    useEffect(() => {
        axios.get(url).then(json => setData(json.data));
      }, []);
    
    {data.events === undefined ? console.log("loading"):
        console.log(data.events.geometries)
    }

    return (
        <div>
           <span>
           {data.events === undefined ? <div>Loading ...</div> : 
            <div>
                {data.events.map((event) => {
                    return (
                        <div className='eventDiv'>
                            <h4 className='eventName'key={event.id}>{event.title}</h4 >
                            {event.geometries === undefined ? <div>Loading ...</div> : 
                                <div>
                                {event.geometries.map((loc) => {
                                    return (
                                        <div>
                                            <p>{loc.date}</p>
                                            <p>location: 
                                                {loc.coordinates[0]}, 
                                                {loc.coordinates[1]}
                                            </p>                            
                                        </div>
                                    )
                                })}
                                </div>
                            }  
                        </div>
                    )
                })}
            </div>
            }  
       </span>
        </div>
    )
}

export default CategorySelection