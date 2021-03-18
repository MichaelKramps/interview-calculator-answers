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
  };

  callOperator = () => {
    let displayValue = this.state.displayValue;
    let result;

    if (displayValue.includes("+")) {
      let values = displayValue.split("+");
      result = parseFloat(values[0]) + parseFloat(values[1]);
    } else if (displayValue.includes("-")) {
      let values = displayValue.split("-");
      result = parseFloat(values[0]) - parseFloat(values[1]);
    } else if (displayValue.includes("x")) {
      let values = displayValue.split("x");
      result = parseFloat(values[0]) * parseFloat(values[1]);
    } else {
      let values = displayValue.split("/");
      result = parseFloat(values[0]) / parseFloat(values[1]);
    }


    this.setState({ displayValue: result.toString() });
  };

  setOperator = value => {
    let displayValue = this.state.displayValue + value;

    this.setState({ displayValue: displayValue });
  };

  updateDisplay = value => {
    let displayValue = this.state.displayValue;
    let newDisplay;

    if(value === "." && displayValue.includes(".")) {
      newDisplay = displayValue;
    } else if (value === "ce") {
      newDisplay = displayValue.slice(0, -1);
    } else {
      newDisplay = displayValue === "0" ? value : displayValue + value;
    }

    this.setState({ displayValue: newDisplay });
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
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
