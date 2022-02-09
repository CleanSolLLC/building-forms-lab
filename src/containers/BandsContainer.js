import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  bands = () => {
    return this.props.bands.map((band, id) => <li key={id}>{band.name}</li>);
  }

  render() {
    
    return (
      <div>
        <BandInput addBand={this.props.addband} />
        <ul>{this.bands()}</ul>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  // console.log(state.bands.name)
  return {
    bands: state.bands,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addband: (name) => dispatch({type: "ADD_BAND", name })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
