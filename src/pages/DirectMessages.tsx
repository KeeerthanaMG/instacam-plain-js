import { useState } from "react";
import { Send, Phone, Video, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockMessages } from "@/utils/mockData";

export const DirectMessages = () => {
  const [selectedChat, setSelectedChat] = useState(mockMessages[0]);
  const [messageText, setMessageText] = useState("");

  const mockChatMessages = [
    {
      id: 1,
      senderId: selectedChat.userId,
      text: "Hey! Love your latest post 😍",
      timestamp: "2:30 PM",
      isFromMe: false
    },
    {
      id: 2,
      senderId: 1, // current user
      text: "Thank you so much! 🙏",
      timestamp: "2:32 PM",
      isFromMe: true
    },
    {
      id: 3,
      senderId: selectedChat.userId,
      text: "Where was that photo taken?",
      timestamp: "2:33 PM",
      isFromMe: false
    }
  ];

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    // TODO: connect to backend
    // fetch("/api/messages/", { method: "POST", body: JSON.stringify({ text: messageText, recipientId: selectedChat.userId }) });
    
    setMessageText("");
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Chat List */}
      <div className="w-80 border-r border-border">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-semibold">Messages</h2>
        </div>
        
        <div className="overflow-y-auto">
          {mockMessages.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 hover:bg-accent cursor-pointer ${
                selectedChat.id === chat.id ? "bg-accent" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={chat.userAvatar}
                  alt={chat.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{chat.username}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {chat.lastMessage}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  {chat.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={selectedChat.userAvatar}
              alt={selectedChat.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{selectedChat.username}</p>
              <p className="text-sm text-muted-foreground">Active now</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockChatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isFromMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.isFromMe
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};