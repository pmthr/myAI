"use client";
import { useState, useEffect } from "react";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

export default function useApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [indicatorState, setIndicatorState] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("chatMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      setMessages([{ role: "assistant", content: "Hello, how can I help you?" }]);
    }
    function handleBeforeUnload() {
      localStorage.removeItem("chatMessages");
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
  }

  function clearMessages() {
    setMessages([]);
  }

  function resetChat() {
    setMessages([{ role: "assistant", content: "Hello, how can I help you?" }]);
  }

  return {
    messages,
    input,
    isLoading,
    indicatorState,
    handleInputChange,
    handleSubmit,
    clearMessages,
    resetChat
  };
}
