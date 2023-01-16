const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server,
    {
        cors: {
            origin: "*",
            // allowedHeaders: ["my-custom-header"],
            // credentials: true
          }
    });

io.on("connection",(socket)=>{

    console.log("What is socket: ",socket);
    console.log("Socket is active to get connected");

    socket.on("chat",(payload) =>{
        console.log("What is payload",payload);
        io.emit("chat",payload);
    } );
});

//app.listen(5000,()=>console.log("Server is active..."));

server.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})