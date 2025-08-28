import { StoryBar } from "@/components/StoryBar";
import { PostCard } from "@/components/PostCard";
import { mockPosts } from "@/utils/mockData";

export const Feed = () => {
  return (
    <div className="max-w-lg mx-auto py-8 px-4">
      <StoryBar />
      
      <div className="space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* Load more placeholder */}
      <div className="text-center py-8">
        <p className="text-muted-foreground">You're all caught up!</p>
      </div>
    </div>
  );
};