import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

const props = {
  card: { prompt: 'test prompt', answer: 'test answer'}
};

describe('Card', () => {
  const card = shallow(<Card {...props} />);

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  });

  it('renders the card prompt', () => {
    expect(card.find('.card-title h5').text()).toEqual(props.card.prompt);
  });

  it('renders the card answer', () => {
    expect(card.find('.card-text h5 span').text()).toEqual(props.card.answer);
  });

  it('applies the `text-hidden` class to the card answer', () => {
    expect(card.find('.card-text h5 span').hasClass('text-hidden')).toBe(true);
  });

  describe('when clicking on the card', () => {
    beforeEach(() => card.find('.card').simulate('click'));

    it('updates `reveal` to be `true`', () => {
      expect(card.state().reveal).toBe(true);
    });

    it('applies the `text-revealed` class to the card answer', () => {
      expect(card.find('.card-text h5 span').hasClass('text-shown')).toBe(true);
    });
  });
});
