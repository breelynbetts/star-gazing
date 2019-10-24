import React, { Component } from 'react'

import DateSelector from '../DateSelector.js'

class PicOfDay extends Component {
    render () {
        return (
            <div>
                <h1>Astronomy Picture of the Day!</h1>
                <DateSelector /> 
                
            </div>
        )
    }
}

export default PicOfDay