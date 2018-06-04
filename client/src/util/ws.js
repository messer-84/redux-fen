export default ((wsUrl) => {
    let ws;

    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('WS Open!');
    };

    ws.onmessage = (data) => {
        console.log(data);
    };

    return ws;


})('ws://localhost:3000');