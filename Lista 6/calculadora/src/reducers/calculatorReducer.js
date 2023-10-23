import { ADD_DIGIT, CLEAR, PERFORM_OPERATION, CALCULATE_RESULT } from '../actions/calculatorActions';

const initialState = {
  displayValue: '0',
  previousValue: null,
  operation: null,
  waitingForOperand: false,
};

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DIGIT:
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: String(action.digit),
          waitingForOperand: false,
        };
      }
      return {
        ...state,
        displayValue: state.displayValue === '0' ? String(action.digit) : state.displayValue + action.digit,
      };
    case CLEAR:
      return initialState;
    case PERFORM_OPERATION:
      const currentValue = parseFloat(state.displayValue);
      let result = state.previousValue;
      if (state.operation && !state.waitingForOperand) {
        switch (state.operation) {
          case '+':
            result = (result || 0) + currentValue;
            break;
          case '-':
            result = (result || 0) - currentValue;
            break;
          case '*':
            result = (result || 1) * currentValue;
            break;
          case '/':
            result = (result || currentValue) / currentValue;
            break;
          default:
            break;
        }
      } else {
        result = currentValue;
      }
      return {
        ...state,
        displayValue: String(result),
        previousValue: result,
        operation: action.operation,
        waitingForOperand: true,
      };
      case CALCULATE_RESULT:
        if (state.operation && state.previousValue !== null) {
          const currentValue = parseFloat(state.displayValue);
          let result;
          switch (state.operation) {
            case '+':
              result = state.previousValue + currentValue;
              break;
            case '-':
              result = state.previousValue - currentValue;
              break;
            case '*':
              result = state.previousValue * currentValue;
              break;
            case '/':
              result = state.previousValue / currentValue;
              break;
            default:
              return state;
          }
          return {
            ...state,
            displayValue: String(result),
            previousValue: null,
            operation: null,
            waitingForOperand: true,
          };
        } else {
          return state;
        }
    default:
      return state;
  }
}

export default calculatorReducer;
