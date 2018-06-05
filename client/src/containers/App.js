import React, {Component} from 'react';
import {Provider} from 'react-redux';

import ChatWrap from './ChatWrap';
import store from 'store/index';

 class App extends Component {
    render() {
        return (
            <Provider store={store} key={ module.hot ? Date.now() : store}>
                <div className="container clearfix">
                    <ChatWrap />
                    </div>
            </Provider>
        )
    }
}

export default App;