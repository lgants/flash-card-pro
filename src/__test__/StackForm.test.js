import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from '../components/StackForm';
import { stacks } from '../data/fixtures';


describe('StackForm', () => {
  const stackForm = shallow(<StackForm />)

  it('renders the form title', () => {
    expect(stackForm.find('h4').first().text()).toEqual('New Stack Form');
  });

  it('renders a form component', () => {
    expect(stackForm.find('form').exists()).toBe(true)
  });

  it('renders a button to add new card', () => {
    expect(stackForm.find('button').at(0).text()).toEqual('Add Card')
  });

  it('renders a button to save card', () => {
    expect(stackForm.find('button').at(1).text()).toEqual('Save Stack')
  });

  describe('and updating a title', () => {
    beforeEach(() => {
      stackForm.find('.form-control').simulate('change', { target: { value: 'change title' }});
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual('change title');
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('button').at(0).simulate('click');
    });

    it('adds a new card to state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      // NOTE would use this to access nested elements for bootstrap components
      //expect(stackForm.find('ControlLabel').at(1).props.children).toEqual('Prompt');
      expect(stackForm.find('label').at(1).text()).toEqual('Prompt');
    });

    it('renders the answer section', () => {
      expect(stackForm.find('label').at(2).text()).toEqual('Answer');
    });

  });

})
