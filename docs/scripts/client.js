var host = "wss://cat-chat.fly.dev/"; // : Change to your Heroku host
submit_button1.addEventListener("click", (evt) => {
  let name = username.value;
  if (!name) return false;
  chat.name = name;
  nameModal.setAttribute("hidden", "true");
  evt.preventDefault();
});

send_message.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
    submit_button.click();
    evt.preventDefault();
  }
});

submit_button1.addEventListener("keydown", (evt) => {
    if (evt.key == "Enter") {
      submit_button.click();
      evt.preventDefault();
    }
  });


submit_button.addEventListener("click",(evt) => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("body").style.backgroundColor = "#" + randomColor.toString();
  console.log(randomColor)
});

//: Script WebSocket communication
var chat = {
  // Create the communication tude
  socket: new WebSocket(host),
  // Create the function that starts the chat
  init: () => {
    chat.window = document.getElementById("chat-window");

    chat.socket.addEventListener("message", (evt) => {
      let msg = evt.data;
      console.log(msg);
      chat.post(msg); //Post to actual div/window
    });
    // Keep connection alive by sending a message every 1 sec
    setInterval(() => {
      chat.send("", "ping");
    }, 1000);
  },

  // Add my abiliy to send a message to server
  send: (message, type) => {
    let packet = {
      user: chat.name,
      text: send_message.value || message, // || means OR
      type: type,
    };
    if (typeof packet.text !== "string") return false;
    //
    chat.socket.send(JSON.stringify(packet));
    if (type !== "ping") send_message.value = "";

    return false;
  },
  //post the chat to the chat.window

  post: (message) => {
    let msg = document.createElement("p");
    let text = document.createElement("span");
    text.className = "chat-msg";
    text.innerText = `${message}`;
    msg.appendChild(text);
    chat.window.appendChild(msg);
    console.log(msg);
    chat.scroll();
    return false;
  },
  scroll: () => {
    let msgs = Array.from(document.getElementsByClassName("chat-msg"));
    let pos = msgs[msgs.length - 1].offsetTop;
    chat.window.scrollTo({
      top: pos,
      behaviour: "smooth",
    });
  },
};

//start the chat

chat.init();
