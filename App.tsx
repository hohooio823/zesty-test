import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from './src/components/Input/Input';
import Button from './src/components/Button/Button';
import Posts from './src/components/Posts/Posts';

import PostProps from './src/components/Post/PostProps';

import fetchImage from './src/utils/fetchImage';

export default function App() {
  const [posts,setPosts] = useState<PostProps[]>([]);
  const [text,setText] = useState<string>("");

  const inputChangeHandler = (onChangeText:string)=>{
    setText(onChangeText);
  }

  const addPostHandler = async ()=>{
    const newPost = {text,image:await fetchImage()};
    setPosts([newPost,...posts]);
    setText("");
    await AsyncStorage.setItem(
      'posts',
      JSON.stringify([newPost,...posts])
    );
  }

  const fetchPostsFromStorage = async ()=>{
    const posts = await AsyncStorage.getItem('posts');
    posts!=null?setPosts(JSON.parse(posts)):null;
  }
  
  useEffect(()=>{
    fetchPostsFromStorage();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder={'Quoi de neuf ?'} value={text} onChangeHandler={inputChangeHandler} />
      <Button onPressHandler={addPostHandler}>Publier</Button>
      <Posts posts={posts} />
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
