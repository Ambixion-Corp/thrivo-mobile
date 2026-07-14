import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export function InvestorMatch() {
  return (
    <SafeAreaView className="flex-1 bg-brand-dark" edges={['top']}>
      <View className="px-6 py-4 flex-row justify-between items-center">
        <Text className="text-2xl font-black text-white tracking-tighter">Deal Flow</Text>
        <Ionicons name="options" size={24} color="#fff" />
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Startup Card */}
        <View className="w-full bg-white/5 rounded-[32px] border border-white/10 overflow-hidden mb-6">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' }}
            className="w-full h-48 opacity-80"
          />
          <View className="p-6">
            <View className="flex-row justify-between items-start mb-4">
              <View>
                <Text className="text-2xl font-bold text-white">Quantum Metrics</Text>
                <Text className="text-brand-lime font-medium mt-1">SaaS / Analytics</Text>
              </View>
              <View className="bg-brand-lime/20 px-3 py-1 rounded-full border border-brand-lime/30">
                <Text className="text-brand-lime font-bold text-xs">Series A</Text>
              </View>
            </View>

            <Text className="text-gray-300 leading-5 mb-6">
              AI-driven predictive analytics for enterprise supply chains. Currently generating $120k MRR with 140% YoY growth.
            </Text>

            <View className="flex-row gap-2 mb-6">
              <View className="flex-1 bg-black/40 rounded-xl p-3 items-center">
                <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Raising</Text>
                <Text className="text-white font-bold mt-1">$4M</Text>
              </View>
              <View className="flex-1 bg-black/40 rounded-xl p-3 items-center">
                <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Valuation</Text>
                <Text className="text-white font-bold mt-1">$20M</Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-white/10 py-4 rounded-2xl items-center justify-center border border-white/5">
                <Text className="text-white font-bold">Pass</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-brand-cyan py-4 rounded-2xl items-center justify-center shadow-[0_0_15px_rgba(0,198,216,0.4)]">
                <Text className="text-brand-dark font-black">Request Intro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
