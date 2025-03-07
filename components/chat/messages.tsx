import { useEffect, useState } from "react";
import ChatHeader from "@/components/chat/header";
import { INITIAL_MESSAGE } from "@/configuration/chat";

export default function ChatMessages() {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = sessionStorage.getItem("chatMessages");
      return savedMessages ? JSON.parse(savedMessages) : [{ role: "assistant", content: INITIAL_MESSAGE }];
    }
    return [{ role: "assistant", content: INITIAL_MESSAGE }];
  });

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const clearMessages = () => {
    setMessages([]);
  };

  const resetChat = () => {
    setMessages([{ role: "assistant", content: INITIAL_MESSAGE }]);
    sessionStorage.removeItem("chatMessages");
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader clearMessages={clearMessages} resetChat={resetChat} />
      <div className="flex-grow overflow-y-auto p-5">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 ${msg.role === "assistant" ? "bg-gray-100" : "bg-blue-100"} rounded-lg my-2`}>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
