import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFeedQuery, StartupFeedItem } from './api/useFeedQuery';
import { useAppStore } from '../../store/useAppStore';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

export function DiscoveryFeed() {
  const { data: feedData, isLoading } = useFeedQuery();
  const { theme } = useAppStore();

  if (isLoading || !feedData) {
    return (
      <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#0A0A0A' : '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00C6D8" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: StartupFeedItem }) => (
    <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: '#0A0A0A' }}>
      {/* Background Video Placeholder */}
      <Image 
        source={{ uri: item.videoUrl }} 
        style={StyleSheet.absoluteFill}
        resizeMode="cover" 
      />
      
      {/* Dark Overlay for text readability */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(10, 10, 10, 0.4)' }]} />

      <SafeAreaView style={styles.contentContainer}>
        {/* Top Gradient/Header area could go here */}
        
        {/* Main Content Area (Bottom) */}
        <View style={styles.bottomContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.authorText}>{item.handle}</Text>
            <Text style={styles.descriptionText} numberOfLines={2}>{item.description}</Text>
            
            <TouchableOpacity style={styles.pillButton}>
              <Ionicons name="flash" size={16} color="#8DEE5F" />
              <Text style={styles.pillText}>Fund Pitch</Text>
            </TouchableOpacity>
          </View>
          
          {/* Right Action Bar */}
          <View style={styles.actionBar}>
            <View style={styles.actionItem}>
              <Image source={{ uri: item.founderAvatar }} style={styles.avatar} />
              <View style={styles.followButton}>
                <Ionicons name="add" size={12} color="white" />
              </View>
            </View>
            
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="heart" size={35} color="white" />
              <Text style={styles.actionText}>{item.likes}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="chatbubble-ellipses" size={33} color="white" />
              <Text style={styles.actionText}>{item.comments}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="share-social" size={33} color="white" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0A0A' }}>
      {/* @ts-ignore */}
      <FlashList
        data={feedData}
        renderItem={renderItem}
        // @ts-expect-error FlashList types mismatch
        estimatedItemSize={SCREEN_HEIGHT}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20, // Tab bar padding consideration
  },
  infoContainer: {
    flex: 1,
    paddingRight: 60,
  },
  authorText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 16,
    opacity: 0.9,
  },
  pillButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  pillText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  actionBar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'white',
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#FF007F',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
