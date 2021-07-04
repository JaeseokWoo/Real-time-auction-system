const SSE = require('sse');

module.exports = (server) => {  // 서버센트 이벤트 연결
    const sse = new SSE(server);
    sse.on('connection', (client) => {
        setInterval(() => {
            client.send(Date.now().toString());
        }, 1000);
    });
};