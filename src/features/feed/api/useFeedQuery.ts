import { useQuery } from '@tanstack/react-query';
import { API_ROUTES } from '../../../config/api';

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

export const useFeedQuery = () => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: async (): Promise<StartupFeedItem[]> => {
      const response = await fetch(API_ROUTES.feed);
      if (!response.ok) {
        throw new Error('Failed to fetch feed');
      }
      return response.json();
    },
  });
};
