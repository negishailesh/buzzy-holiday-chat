
const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-end gap-2 max-w-[75%]">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop&crop=face"
          alt="Alex"
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />
        
        <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
