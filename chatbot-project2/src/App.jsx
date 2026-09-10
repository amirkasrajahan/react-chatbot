import { useState} from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'




function App() {
        const [currentMessage, setChatMessage] = useState([]);
        const welcomeMessage = "Welcome to the chatbot project! Send a message using the textbox below."


        const handleResetChat = () => {
          setChatMessage([]);
        }
        return (
          <div className="chat-window">
            
            <div className="chat-header">Chatbot</div>
            <div className="chat-header">Messages: {currentMessage.length / 2}
              <button className="reset-button" onClick={handleResetChat}>Reset Chat</button>
            </div>
            <p className={currentMessage.length === 0 ? "welcomeMessage" : "hideWelcomeMessage"}>{welcomeMessage}</p>
            <ChatMessages currentMessage={currentMessage} />
            <ChatInput
              currentMessage={currentMessage}
              setChatMessage={setChatMessage}
            />
          </div>
        );
      }

export default App
