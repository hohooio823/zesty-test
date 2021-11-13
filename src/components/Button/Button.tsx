import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import ButtonProps from './ButtonProps';

export default function Button(props:ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPressHandler} style={styles.touchableOpacity}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
      backgroundColor:"yellow",
      borderRadius: 7.5,
      paddingVertical:10,
      paddingHorizontal:20,
      marginBottom:10,
      alignSelf:"flex-end",
      alignItems:"center",
    },
    text:{
      fontSize: RFValue(14,512),
      color:"black",
      fontWeight:"bold"
    }
  });
