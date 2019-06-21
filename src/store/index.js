// import createStore from '../libs/create-store'; //弃用自己实现的create-store
import { createStore } from 'redux';

const store = createStore((state, action) => {
  if (!state) {
    return {
      tColor: '#1ab394'
    };
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        tColor: action.tColor
      };
    default:
      return state;
  }
});

export default store;
