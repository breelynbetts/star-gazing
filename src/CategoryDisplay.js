import React, { useEffect, useState } from 'react'
import { getCategories } from './api.js'

import './style/CategorySelection.css'
import { apiHost } from './api'
import './style/CategoriesDisplay.css'

function CategoryDisplay() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => apiHost('http://localhost:4000'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getCategories({});
                setData(result.categories)
            } catch (e) {
                setError('Sorry, but something went wrong.')
            }
        }
        fetchData();
      }, []);
    
    return (
        <div>
            {error && (
                <div className="error">
                    {error}
                </div>
            )}
            {data == undefined ? <div>loading categories</div> :
                <div>
                    {data.map((category) => {
                        return (
                            <div className='categories'>
                                <div className='columns'>
                                    <p className='categoryTitle'>{category.title}</p>
                                    <p className='categoryDescription'>{category.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default CategoryDisplay

