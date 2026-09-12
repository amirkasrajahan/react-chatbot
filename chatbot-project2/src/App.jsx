import { useState} from 'react'
import { useChatMessages } from './hooks/useChatMessages'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'




function App() {
        const { messages, sendMessage, isLoading, resetMessages } = useChatMessages();
        const [isDarkMode, setIsDarkMode] = useState(false);
        const welcomeMessage = "Welcome to the chatbot project! Send a message using the textbox below."

        return (
          <div className={isDarkMode ? 'chat-window-dark-mode' : 'chat-window'}>

            <div className="chat-header">Chatbot</div>
            <div className="chat-header">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className='dark-mode-button'>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="chat-header">Messages: {messages.length / 2}
              <button className="reset-button" onClick={resetMessages}>Reset Chat</button>
            </div>
            <p className={messages.length === 0 ? "welcomeMessage" : "hideWelcomeMessage"}>{welcomeMessage}</p>
            <ChatMessages currentMessage={messages} />
            <ChatInput
              sendMessage={sendMessage}
              isLoading={isLoading}
            />
          </div>
        );
      }

export default App
