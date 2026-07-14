import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function FounderProfile() {
  return (
    <SafeAreaView className="flex-1 bg-brand-dark" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Cover Image & Avatar */}
        <View className="relative h-64 w-full">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' }}
            className="h-full w-full opacity-60"
          />
          <View className="absolute -bottom-12 left-6">
            <View className="h-24 w-24 rounded-full border-4 border-brand-dark overflow-hidden">
              <Image 
                source={{ uri: 'https://i.pravatar.cc/300?img=11' }}
                className="h-full w-full"
              />
            </View>
          </View>
        </View>

        {/* Profile Info */}
        <View className="px-6 pt-16 pb-6">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-3xl font-bold text-white tracking-tight">Dev Tribhuwan</Text>
              <Text className="text-brand-cyan font-medium mt-1">@dev_founder</Text>
            </View>
            <TouchableOpacity className="bg-brand-cyan/20 px-4 py-2 rounded-full border border-brand-cyan/30">
              <Text className="text-brand-cyan font-semibold text-sm">Follow</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-300 mt-4 leading-6">
            Building the operating system for entrepreneurship. Ex-YC, 2x exited founder. Currently obsessed with fixing the startup ecosystem at Thrivo.
          </Text>
        </View>

        {/* Metrics Grid */}
        <View className="px-6 flex-row gap-4 mb-8">
          <View className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md">
            <Text className="text-gray-400 text-xs font-medium uppercase tracking-wider">Startup Stage</Text>
            <Text className="text-white text-xl font-bold mt-1">Seed</Text>
          </View>
          <View className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md">
            <Text className="text-gray-400 text-xs font-medium uppercase tracking-wider">MRR</Text>
            <Text className="text-brand-lime text-xl font-bold mt-1">$45k</Text>
          </View>
        </View>

        {/* Video Pitch Section */}
        <View className="px-6 mb-12">
          <Text className="text-xl font-bold text-white mb-4">Latest Pitch</Text>
          <TouchableOpacity className="w-full h-48 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative justify-center items-center">
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80' }}
              className="absolute inset-0 w-full h-full opacity-40"
            />
            <View className="h-16 w-16 bg-brand-cyan/20 rounded-full items-center justify-center backdrop-blur-md border border-brand-cyan/50">
              <Ionicons name="play" size={32} color="#00C6D8" style={{ marginLeft: 4 }} />
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
