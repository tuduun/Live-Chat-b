# CMPSC 302 Chat Server Feature Description

## In no more than 150 words, describe the chat feature you plan to implement.

I think I will implement a feature that changes the text color or the background color after a user sends a message everytime. I do no think it is pracrtical to have this feature but I am doing for fun and to review my javascript skills.

## How do you plan to achieve this?

I am trying to implement an event listener function that if the submit button has been pressed, then it generates a random hex value using some random module and it assigns the hex value into the style of the body or the paragraphs.
## Paste the code used to acheive this between the two "fences" below.

You must use at least one of the entries below.

### Javascript

#### `client.js`

(Delete if not using this portion)

```javascript
submit_button.addEventListener("click",(evt) => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("body").style.backgroundColor = "#" + randomColor.toString();
  console.log(randomColor)
});

```

#### `server.js`

(Delete if not using this portion.)

```javascript
const emoji = {
  "greet": ["👋"],
  "normal": ["😹","🐱","😼","😸","🙀","🇲🇳"],
  "ping": ["🔊"],
}

```

#### HTML

(Delete if not using this portion.)


#### CSS

(Delete if not using this portion.)

```css
#body{
    background-color: rgb(255, 255, 255);}
```
