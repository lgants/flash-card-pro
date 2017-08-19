export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const SAVE_STACK = 'SAVE_STACK';

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack
  }
}

export function loadStacks(stacks) {
  return {
    type: LOAD_STACKS,
    stacks
  }
}

export function saveStack(stack) {
  return {
    type: SAVE_STACK,
    stack
  }
}
