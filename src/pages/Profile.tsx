import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Bookmark, Tag, Settings, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockUsers, mockPosts } from "@/utils/mockData";

export const Profile = () => {
  const { username } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Find user by username (in real app, would fetch from API)
  const user = mockUsers.find(u => u.username === username) || mockUsers[0];
  const userPosts = mockPosts.filter(post => post.username === username);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: connect to backend
    // fetch(`/api/users/${user.id}/follow`, { method: "POST" });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Profile Header */}
      <div className="flex items-start space-x-8 mb-8">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-32 h-32 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-2xl font-light">{user.username}</h1>
            {user.isVerified && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            <Button
              variant={isFollowing ? "outline" : "default"}
              onClick={handleFollow}
              className="px-6"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex space-x-8 mb-4">
            <div className="text-center">
              <div className="font-semibold">{user.posts}</div>
              <div className="text-sm text-muted-foreground">posts</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{user.followers.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{user.following}</div>
              <div className="text-sm text-muted-foreground">following</div>
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h2 className="font-semibold">{user.displayName}</h2>
            <p className="text-sm">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts" className="flex items-center space-x-2">
            <Grid className="h-4 w-4" />
            <span>Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center space-x-2">
            <Bookmark className="h-4 w-4" />
            <span>Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center space-x-2">
            <Tag className="h-4 w-4" />
            <span>Tagged</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-8">
          <div className="grid grid-cols-3 gap-1">
            {userPosts.map((post) => (
              <div key={post.id} className="aspect-square relative group cursor-pointer">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-8">
          <div className="text-center py-16">
            <Bookmark className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No saved posts yet</p>
          </div>
        </TabsContent>
        
        <TabsContent value="tagged" className="mt-8">
          <div className="text-center py-16">
            <Tag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No tagged posts yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};