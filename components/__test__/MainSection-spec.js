/* global describe, it */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MainSection from '../MainSection'

describe('<MainSection />', () => {
  it('should render one input', () => {
    const wrapper = shallow(<MainSection todos={[{text: '11', id: 1}]} actions={{aa: 11}}/>)
    expect(wrapper.find('input')).to.have.length(1)
  })
})
