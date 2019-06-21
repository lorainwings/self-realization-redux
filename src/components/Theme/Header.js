import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from '../../libs/react-redux'; //弃用自己实现的connect
import { connect } from 'react-redux';

class Header extends Component {
  static propsTypes = {
    tColor: PropTypes.string
  };

  render() {
    return (
      <div style={{ backgroundColor: this.props.tColor }}>
        <div style={{ padding: '10px 0', textAlign: 'center' }}>react app</div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    tColor: state.tColor,
    ...props
  };
};

const ConnectHeader = connect(mapStateToProps)(Header);

export default ConnectHeader;
