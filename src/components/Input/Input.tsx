import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import InputProps from './InputProps';

export default function Input(props:InputProps) {
    const {placeholder, value, onChangeHandler} = props;
    return (
        <TextInput style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#d3d3d3" 
          value={value}
          autoFocus
          onChangeText={(text:string) => onChangeHandler(text)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
      fontSize: RFValue(18,512),
      padding: 10,
      marginVertical: 10,
      backgroundColor:"#fafafa",
      borderRadius: 7.5,
    },
  });
