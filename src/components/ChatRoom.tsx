
import { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { MessageSquare } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "alex" | "sam";
  timestamp: Date;
  isTyping?: boolean;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationScript: Omit<Message, "id" | "timestamp">[] = [
    { text: "Hey! I've been thinking about our conversation yesterday 😊", sender: "alex" },
    { text: "Oh yeah? About what? 🤔", sender: "sam" },
    { text: "About taking that trip we talked about! I've been looking at some amazing destinations", sender: "alex" },
    { text: "Really?! That's so exciting! Where are you thinking? ✈️", sender: "sam" },
    { text: "I found this incredible place in Bali... crystal clear waters, amazing sunsets", sender: "alex" },
    { text: "Bali sounds absolutely perfect! I've always wanted to go there 🌴", sender: "sam" },
    { text: "The best part is I found this cute little beachfront villa we could rent", sender: "alex" },
    { text: "Stop it, you're making me too excited! When were you thinking? 🏖️", sender: "sam" },
    { text: "How about next month? I checked and we both have that week free", sender: "alex" },
    { text: "Yes! Let's do it! This is going to be the best trip ever! 🎉", sender: "sam" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentMessageIndex < conversationScript.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        const typingTimer = setTimeout(() => {
          setIsTyping(false);
          const newMessage: Message = {
            id: Date.now(),
            ...conversationScript[currentMessageIndex],
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, newMessage]);
          setCurrentMessageIndex(prev => prev + 1);
        }, Math.random() * 2000 + 1000); // Random typing duration between 1-3 seconds

        return () => clearTimeout(typingTimer);
      }, Math.random() * 1500 + 500); // Random delay between messages

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  return (
    <div className="max-w-md mx-auto h-screen bg-white shadow-2xl flex flex-col">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-yellow-50/20">
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <MessageSquare className="w-4 h-4" />
            You matched with Alex!
          </div>
        </div>
        
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            disabled
          />
          <button className="p-3 bg-yellow-400 text-white rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-50" disabled>
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
