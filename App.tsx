import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';

import Input from './src/components/Input/Input';
export default function App() {
  const [text,setText] = useState<string>('');

  const inputChangeHandler = (onChangeText:string)=>{
    setText(onChangeText);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder={'Quoi de neuf ?'} value={text} onChangeHandler={inputChangeHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
