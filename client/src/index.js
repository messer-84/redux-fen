import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import ws from 'util/ws';

window.ws = ws;

localStorage.removeItem('auth');

import 'assets/styles/style.scss';
import App from 'containers/App';

const renderApp = Component => {
    render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.querySelector('#mount_place')

    )
};

renderApp(App);

if(module.hot){
    module.hot.accept('containers/App', () => {renderApp(App)})
}

