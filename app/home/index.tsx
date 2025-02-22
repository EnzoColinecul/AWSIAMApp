import { View, Text } from 'react-native'
import React from 'react'
import TabNavigation from '@/components/navigation/TabNavigation'

const HomeScreen = () => {
  return (
    <View className='flex-col flex h-full'>
      <View>
        <Text>HomeScreen</Text>
      </View>
      <View className='content-end bg-black'>
        <TabNavigation/>
      </View>
    </View>
  )
}

export default HomeScreen