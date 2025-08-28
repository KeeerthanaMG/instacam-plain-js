import { mockStories } from "@/utils/mockData";

interface Story {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  hasNewStory: boolean;
}

export const StoryBar = () => {
  return (
    <div className="bg-card rounded-xl card-shadow p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Your Story */}
        <div className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Your story"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
          <p className="text-xs text-center max-w-16 truncate">Your story</p>
        </div>

        {/* Friends Stories */}
        {mockStories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full ${story.hasNewStory ? 'story-gradient' : 'p-0.5'}`}>
              <div className={`w-full h-full rounded-full ${story.hasNewStory ? 'story-inner' : ''}`}>
                <img
                  src={story.avatar}
                  alt={`${story.username}'s story`}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-center max-w-16 truncate">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};