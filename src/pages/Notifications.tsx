import { Button } from "@/components/ui/button";
import { mockNotifications } from "@/utils/mockData";

export const Notifications = () => {
  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`flex items-center space-x-3 p-4 rounded-lg ${
              !notification.isRead ? "bg-accent" : "bg-card"
            } card-shadow`}
          >
            <img
              src={notification.userAvatar}
              alt={notification.user}
              className="w-12 h-12 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{notification.user}</span>
                {" "}
                <span>{notification.content}</span>
                {" "}
                <span className="text-muted-foreground">{notification.timestamp}</span>
              </p>
            </div>
            
            {notification.type === "follow" && (
              <Button variant="outline" size="sm">
                Follow
              </Button>
            )}
            
            {!notification.isRead && (
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center py-8">
        <p className="text-muted-foreground">You're all caught up!</p>
      </div>
    </div>
  );
};