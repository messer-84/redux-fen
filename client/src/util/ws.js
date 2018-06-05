import {connectedNewUser, disconnectedUser} from "actions";
import store from 'store';

export default ((wsUrl) => {
    let ws;
    const {dispatch} = store;

    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('WS Open!');
    };

    ws.onmessage = (message) => {
        const messageObj = JSON.parse(message.data);

        console.log('ws message: ', messageObj);

        switch (messageObj.type) {
            case "connected_new_user":
                const {userID, userName} = messageObj;
                dispatch(connectedNewUser(userID, userName));
                break;
            case 'disconnected_user':
                dispatch(disconnectedUser(messageObj.userID));
                break;
        }
    };

    let countReconnect = 0;
    const emit = (message) => {
        if (countReconnect > 5) return;

        if (ws.readyState === ws.CONNECTING) {
            setTimeout(() => {
                emit(message);
                countReconnect++;
            }, 500);
            return
        }

        ws.send(message);
        countReconnect = 0;

    };

    return {emit};


})('ws://localhost:3000');