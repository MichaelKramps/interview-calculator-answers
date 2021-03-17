import React, { Component } from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    operators: ['/', 'x', '-', '+'],
    selectedOperator: '',
  };

  callOperator = () => {
  };

  setOperator = value => {
  };

  updateDisplay = value => {
    let displayValue = this.state.displayValue == "0" ? "" : this.state.displayValue;
    let newDisplayValue = displayValue + value;

    this.setState({displayValue: newDisplayValue});
  };

  render() {
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          operators={operators}
          callOperator={this.callOperator}
          numbers={numbers}
          setOperator={this.setOperator}
          updateDisplay={() => {}}
        />
      </div>
    );
  }
}

export default Calculator;
