import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Container from './components/Container'
it('should render App component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.exists()).toBe(true)
})

it('should render Container component', () => {
  const wrapper = shallow(<App />)
  const containerComponent = wrapper.find(Container)
  expect(containerComponent.exists()).toBe(true)
})

it('should render a header html element, with an img element, p element, and a element', () => {
  const wrapper = shallow(<App />)
  const header = wrapper.find('header')
  const img = wrapper.find('img')
  const p = wrapper.find('p')
  const a = wrapper.find('a')
  expect(header.exists()).toBe(true)
  expect(img.exists()).toBe(true)
  expect(p.exists()).toBe(true)
  expect(a.exists()).toBe(true)
})

it("should have a p tag that renders 'get started' text", () => {
  const wrapper = shallow(<App />)
  const p = wrapper.find('p')
  expect(p.text()).toBe("Edit src/App.js and save to reload.");
})


