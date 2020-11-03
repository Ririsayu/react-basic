import React, { Component } from "react";

import { Container, FormGroup, Input, Button, Label, Card } from "reactstrap";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      input: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  handleInput = (e) => {
    this.setState({
      input: Number(e.target.value),
    });
  };

  add = () => {
    this.setState({
      counter: this.state.counter + this.state.input,
    });
  };

  substract = () => {
    this.setState({
      counter: this.state.counter - this.state.input,
    });
  };

  multiply = () => {
    this.setState({
      counter: this.state.counter * this.state.input,
    });
  };

  render() {
    return (
      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-center">{this.state.counter}</h1>
          <div>
            <div>
              <FormGroup>
                <Label>Insert Number</Label>
                <Input
                  type="number"
                  onChange={this.handleInput}
                  name="addInput"
                  value={this.state.input}
                />
              </FormGroup>
            </div>
            <Button color="primary" onClick={this.add} className="mr-2">
              Add
            </Button>
            <Button color="primary" onClick={this.substract} className="mr-2">
              Substract
            </Button>
            <Button color="primary" onClick={this.multiply} className="mr-2">
              Multiply
            </Button>

            <div className="my-2">
              <Button
                block
                color="danger"
                onClick={this.resetCounter}
                className="mr-2"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Counter;
