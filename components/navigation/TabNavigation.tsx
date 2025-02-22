import { View, Pressable, Text } from 'react-native'
import React from 'react'



const TabNavigation = () => {
  return (
    <View className='flex-row self-end p-4'>
      <Pressable 
              className={`rounded-md active:opacity-80 m-4`}
              >
            <Text>Users</Text>
      </Pressable>
      <Pressable 
              className={`rounded-md  active:opacity-80 m-4`}
              >
            <Text>Groups</Text>
      </Pressable>
      <Pressable 
              className={`rounded-md active:opacity-80 m-4`}
              >
            <Text>Roles</Text>
      </Pressable>
      <Pressable 
              className={`rounded-md  active:opacity-80 m-4`}
              >
            <Text>Policies</Text>
      </Pressable>
    </View>
  )
}

export default TabNavigation