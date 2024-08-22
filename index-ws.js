const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/',function(req ,res) {
    res.sendFile('index.html',{root: __dirname});
});

server.on('request',app);
server.listen(3000, function(){
    console.log('listening on port 3000');
});
// Begin websockets


const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({server: server});

wss.on('connection',function connection(ws){
    const numClients =    wss.client.size ;
    console.log('clients connected' , numClients);
    wss.broadcast(`Current visitors ${numClients}`);
        
    if(ws.readyState === ws.Open ){
        ws.send('welcome to my server ');
    }
    ws.on('close ', function close(){
        wss.broadcast(`Current visitors ${wss.cleints.size}`);
        console.log(" a client has disconnected ");
    });
    ws.on('error',function(){
        //
    });

});

/**
 * Broadcast data to all connected clients
 * @param  {Object} data
 * @void
 */

wss.broadcast = function broadcast(data)
{
    wss.Clients.forEach(function each(client){

    });
}














