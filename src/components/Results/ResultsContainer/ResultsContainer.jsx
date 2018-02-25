import React, { Component } from 'react';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };
  }

  render() {
    return <div>{this.state.selected}</div>;
  }
}

export default ResultsContainer;
