import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function useChatMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(text) {
    if (!text || isLoading) {
      return;
    }

    setIsLoading(true);

    const newMessages = [
      ...messages,
      { message: text, sender: 'user', id: crypto.randomUUID() }
    ];
    setMessages(newMessages);

    const loadingMessage = { message: 'Loading...', sender: 'robot', id: 'loading' };
    setMessages([...newMessages, loadingMessage]);

    const botResponse = await Chatbot.getResponseAsync(text);

    setMessages([
      ...newMessages,
      { message: botResponse, sender: 'robot', id: crypto.randomUUID() }
    ]);

    setIsLoading(false);
  }

  function resetMessages() {
    setMessages([]);
  }

  return { messages, sendMessage, isLoading, resetMessages };
}