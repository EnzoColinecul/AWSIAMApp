import { TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface Props extends TextInputProps {
  placeholder: string
}

const CustomInput = ({placeholder}: Props) => {

  return (
    <TextInput 
      className='p-4 w-1/2 rounded-md border-2 border-primary' 
      placeholder={placeholder}
      onChangeText={(text) => console.log(text)}
     />
  )
}

export default CustomInput