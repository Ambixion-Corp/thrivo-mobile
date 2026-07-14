import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import removed
import { Ionicons } from '@expo/vector-icons';
import { View, Platform } from 'react-native';

import { DiscoveryFeed } from '../features/feed/DiscoveryFeed';
import { FounderProfile } from '../features/profiles/FounderProfile';
import { CreatorProfile } from '../features/profiles/CreatorProfile';
import { InvestorMatch } from '../features/investors/InvestorMatch';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0A0A0A',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.1)',
          height: Platform.OS === 'ios' ? 88 : 68,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingTop: 12,
          position: 'absolute', // Make it hover over content
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          
          if (route.name === 'Feed') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Investor') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Creator') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          
          return (
            <View className={`${focused ? 'bg-white/10' : ''} p-2 rounded-2xl`}>
              <Ionicons name={iconName as any} size={24} color={focused ? '#00C6D8' : '#666'} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Feed" component={DiscoveryFeed} />
      <Tab.Screen name="Investor" component={InvestorMatch} />
      <Tab.Screen name="Creator" component={CreatorProfile} />
      <Tab.Screen name="Profile" component={FounderProfile} />
    </Tab.Navigator>
  );
}
