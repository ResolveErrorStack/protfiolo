"use client";

import { useState } from "react";
import ChatMessage from "./ChatMessage";

type Message = {
  role: "user" | "ai";
  content: string;
};


export default function AIChat() {

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content:
        "Hi 👋 I'm RES AI Assistant. Ask me about projects, coding, or technology.",
    },
  ]);

  const [input, setInput] = useState("");


  function sendMessage() {

    if (!input.trim()) return;


    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input,
      },
      {
        role: "ai",
        content:
          "Thanks for your question! AI response integration coming soon.",
      },
    ]);


    setInput("");
  }


  return (
    <div
      className="
        flex
        flex-col
        h-[600px]
      "
    >

      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto
          space-y-4
          pr-2
        "
      >

        {messages.map((message, index) => (

          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
          />

        ))}

      </div>


      {/* Input */}
      <div
        className="
          flex
          gap-3
          mt-5
        "
      >

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask something..."
          className="
            flex-1
            px-4
            py-3
            rounded-xl
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-cyan-400
          "
        />


        <button
          onClick={sendMessage}
          className="
            px-6
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-red-500
            text-black
            font-bold
          "
        >
          Send
        </button>

      </div>


    </div>
  );
}
