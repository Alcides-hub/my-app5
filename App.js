import {styles} from './styles';
import React, {useState, useRef} from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const timeoutRef = useRef(null);

  const handleInputChange = (text) => {
    setInputText(text);

    if (text.length > 10) {
      Alert.alert("Typing too quickly! Bang!");
    }

    clearTimeout(timeoutRef.current);

    if (text.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setInputText('');
      }, 7000);
    }
  };
    
  return (
    <TouchableWithoutFeedback onPress={()=> {
    Keyboard.dismiss()
    Alert.alert("keyboard is dismissed")
    }}>
    <View style={styles.container}>
      <Text>This is a demonstration of the keyboard toggle in smartphones</Text>
      <TextInput 
      value={inputText}
      style={styles.input}
      onChangeText={handleInputChange} 
      placeholder="Enter your name"></TextInput>
    </View>
    </TouchableWithoutFeedback>
  );
}
