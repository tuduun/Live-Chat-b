var host = "wss://cmpsc-302-chat-server.herokuapp.com"; // TODO: Change to your Heroku host




submit_button1.addEventListener("click",(evt) => {
    let name = username.value;
    if(!name) return false;
    chat.name = name;
    nameModal.setAttribute("hidden","true");
    evt.preventDefault();
});

//: Script WebSocket communication
var chat = {
// Create the communication tude
    socket: new WebSocket(host),
// Create the function that starts the chat
    init: () => {
        chat.socket.addEventListener("message", (evt) => {
            let msg = evt.data;
            console.log(msg);
        });
// Keep connection alive by sending a message every 1 sec
        setInterval(() => {
            chat.send("","ping");
        }, 1000);
    },

// Add my abiliy to send a message to server
    send: (message, type) => {
        let packet = {
            user: chat.name,
            text: message,
            type: type,
        }
// 
        chat.socket.send(
            JSON.stringify(packet)
        );
        return false;
    }
}






//start the chat 

chat.init();