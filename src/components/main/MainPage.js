import React, { useState } from "react";
import "./_mainpage.css";
import sendButton from "../../assets/send.svg";
import userIcon from "../../assets/user-icon.png";
import gptImgLogo from "../../assets/chatgptLogo.svg";
import { sendMesToOpenAI } from "../../openai";

const MainPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am chatGPT",
      isBot: true,
    },
  ]);
  const handleSend = async () => {
    setInput("");
    if(input != ""){
      const res = await sendMesToOpenAI(input);
      setMessages([
        ...messages,
        { text: input, isBot: false },
        { text: res, isBot: true },
      ]);
    }

  };

  return (
    <div className="mainPage">
      <div className="chats">
        {messages.map((message, i) => (
          <div key={i} className={message.isBot ? "chat bot" : "chat"}>
            <img
              className="chatImg"
              src={message.isBot ? gptImgLogo : userIcon}
              alt = "chatLogo"
            />
            <p className="txt">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            name=""
            id=""
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Send a Message"
          />
          <button className="send" onClick={handleSend}>
            <img src={sendButton} alt="sendImage" />
          </button>
        </div>
        <p>
          ChatGPT may Produce inaccurate information about people, place, or
          facts. ChatGPT Augaust 20 Version.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
