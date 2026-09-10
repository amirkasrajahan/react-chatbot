import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'

   
      
      
export function ChatMessages({ currentMessage }) {
        const chatMessagesRef = useRef(null);


        useEffect(() => {
          const containerElem = chatMessagesRef.current;

          if (containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [currentMessage]);

        return (
          <div className="chat-messages"
            ref={chatMessagesRef}>
            {currentMessage.map((chatMessage) => (
              <ChatMessage
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            ))}
          </div>
        );
      }
export default ChatMessages;