import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {

  it('creates an action to set the main stack', () => {
    const expectedAction = {
      type: actions.SET_STACK,
      stack
    };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it('creates an action to save a stack', () => {
    const expectedAction = {
      type: actions.SAVE_STACK,
      stack
    };

    expect(actions.saveStack(stack)).toEqual(expectedAction);
  });

  it('creates an action to load a stack', () => {
    const expectedAction = {
      type: actions.LOAD_STACKS,
      stacks
    };

    expect(actions.loadStacks(stacks)).toEqual(expectedAction);
  });
});
