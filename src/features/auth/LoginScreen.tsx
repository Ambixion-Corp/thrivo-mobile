import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useAuthStore } from '../../store/authStore';

export function LoginScreen({ navigation }: any) {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      login(email, 'founder'); // Defaulting to founder for mock
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-6"
      >
        <View className="mb-12">
          <Text className="text-4xl font-bold text-white mb-2">Welcome Back</Text>
          <Text className="text-base text-zinc-400">Sign in to continue to Thrivo</Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</Text>
            <TextInput 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
              placeholder="name@example.com"
              placeholderTextColor="#52525b"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          <View className="mt-4">
            <Text className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Password</Text>
            <TextInput 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white text-base"
              placeholder="••••••••"
              placeholderTextColor="#52525b"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity 
            className="w-full bg-[#00C6D8] rounded-xl py-4 mt-8 flex items-center justify-center"
            onPress={handleLogin}
          >
            <Text className="text-black font-bold text-base">Sign In</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 flex-row justify-center">
          <Text className="text-zinc-500">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="text-white font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
