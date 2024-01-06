import React from "react";
import "./_sidebar.css";
import gptLogo from "../../assets/chatgpt.svg";
import add from "../../assets/add-30.png";
import message from "../../assets/message.svg";
const SidebarPage = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_top">
          <div className="sidebar_top_logo">
            <img src={gptLogo} alt="Add"></img>
            <span className="brand-name">ChatGPT</span>
          </div>
          <button className="newChat-btn">
            <img className="newChat-img" src={add} />
            <span>New Chat</span>
          </button>

          <button className="query-btn">
            <img src={message} />
            <span>What is Programming?</span>
          </button>
          <button className="query-btn">
            <img src={message} />
            <span>How to use API?</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarPage;
