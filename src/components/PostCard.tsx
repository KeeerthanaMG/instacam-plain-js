import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  userId: number;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked: boolean;
  isBookmarked: boolean;
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    // TODO: connect to backend
    // fetch(`/api/posts/${post.id}/like`, { method: "POST" });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: connect to backend
    // fetch(`/api/posts/${post.id}/bookmark`, { method: "POST" });
  };

  return (
    <div className="bg-card rounded-xl card-shadow mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              className="h-8 w-8 p-0"
            >
              <Heart 
                className={`h-6 w-6 ${isLiked ? "fill-destructive text-destructive" : ""}`} 
              />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmark}
            className="h-8 w-8 p-0"
          >
            <Bookmark 
              className={`h-6 w-6 ${isBookmarked ? "fill-current" : ""}`} 
            />
          </Button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">
          {likesCount} likes
        </p>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          <span>{post.caption}</span>
        </div>

        {/* Comments */}
        <button className="text-sm text-muted-foreground mt-2 hover:text-foreground">
          View all {post.comments} comments
        </button>
      </div>
    </div>
  );
};