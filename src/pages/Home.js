import React, { Component } from 'react'

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Find the Star!</h1>
                <p>
                    Welcome to Find the Star! This site is powered by the 
                    NASA Image and Video Library API, the NASA EONET API, and
                    the Astronomy Picture of the Day (APOD) API. 
                </p>
                <p>
                    Select a directory on the navigation bar above to begin exploring!
                </p>
            </div>
        )
    }
}

export default Home