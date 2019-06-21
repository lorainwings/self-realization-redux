import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  };

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => WrapComponent => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    };

    constructor(props) {
      super(props);
      this.state = {
        allProps: {}
      };
    }

    componentWillMount() {
      const { store } = this.context;
      this._updateProps();
      store.subscribe(this._updateProps.bind(this));
    }

    //Connect 组件也可以接受props,所以这里需要接收到,然后合并到stateToProps
    _updateProps() {
      const { store } = this.context;
      //此处传入的this.props不是多余的,目的是使生成的对象配置性就更强
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {};
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {};
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      });
    }

    render() {
      return <WrapComponent {...this.state.allProps} />;
    }
  }
  return Connect;
};
