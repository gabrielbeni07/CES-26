export const ADD_DIGIT = 'ADD_DIGIT';
export const CLEAR = 'CLEAR';
export const PERFORM_OPERATION = 'PERFORM_OPERATION';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';

export function calculateResult() {
  return { type: CALCULATE_RESULT };
}

export function addDigit(digit) {
  return { type: ADD_DIGIT, digit };
}

export function clear() {
  return { type: CLEAR };
}

export function performOperation(operation) {
  return { type: PERFORM_OPERATION, operation };
}
