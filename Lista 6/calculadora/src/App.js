import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDigit, clear, performOperation, calculateResult } from './actions/calculatorActions';

function App() {
  const dispatch = useDispatch();
  const displayValue = useSelector(state => state.displayValue);

  const buttonStyle = {
    width: '50px',
    height: '50px',
    fontSize: '18px',
  };

  const displayStyle = {
    width: '210px',
    height: '50px',
    fontSize: '18px',
    marginBottom: '10px',
    textAlign: 'right',
    paddingRight: '10px',
  };

  const renderDigitButton = (digit) => (
    <button style={buttonStyle} onClick={() => dispatch(addDigit(digit))}>{digit}</button>
  );

  return (
    <div>
      <div style={displayStyle}>
        {displayValue}
      </div>
      <div>
        {renderDigitButton(7)}
        {renderDigitButton(8)}
        {renderDigitButton(9)}
        <button style={buttonStyle} onClick={() => dispatch(performOperation('/'))}>/</button>
      </div>
      <div>
        {renderDigitButton(4)}
        {renderDigitButton(5)}
        {renderDigitButton(6)}
        <button style={buttonStyle} onClick={() => dispatch(performOperation('*'))}>*</button>
      </div>
      <div>
        {renderDigitButton(1)}
        {renderDigitButton(2)}
        {renderDigitButton(3)}
        <button style={buttonStyle} onClick={() => dispatch(performOperation('-'))}>-</button>
      </div>
      <div>
        {renderDigitButton(0)}
        <button style={buttonStyle} onClick={() => dispatch(calculateResult())}>=</button>
        <button style={buttonStyle} onClick={() => dispatch(performOperation('+'))}>+</button>
        <button style={buttonStyle} onClick={() => dispatch(clear())}>C</button>
      </div>
    </div>
  );
}

export default App;
