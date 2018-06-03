import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import Chat from './chat';
import rootReducer from './reducer';
import {addNewUser} from "./actions";
import reduxThunk from 'redux-thunk';


const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      console.log('trigger', action);
      let result = next(action);
      console.log('store after action', store.getState());
      return result;
    }
  }
};

const checkUserMW = store => next => action => {
  if (action.type === 'CONNECTED_NEW_USER') {
    let fakeRequest = () => new Promise(resolve => {

      setTimeout(() => {
        resolve();
      }, 2500)

    });

    fakeRequest().then(() => {
      store.dispatch(addNewUser())
    });
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, loggerMiddleware, checkUserMW)
);

window.store = store;
// store.subscribe(() => {
//   console.log('store has been changed!');
//
// });


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Chat/>
        </div>
      </Provider>
    )
  }
}

export default App;