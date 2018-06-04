import React, {Component} from 'react';
import {Provider} from 'react-redux';

import PeopleList from 'containers/PeopleList';
import MessagesList from 'containers/MessagesList';
import store from 'store/index';

 class Chat extends Component {
    render() {
        return (
            <Provider store={store} key={ module.hot ? Date.now() : store}>
                <div className="container clearfix">
                    <PeopleList/>
                    <MessagesList/>
                </div>
            </Provider>
        )
    }
}

export default Chat;