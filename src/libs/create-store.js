// reducer函数就是状态变更检测,更改状态的函数(stateChange)
const createStore = reducer => {
  let state = null;
  const listeners = [];
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      typeof listener === 'function' && listener();
    });
  };
  const subscribe = listener => {
    listeners.push(listener);
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

export default createStore;
