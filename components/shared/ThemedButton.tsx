import { Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string,
    color: 'primary' | 'secondary' | 'tertiary'
}

const ThemedButton = ({children, color = 'primary', onPress, onLongPress}: Props) => {

  const buttonColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color]

  return (  
    <Pressable 
        className={`${buttonColor} rounded-md p-4 w-2/3 active:opacity-80 m-2`}
        onLongPress={onLongPress}
        onPress={onPress}
        >
      <Text className='text-center'>{children}</Text>
    </Pressable>
  )
}

export default ThemedButton