import React from 'react'
import ReactDOM from 'react-dom'
import PicOfDay from './PicOfDay.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PicOfDay />, div)
  ReactDOM.unmountComponentAtNode(div)
})
