import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import sinon from 'sinon'

import * as api from '../api'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {MapContainer, Map} from './Map'

it('should start with map on the page', () => {
  const component = TestRenderer.create(<MapContainer><Map/></MapContainer>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


describe(`GoogleMap`, () => {
    it(`should render`, () => {
        const googleMap = (
            <MapContainer>
                <Map />
            </MapContainer>
        )
        let tree = shallowToJson(googleMap);
    expect(tree).toMatchSnapshot();
    });
})
