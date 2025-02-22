import React from 'react'
import { KeyboardAvoidingView, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { router } from 'expo-router'

import ThemedBottom from '@/components/shared/ThemedButton'
import ThemedTextInput from '@/components/shared/ThemedTextInput'

const LoginScreen = () => {

  return (
    <KeyboardAvoidingView behavior='padding' className='flex-1 justify-center'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className='flex items-center justify-center'>
          <Text>AWS IAM Admin</Text>
        </View>
        <View className='flex flex-col items-center justify-center'>
          <ThemedTextInput
            icon={'cloudy-outline'}
            placeholder='Account Number'
            autoCapitalize='none'
            keyboardType='number-pad'
          />
          <ThemedTextInput
            icon={'person-outline'}
            placeholder='IAM User'
            autoCapitalize='none'
          />
          <ThemedTextInput  
            icon={'key-outline'}  
            placeholder='Password' 
            secureTextEntry
            autoCapitalize='none'
          />
          <ThemedBottom 
            color='primary'
            onPress={() => router.push('/home')}
          >
            Login
          </ThemedBottom>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
