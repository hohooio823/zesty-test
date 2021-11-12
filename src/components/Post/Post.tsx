import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import PostProps from './PostProps';

export default function Post(props:PostProps) {

    const {text,image} = props;
    return (
        <View style={styles.post}>
            <Text style={styles.text}>{text}</Text>
            <Image
                style={styles.image}
                source={{
                uri: image,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
      marginBottom:20,
    },
    text:{
      fontSize:15,
      marginLeft:7.5,
      marginBottom:10,
    },
    image:{
      width: 275,
      height: 275,
      alignSelf: 'center'
    }
  });