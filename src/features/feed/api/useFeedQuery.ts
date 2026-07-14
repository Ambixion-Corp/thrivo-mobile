import { useQuery } from '@tanstack/react-query';

export interface StartupFeedItem {
  id: string;
  name: string;
  handle: string;
  description: string;
  videoUrl: string;
  likes: number;
  comments: number;
  founderAvatar: string;
}

const mockFeedData: StartupFeedItem[] = [
  {
    id: '1',
    name: 'Founder',
    handle: '@Founder0',
    description: 'Building the future of sustainable architecture. We use AI to optimize material usage, cutting waste by 30%.',
    videoUrl: 'https://images.unsplash.com/photo-1541888079634-9134a652e008?auto=format&fit=crop&w=800&q=80',
    likes: 1174,
    comments: 39,
    founderAvatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: '2',
    name: 'Sarah',
    handle: '@SarahTech',
    description: 'Revolutionizing remote work with our new virtual collaboration platform. Say goodbye to zoom fatigue.',
    videoUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    likes: 892,
    comments: 12,
    founderAvatar: 'https://i.pravatar.cc/150?img=5',
  }
];

export const useFeedQuery = () => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: async (): Promise<StartupFeedItem[]> => {
      // Simulate network request instantly per user request
      return Promise.resolve(mockFeedData);
    },
  });
};
