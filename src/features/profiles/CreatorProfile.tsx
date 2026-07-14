import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function CreatorProfile() {
  return (
    <SafeAreaView className="flex-1 bg-brand-dark" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Cover Video/Image */}
        <View className="relative h-72 w-full">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80' }}
            className="h-full w-full opacity-70"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
          
          <View className="absolute bottom-6 left-6 right-6 flex-row items-end justify-between">
            <View>
              <Text className="text-4xl font-black text-white tracking-tighter">Akashi</Text>
              <Text className="text-brand-pink font-semibold text-lg">Tech / Business Creator</Text>
            </View>
            <TouchableOpacity className="bg-brand-pink px-6 py-3 rounded-full shadow-[0_0_15px_rgba(255,0,127,0.5)]">
              <Text className="text-white font-bold">Partner</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Analytics Grid */}
        <View className="px-6 py-8 flex-row gap-4">
          <View className="flex-1 bg-white/5 rounded-3xl p-5 border border-white/10 items-center justify-center">
            <Ionicons name="people" size={24} color="#FF007F" />
            <Text className="text-white text-2xl font-black mt-2">1.2M</Text>
            <Text className="text-gray-400 text-xs font-medium uppercase mt-1">Followers</Text>
          </View>
          <View className="flex-1 bg-white/5 rounded-3xl p-5 border border-white/10 items-center justify-center">
            <Ionicons name="trending-up" size={24} color="#FF007F" />
            <Text className="text-white text-2xl font-black mt-2">8.4%</Text>
            <Text className="text-gray-400 text-xs font-medium uppercase mt-1">Engagement</Text>
          </View>
        </View>

        {/* Portfolio Section */}
        <View className="px-6 mb-12">
          <Text className="text-xl font-bold text-white mb-6">Recent Brand Deals</Text>
          <View className="flex-row gap-4">
            <TouchableOpacity className="flex-1 aspect-[3/4] rounded-3xl overflow-hidden relative">
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80' }}
                className="w-full h-full"
              />
              <View className="absolute inset-0 bg-black/40 p-4 justify-end">
                <Text className="text-white font-bold">Nike Setup</Text>
                <Text className="text-brand-pink text-xs font-bold mt-1">2.4M Views</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-1 aspect-[3/4] rounded-3xl overflow-hidden relative">
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' }}
                className="w-full h-full"
              />
              <View className="absolute inset-0 bg-black/40 p-4 justify-end">
                <Text className="text-white font-bold">Dev Tool Pitch</Text>
                <Text className="text-brand-pink text-xs font-bold mt-1">890K Views</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
