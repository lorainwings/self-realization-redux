import React, { Component } from 'react';
import CHeader from './Header';
import CContent from './Content';
import store from '../../store/index';
// import { Provider } from '../../libs/react-redux'; // 弃用自己实现的provider
import { Provider } from 'react-redux';

class Index extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <CHeader />
          <CContent />
        </Provider>
      </div>
    );
  }
}

export default Index;
