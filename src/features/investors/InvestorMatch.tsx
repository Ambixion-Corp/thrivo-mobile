import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery, useMutation } from '@tanstack/react-query';
import { API_ROUTES } from '../../config/api';

const { width } = Dimensions.get('window');

interface Deal {
  id: string;
  name: string;
  category: string;
  stage: string;
  description: string;
  raising: string;
  valuation: string;
  imageUrl: string;
}

const useDealsQuery = () =>
  useQuery({
    queryKey: ['deals'],
    queryFn: async (): Promise<Deal[]> => {
      const response = await fetch(API_ROUTES.deals);
      if (!response.ok) {
        throw new Error('Failed to fetch deals');
      }
      return response.json();
    },
  });

const useRequestIntroMutation = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${API_ROUTES.deals}/${id}/intro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to request intro');
      }
      return response.json();
    },
  });

export function InvestorMatch() {
  const { data: deals, isLoading, error } = useDealsQuery();
  const requestIntro = useRequestIntroMutation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePass = () => {
    if (deals && currentIndex < deals.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleIntro = async (dealId: string, name: string) => {
    try {
      await requestIntro.mutateAsync(dealId);
      Alert.alert('Request Sent', `Introduction request for ${name} has been sent successfully.`);
      if (deals && currentIndex < deals.length) {
        setCurrentIndex((prev) => prev + 1);
      }
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Failed to request intro.');
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-brand-dark justify-center items-center">
        <ActivityIndicator size="large" color="#00C6D8" />
      </SafeAreaView>
    );
  }

  if (error || !deals || deals.length === 0 || currentIndex >= deals.length) {
    return (
      <SafeAreaView className="flex-1 bg-brand-dark" edges={['top']}>
        <View className="px-6 py-4 flex-row justify-between items-center">
          <Text className="text-2xl font-black text-white tracking-tighter">Deal Flow</Text>
          <Ionicons name="options" size={24} color="#fff" />
        </View>
        <View className="flex-1 justify-center items-center px-6">
          <Ionicons name="sparkles" size={60} color="#00C6D8" className="mb-4" />
          <Text className="text-white text-xl font-bold text-center">You're all caught up!</Text>
          <Text className="text-gray-400 text-sm text-center mt-2">Check back later for more investment deals.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentDeal = deals[currentIndex];

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
            source={{ uri: currentDeal.imageUrl }}
            className="w-full h-48 opacity-80"
          />
          <View className="p-6">
            <View className="flex-row justify-between items-start mb-4">
              <View>
                <Text className="text-2xl font-bold text-white">{currentDeal.name}</Text>
                <Text className="text-brand-lime font-medium mt-1">{currentDeal.category}</Text>
              </View>
              <View className="bg-brand-lime/20 px-3 py-1 rounded-full border border-brand-lime/30">
                <Text className="text-brand-lime font-bold text-xs">{currentDeal.stage}</Text>
              </View>
            </View>

            <Text className="text-gray-300 leading-5 mb-6">
              {currentDeal.description}
            </Text>

            <View className="flex-row gap-2 mb-6">
              <View className="flex-1 bg-black/40 rounded-xl p-3 items-center">
                <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Raising</Text>
                <Text className="text-white font-bold mt-1">{currentDeal.raising}</Text>
              </View>
              <View className="flex-1 bg-black/40 rounded-xl p-3 items-center">
                <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Valuation</Text>
                <Text className="text-white font-bold mt-1">{currentDeal.valuation}</Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity 
                className="flex-1 bg-white/10 py-4 rounded-2xl items-center justify-center border border-white/5"
                onPress={handlePass}
                disabled={requestIntro.isPending}
              >
                <Text className="text-white font-bold">Pass</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className="flex-1 bg-brand-cyan py-4 rounded-2xl items-center justify-center shadow-[0_0_15px_rgba(0,198,216,0.4)]"
                onPress={() => handleIntro(currentDeal.id, currentDeal.name)}
                disabled={requestIntro.isPending}
              >
                {requestIntro.isPending ? (
                  <ActivityIndicator color="#0A0A0A" />
                ) : (
                  <Text className="text-brand-dark font-black">Request Intro</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
