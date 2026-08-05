import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../../store/authStore';
import { Ionicons } from '@expo/vector-icons';

export function SignupScreen({ navigation }: any) {
  const { signup } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'founder' | 'investor' | 'creator' | 'consumer'>('founder');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      await signup(email, password, role);
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const roles = [
    { id: 'founder', title: 'Founder', icon: 'rocket' },
    { id: 'investor', title: 'Investor', icon: 'briefcase' },
    { id: 'creator', title: 'Creator', icon: 'star' },
    { id: 'consumer', title: 'Consumer', icon: 'person' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1 px-6 pt-12">
          <View className="mb-8">
            <Text className="text-4xl font-bold text-white mb-2">Join Thrivo</Text>
            <Text className="text-base text-zinc-400">Create your account to get started</Text>
          </View>

          {error ? (
            <View className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <Text className="text-red-500 text-sm font-semibold">{error}</Text>
            </View>
          ) : null}

          <View className="mb-6">
            <Text className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">I am a...</Text>
            <View className="flex-row flex-wrap justify-between gap-y-3">
              {roles.map((r) => (
                <TouchableOpacity 
                  key={r.id}
                  className={`w-[48%] p-4 rounded-xl border ${role === r.id ? 'border-[#00C6D8] bg-[#00C6D8]/10' : 'border-zinc-800 bg-zinc-900'} flex-row items-center gap-2`}
                  onPress={() => setRole(r.id as any)}
                  disabled={isLoading}
                >
                  <Ionicons name={r.icon as any} size={18} color={role === r.id ? '#00C6D8' : '#71717a'} />
                  <Text className={`font-bold ${role === r.id ? 'text-[#00C6D8]' : 'text-zinc-400'}`}>{r.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="space-y-4 mb-8">
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
                editable={!isLoading}
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
                editable={!isLoading}
              />
            </View>
          </View>

          <TouchableOpacity 
            className="w-full bg-white rounded-xl py-4 flex items-center justify-center mb-8"
            onPress={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text className="text-black font-bold text-base">Create Account</Text>
            )}
          </TouchableOpacity>

          <View className="flex-row justify-center pb-8">
            <Text className="text-zinc-500">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} disabled={isLoading}>
              <Text className="text-white font-bold">Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
