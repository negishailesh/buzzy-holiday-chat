
import { useState, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "alex" | "sam";
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isCurrentUser = message.sender === "sam";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4 duration-300`}>
      <div className={`flex items-end gap-2 max-w-[75%] ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isCurrentUser && (
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face"
            alt="Alex"
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
        )}
        
        <div className="flex flex-col gap-1">
          <div
            className={`px-4 py-3 rounded-2xl transition-all duration-300 ${
              isCurrentUser
                ? 'bg-yellow-400 text-white rounded-br-md'
                : 'bg-gray-100 text-gray-900 rounded-bl-md'
            } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <p className="text-sm leading-relaxed">{message.text}</p>
          </div>
          
          <p className={`text-xs text-gray-500 px-2 ${isCurrentUser ? 'text-right' : 'text-left'}`}>
            {formatTime(message.timestamp)}
          </p>
        </div>
        
        {isCurrentUser && (
          <img
            src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=400&fit=crop&crop=face"
            alt="Sam"
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
