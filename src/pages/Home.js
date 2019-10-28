import React, { Component } from 'react'
import '../style/Home.css'
class Home extends Component {
    render () {
        return (
            <div>
                <h1 className='homeTitle'>Star Gazing!</h1>
                <p className="aboutApp">
                    Welcome to Star Gazing! This site is powered by the 
                    NASA Image and Video Library API, the NASA EONET API, and
                    the Astronomy Picture of the Day (APOD) API. 
                </p>
                <p className="aboutApp">
                    Select a directory on the navigation bar above to begin exploring!
                </p>
            </div>
        )
    }
}

export default Home