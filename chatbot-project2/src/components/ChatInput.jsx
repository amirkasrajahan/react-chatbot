import { useState, useRef, useEffect } from 'react'

export function ChatInput({ sendMessage, isLoading }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isLoading]);

  function saveInputText(event) {
    setInput(event.target.value);
  }

  function handleSend() {
    if (input.length > 200) {
      alert("Message is too long. Please limit your message to 200 characters.");
      return;
    }
    sendMessage(input);
    setInput('');
  }

  return (
    <div className="chat-input-row">
      <input
        type="text"
        placeholder="Send a message to chatbot"
        value={input}
        onChange={saveInputText}
        disabled={isLoading}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSend();
          }
          if (event.key === 'Escape') {
            setInput('');
          }
        }}
        ref={inputRef}
      />
      <button onClick={handleSend} disabled={isLoading}>Send</button>
    </div>
  );
}