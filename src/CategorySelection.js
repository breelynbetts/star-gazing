import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryResult from './CategoryResult';

function CategorySelection() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5';

    
    useEffect(() => {
        axios.get(url).then(json => setData(json.data));
        setLoading(false);
      }, []);
    
      
    console.log(data.events);
    return (
        <div>
           <span>
               {JSON.stringify(data)}
           </span>
           <hr />
           <span>

               {data.events == undefined ? <div>{loading}</div> : 
               <div>
                   {data.link}
                   {/* console.log({JSON.stringify(data.events)}); */}
                   {data.events.map((event) => {
                       return (
                           <h1>{event.title}</h1>
                       )
                   })}
               </div>
                } 
               
           </span>
        </div>
    )
}

export default CategorySelection