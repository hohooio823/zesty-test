import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
      fontSize:RFValue(15,512),
      marginBottom:10,
    },
    image:{
      width: "100%",
      height: 275,
      alignSelf: 'center'
    }
  });