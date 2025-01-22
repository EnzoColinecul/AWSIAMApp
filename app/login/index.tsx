import { View, Text } from 'react-native'
import React from 'react'
import CustomBotton from '@/components/shared/CustomBotton'
import { router } from 'expo-router'

const LoginScreen = () => {
  return (
    <View className='flex flex-col items-center justify-center h-full'>
      <CustomBotton 
        color='primary'
        onPress={() => router.push('/home')}
      >
        Login
    </CustomBotton>
    </View>
  )
}

export default LoginScreen