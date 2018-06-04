import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import 'assets/styles/style.scss';
import Chat from 'containers/Chat';

const renderApp = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.querySelector('#mount_place')

    )
};

renderApp(Chat);

if(module.hot){
    module.hot.accept('containers/Chat', () => {renderApp(Chat)})
}


// render(
//     <Chat/>,
//     document.querySelector('#mount_place')
// );