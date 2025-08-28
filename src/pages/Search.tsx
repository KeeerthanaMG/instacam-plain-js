import { useState } from "react";
import { Search as SearchIcon, User, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockUsers, mockPosts } from "@/utils/mockData";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = mockUsers.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPosts = mockPosts.filter(post =>
    post.caption.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mockHashtags = [
    { tag: "photography", posts: 1250000 },
    { tag: "sunset", posts: 890000 },
    { tag: "travel", posts: 2340000 },
    { tag: "food", posts: 1890000 },
    { tag: "fitness", posts: 760000 },
  ];

  const filteredHashtags = mockHashtags.filter(hashtag =>
    hashtag.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Search Bar */}
      <div className="relative mb-8">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 text-base"
        />
      </div>

      {/* Search Results */}
      {searchQuery && (
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="hashtags">Tags</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="mt-6">
            <div className="space-y-4">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center space-x-3 p-4 bg-card rounded-lg card-shadow">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{user.username}</p>
                      <p className="text-sm text-muted-foreground">{user.displayName}</p>
                      <p className="text-sm text-muted-foreground">{user.followers.toLocaleString()} followers</p>
                    </div>
                    {user.isVerified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <User className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No users found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-3 gap-1">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div key={post.id} className="aspect-square relative">
                    <img
                      src={post.image}
                      alt="Search result"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No posts found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="hashtags" className="mt-6">
            <div className="space-y-4">
              {filteredHashtags.length > 0 ? (
                filteredHashtags.map((hashtag) => (
                  <div key={hashtag.tag} className="flex items-center space-x-3 p-4 bg-card rounded-lg card-shadow">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Hash className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">#{hashtag.tag}</p>
                      <p className="text-sm text-muted-foreground">
                        {hashtag.posts.toLocaleString()} posts
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Hash className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No hashtags found</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Default Content */}
      {!searchQuery && (
        <div className="text-center py-16">
          <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Search Instacam</h2>
          <p className="text-muted-foreground">Find users, posts, and hashtags</p>
        </div>
      )}
    </div>
  );
};