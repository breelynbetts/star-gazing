import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import * as api from '../api'
import { shallowToJson } from 'enzyme-to-json';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import {MapContainer, Map} from './Map'
import MapDisplay from './MapDisplay'

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Map />)
  expect(result).toMatchSnapshot()
})



// const setupAndLoadPage = async () => {
//   const renderer = new ShallowRenderer();
//   const result = renderer.render(<Map />)
//   expect(result).toMatchSnapshot()
//   }

  // describe('API calls', () => {
  //   let div
  //   beforeEach(async () => {
  //     sinon.stub(api, 'searchEvents')
  
  //     // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
  //     // that we need to revise the mock response if our app starts using more (or different) data.
  //     api.searchEvents.returns(Promise.resolve({
  //       events: [
  //           {
  //             "id": "EONET_4498",
  //             "title": "Wildfires - New South Wales, Australia",
  //                   "description": "",
  //             "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4498",
  //             "categories": [
  //               {
  //                 "id": 8,
  //                 "title": "Wildfires"
  //               }
  //             ],
  //             "sources": [
  //               {
  //                 "id": "PDC",
  //                 "url": "http://emops.pdc.org/emops/?hazard_id=97693"
  //               }
              
  //             ],
  //             "geometries": [
  //               {
  //                 "date": "2019-11-11T21:24:00Z",
  //                 "type": "Point", 
  //                 "coordinates": [ 151.94026, -30.14679 ]
  //               }
              
  //             ]
  //           }
  //       ]
  //     }))
  
  //     div = await setupAndLoadPage()
  //   })
  
  //   afterEach(() => {
  //     ReactDOM.unmountComponentAtNode(div)
  //     api.searchEvents.restore()
  //   })

  //   it('should populate the event container when results arrive', () => {
  //     const searchResults = div.querySelector('div.mapData')
  //     expect(searchResults.children.length).toEqual(1)
  //   })
  
  // })