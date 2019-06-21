import React, { Component } from 'react';
import './theme.css';
import PropTypes from 'prop-types';
// import { connect } from '../../libs/react-redux'; //弃用自己实现的connect
import { connect } from 'react-redux';

class Theme extends Component {
  // 书写规则:
  // 1. 先是static类的属性,defaultProps和propTypes
  // 2. 再次,construct
  // 3. getter/setter
  // 4. 生命周期
  // 5. _开头的私有方法
  // 6. 事件处理方法
  // 7. render

  // static propTypes = {};
  static contextTypes = {
    store: PropTypes.object
  };

  handleUpdateColor(color, e) {
    if (this.props.updateColor) {
      this.props.updateColor(color);
    }
  }

  render() {
    return (
      <div>
        <div className="btn-line">
          <button
            className="btn btn-hgreen"
            onClick={e => this.handleUpdateColor('#1ab394', e)}
          >
            切换为亮绿
          </button>
          <button
            className="btn btn-hpink"
            onClick={e => this.handleUpdateColor('pink')}
          >
            切换为亮红
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateColor(color) {
      dispatch({ type: 'CHANGE_COLOR', tColor: color });
    }
  };
};

const ConnectTheme = connect(
  undefined,
  mapDispatchToProps
)(Theme);

export default ConnectTheme;
