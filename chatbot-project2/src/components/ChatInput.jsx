import { useState, useRef, useEffect} from 'react'
import { Chatbot } from 'supersimpledev'


export function ChatInput({ currentMessage, setChatMessage }) {
          const [input, setInput] = useState('');
          const [isLoading, setIsLoading] = useState(false);
          const inputRef = useRef(null);

          useEffect(() => {
            inputRef.current.focus();
          }, [isLoading]);

          function saveInputText(event) {
            setInput(event.target.value);
          }

          async function sendMessage() {
            if (!input || isLoading) {
              return;
            }

            if(input.length > 200) {
              alert("Message is too long. Please limit your message to 200 characters.");
              return;
            }

            setIsLoading(true);

            const newMessage = [
              ...currentMessage,
              {
                message: input,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ];
            setChatMessage(newMessage);
            setInput('');

            const loadingMessage = {
              message: 'Loading...',
              sender: 'robot',
              id: 'loading'
            };
            setChatMessage([...newMessage, loadingMessage]);

            const botResponse = await Chatbot.getResponseAsync(input);

            setChatMessage([
              ...newMessage,
              {
                message: botResponse,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ]);

            setIsLoading(false);
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
                    sendMessage();
                  }
                  if (event.key === 'Escape') {
                    setInput('');
                  }
                }}
                ref={inputRef}
              />
              <button onClick={sendMessage} disabled={isLoading}>Send</button>
            </div>
          );
        }