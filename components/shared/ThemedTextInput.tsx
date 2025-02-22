import React, { useRef, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap
  iconColor?: string 
}

const ThemedTextInput = ({icon, ...rest}: Props) => {

  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<TextInput>(null)

  return (
    <View 
      className={`flex-row p-4 w-2/3 rounded-md border-2 m-2  ${isFocused ? 'border-tertiary' : 'border-gray-400'}`} 
      onTouchStart={() => inputRef.current?.focus()}
      >
      {icon && <Ionicons color={'gray'} name={icon} size={24} className='mr-4'/>}
      <TextInput  
        {...rest}
        ref={inputRef}
        className='text-start'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  )
}

export default ThemedTextInput