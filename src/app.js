import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Chat from './chat';


const usersState = ['@john_123', '@alex_1989', '@chris'];
const reducer = (state = usersState, action) => {
    return state;
};
const store = createStore(reducer);
window.store = store;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Chat />
                </div>
            </Provider>
        )
    }
}

export default App;