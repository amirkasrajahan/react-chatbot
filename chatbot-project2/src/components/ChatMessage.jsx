import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'


// converts a date to a human readable string like "3m ago" or "just now"
function formatTime(date) {
  const now = new Date();
  const diff = now - date;
  if (diff < 30000) return 'just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return date.toLocaleDateString();
}

      
export function ChatMessage({ message, sender }) {
        const date = new Date();
        const isLoadingMessage = message === 'Loading...';
        return (
          <div className={`chat-message chat-message--${sender}${isLoadingMessage ? ' chat-message--loading' : ''}`}>

            {sender === 'robot' && <img src={RobotProfileImage} width="30" />}

            <div className="chat-message-text">{message}
              <div className={sender === 'user' ? 'user-timestamp' : 'robot-timestamp'}>{formatTime(date)}</div>
            </div>

            {sender === 'user' && <img src={UserProfileImage} width="30" />}
          </div>
        );
      }