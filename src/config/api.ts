import { Platform } from 'react-native';

// In development, localhost works for iOS/Web, but Android emulator requires 10.0.2.2
const DEV_API_URL = Platform.select({
  android: 'http://10.0.2.2:5000',
  default: 'http://localhost:5000',
});

export const API_BASE_URL = DEV_API_URL;
export const API_ROUTES = {
  login: `${API_BASE_URL}/api/auth/login`,
  signup: `${API_BASE_URL}/api/auth/signup`,
  feed: `${API_BASE_URL}/api/feed`,
  deals: `${API_BASE_URL}/api/deals`,
};
