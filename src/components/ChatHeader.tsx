
import { ArrowLeft, MoreVertical, Video, Phone } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face"
              alt="Alex"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Alex</h3>
            <p className="text-sm text-green-500 font-medium">Online</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Video className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
