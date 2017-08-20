import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

// NOTE debug function will give the html structure of a component
describe('App', () => {
  // NOTE shallow, as opposed to mount, render won't attempt to pass down all context (e.g. store, etc.)
  const app = shallow(<App />)

  it('renders `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro')
  })

  it('renders a link to create new stacks', () => {
    expect(app.find('Link h4').text()).toEqual('Create New Stack')
  })
  
  it('renders the stacklist', () => {
    // NOTE toBe function generally used for booleans
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })


})
