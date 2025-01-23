import { View } from 'react-native'
import React from 'react'
import CustomBotton from '@/components/shared/CustomBotton'
import { router } from 'expo-router'
import CustomField from '@/components/shared/CustomInput'

const LoginScreen = () => {
  return (
    <View className='flex flex-col items-center justify-center h-full'>
      <CustomField placeholder='123456'/>
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