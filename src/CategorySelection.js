import React, { useEffect, useState } from 'react'
import { searchEvents } from './api.js'
import CategoryResult from './CategoryResult.js'
import axios from "axios"

function CategorySelection() {
    const [data, setCategory] = useState([])
    const [error, setError] = useState(false)

    async function fetchData() {
        const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=5');
        response
            .json()
            .then(response => setCategory(response))
            .catch(err => setError(err));
    }
    useEffect(() => {
        fetchData();
    });

    return (
        <div>
           <span>
               {JSON.stringify(data)}
           </span>
           <hr />
           <span>
               {JSON.stringify(error)}
           </span>
        </div>
    )
}

export default CategorySelection