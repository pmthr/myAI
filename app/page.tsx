"use client";

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import { INITIAL_MESSAGE } from "@/configuration/prompts";
import { useEffect, useState } from "react";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  const [chatMessages, setChatMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMessages = sessionStorage.getItem("chatMessages");
      return savedMessages ? JSON.parse(savedMessages) : [{ role: "assistant", content: INITIAL_MESSAGE }];
    }
    return [{ role: "assistant", content: INITIAL_MESSAGE }];
  });

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const resetChat = () => {
    setChatMessages([{ role: "assistant", content: INITIAL_MESSAGE }]);
    sessionStorage.removeItem("chatMessages");
  };

  return (
    <>
      <ChatHeader clearMessages={clearMessages} resetChat={resetChat} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
          <ChatMessages messages={chatMessages} indicatorState={indicatorState} />
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </>
  );
}
