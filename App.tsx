import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';

import Input from './src/components/Input/Input';
import Button from './src/components/Button/Button';

import PostProps from './src/components/Post/PostProps';

import fetchImage from './src/utils/fetchImage';

export default function App() {
  const [posts,setPosts] = useState<PostProps[]>([]);
  const [text,setText] = useState<string>("");

  const inputChangeHandler = (onChangeText:string)=>{
    setText(onChangeText);
  }

  const addPostHandler = async ()=>{
    setPosts([{text,image:await fetchImage()},...posts]);
    setText("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder={'Quoi de neuf ?'} value={text} onChangeHandler={inputChangeHandler} />
      <Button onPressHandler={addPostHandler}>Publier</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:15,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
