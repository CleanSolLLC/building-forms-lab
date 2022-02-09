// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    })
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
         <input type="text"
           placeholder="Input Band"
           onChange={this.changeHandler}
           value={this.state.name}
         />
         <input type="submit"
         />
      </form>        
    )
  };
};

export default BandInput
