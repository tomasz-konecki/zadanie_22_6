import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class About extends Component {
  render() {
    return (
      <div>
        <h2>Kodilla</h2>
        <h3>Zadanie 22.6</h3>
        <a href="/">Back to main page</a>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
