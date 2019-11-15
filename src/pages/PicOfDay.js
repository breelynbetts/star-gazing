import React, { Component } from 'react'

import DateSelector from '../DateSelector.js'

import '../style/PicOfDay.css'

class PicOfDay extends Component {
    render () {
        return (
            <div>
                <h1 className='apodTitle'>Astronomy Picture of the Day!</h1>
                <DateSelector />      
            </div>
        )
    }
}

export default PicOfDay