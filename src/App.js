import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥰": "Feeling Loved",
  "🙂": "Slightly Smiling Face",
  "🤣": "Rolling out on the floor Laughing",
  "💖": "Sparkling Heart"
};
//console.log(Object.keys(emojiDictionary)) *this is to show all the emojis of the dictionary object in console
var emojisWeKnow = Object.keys(emojiDictionary);
var headingtext = "inside out";

export default function App() {
  //const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    //setUserInput(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);

    console.log(meaning);
  }

  function onClickEmojis(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingtext}</h1>

      <div className="container">
        <div className="inside_container">
          <input className="field" onChange={changeEventHandler}></input>
          <h3>emojis we know! click below!!</h3>
          <div>
            {emojisWeKnow.map(function (emoji) {
              return (
                <span
                  style={{
                    fontSize: "1.2rem",
                    padding: ".5rem",
                    cursor: "pointer"
                  }}
                  key={emoji}
                  onClick={() => onClickEmojis(emoji)}
                  //onChange={changeEmojiInputHandler} onChange works only on input,textarea tag
                >
                  {emoji}
                </span>
              );
            })}
          </div>
          <div className="t-area">meaning: "{meaning}" </div>
        </div>
      </div>
    </div>
  );
}
