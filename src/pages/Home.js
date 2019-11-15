import React, { Component } from 'react'
import logo from '../media/logo.png';

import '../style/Home.css'

class Home extends Component {
    render () {
        return (
            <div>
                <div className='titleDiv'>
                    <img className='homeLogo' src={ logo } alt="toolbar-logo" />
                    <h1 className='homeTitle'>Star Gazing!</h1>
                </div>
                <div className='info'>
                <p className="aboutApp">
                    Welcome to Star Gazing! This site is powered by the 
                    NASA Image and Video Library API, the NASA EONET API, and
                    the Astronomy Picture of the Day (APOD) API. 
                </p>
                <p className="aboutApp">
                    Select a directory on the navigation bar above to begin exploring!
                    The Astronomy Picture of the Day displays a picture provided by the NASA 
                    Api, along with a description of that picture, for a day of your choice! 
                </p>
                </div>
            </div>
        )
    }
}

export default Home