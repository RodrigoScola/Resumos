#backEnd 
imagine you are trying to follow something, but you can only get new results whenever you press a button
that would be a very very bad user experience, it would be unreliable because the information might have changed whenever the button might have pressed or not
this is how an application using an http connection might work and demonstrates the problem that websockets are here to solve 
while plain old http connections require the client to make a new request to the server in order to get new data, websocket connections require just a single request 
that establishes continuous, bidirectional communication enagbling real-time updates of data shared between a client and server
websocket connection is the solution that allows you to track the score of a basketball game in real time

communication patterns 
     in addition to the client sending data to the server, the server can also send data directly to the client 
     in addition to enabling uninterrupted communication between a client and server, websocket connections also enable a communication patter called broadcasting
          its when a server sends the same message to many connected clients at once
     in some cases the server may send a broadcast message to all connected users but often the server will choose onlly a subset of clients to broadcast a messsage to,
     
     client to server
     server to client
     server to many clients (broadcasting)

persistent connection
     in order for websocket connections to achieve bidirectional and continuous communication, there must first exist a persistent connection
     in a request-response pattern, a client will open a connection to make a request from a server and the server will send back a response. the connection is then
     immediately closed requiring a new request to be made to fetch more data 

     unlike http connections, websocket stay open, or persist allowing for clients and servers to continuously send information back and forth until either the client
     or the server decides to terminate the connection 
          benefits of persistent connection
               only one request-response is needed to establish the connection, greatly reducing the data transmitted along with each request in the form of headers 
               the connection is stateful meaning that state can be maintained on that connection. the server can keep track of the data that has already been sent to
               the client and vice versa without relying on cookies or session ids 

the handshake and upgrade headers 
     the handshake is essentially an agreement between the client and the server to establish a persistent websocket connection and is initiated using a plain old http request
     in the header the client must communicate to the server that it wants to upgrade the connection from http to websocket 
     the request from the client will include the following required headers
     connection - controls whether or not the network connection stays open after the current transaction finishes, a value of Upgrade signals that we want to upgrade the connection to a new protocol
     upgrade - the protocol that the client wants to switch to, websocket is defined 
     sec-websocket-key - one time random value generated by the client and is used by the server to prove that it received a valid websocket opening handshake
     
frontend
     let wsClient = null;
     if (wsClient) {
          wsClient.onerror = wsClient.onopen = wsClient.onclose = null
          wsClient.close()
     }
     const URL = 'ws://localhost:' + port
creating an ws connection
     wsClient = new Websocket(url);
     wsClient.onopen = e => {
          wsClient.send(
               json.stringify({
                    type: "New User"
               })
          )
     }
on message handler 
     wsClient.onmessage = e => {
          const {type, payload} = e.data;
          switch(type) {
               ...
          }
     }
deleting connection
     wsClient.onclose = funciton () {
          wsClient = null
     }
onerror 
     wsClient.onerror = e => {
          wsClient = null
     }
sending messages 
     wsClient.send(json.stringify({
          type: ...,
          payload: {
               ...
          }
     }))

backend

const wbServer = new Websocket.Server({server}) // can be express server

wbServer.on('connection',socket => {
     socket.on('message',data => {
          const {type,payload} = json.parse(data)
          switch(type) {
               ...
          }
     })
})

broadcast = (data, socketToEmit = null) => {
     wbServer.clients.foreach(connectedClient => {
          if (connectedClient.readyState == Websocket.open && connectedClient !== socketToEmit) {
               connectedClient.send(json.stringify(data))
          }
     })
}
