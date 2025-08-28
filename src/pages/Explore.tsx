import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { mockPosts } from "@/utils/mockData";

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1">
        {mockPosts.map((post) => (
          <div key={post.id} className="aspect-square relative group cursor-pointer">
            <img
              src={post.image}
              alt="Explore post"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};