// Mock data for Instacam - Instagram clone

export const mockUsers = [
  {
    id: 1,
    username: "johndoe",
    displayName: "John Doe",
    bio: "📸 Photography enthusiast | 🌍 World traveler",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    followers: 1420,
    following: 890,
    posts: 342,
    isFollowing: false,
    isVerified: true
  },
  {
    id: 2,
    username: "sarahwilson",
    displayName: "Sarah Wilson",
    bio: "✨ Lifestyle blogger | 🥗 Healthy recipes",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    followers: 892,
    following: 456,
    posts: 187,
    isFollowing: true,
    isVerified: false
  },
  {
    id: 3,
    username: "mikejohnson",
    displayName: "Mike Johnson",
    bio: "🏋️‍♂️ Fitness coach | 💪 Motivation daily",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    followers: 2340,
    following: 234,
    posts: 567,
    isFollowing: false,
    isVerified: true
  }
];

export const mockPosts = [
  {
    id: 1,
    userId: 1,
    username: "johndoe",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    caption: "Beautiful sunset at the beach 🌅 #sunset #beach #photography",
    likes: 234,
    comments: 12,
    timestamp: "2h",
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 2,
    userId: 2,
    username: "sarahwilson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop",
    caption: "Healthy breakfast bowl to start the day right! 🥗✨ Recipe in bio #healthy #breakfast",
    likes: 89,
    comments: 23,
    timestamp: "4h",
    isLiked: true,
    isBookmarked: true
  },
  {
    id: 3,
    userId: 3,
    username: "mikejohnson",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    caption: "Push through the pain, embrace the gain 💪 #fitness #motivation #workout",
    likes: 156,
    comments: 8,
    timestamp: "6h",
    isLiked: false,
    isBookmarked: false
  }
];

export const mockStories = [
  {
    id: 1,
    userId: 1,
    username: "johndoe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    hasNewStory: true
  },
  {
    id: 2,
    userId: 2,
    username: "sarahwilson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    hasNewStory: true
  },
  {
    id: 3,
    userId: 3,
    username: "mikejohnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    hasNewStory: false
  }
];

export const mockNotifications = [
  {
    id: 1,
    type: "like",
    user: "sarahwilson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    content: "liked your photo",
    timestamp: "2m",
    isRead: false
  },
  {
    id: 2,
    type: "follow",
    user: "mikejohnson",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "started following you",
    timestamp: "1h",
    isRead: false
  },
  {
    id: 3,
    type: "comment",
    user: "johndoe",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "commented on your photo",
    timestamp: "3h",
    isRead: true
  }
];

export const mockMessages = [
  {
    id: 1,
    userId: 2,
    username: "sarahwilson",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Hey! Love your latest post 😍",
    timestamp: "5m",
    isRead: false
  },
  {
    id: 2,
    userId: 3,
    username: "mikejohnson",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Thanks for the workout tips!",
    timestamp: "2h",
    isRead: true
  }
];