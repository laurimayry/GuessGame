import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

let number
let guesses

export default function App() {

  const [input, setInput] = useState('')
  const [text, setText] = useState('')
  


  const handleQuess = () =>{
      setText('Quess a number between 1-100')
      guesses = 0
      number = Math.floor(Math.random() * 100) + 1
      console.log(number)
  }
  
  useEffect(() => {
    handleQuess()
  }, [])

  const makeGuess = () => {
    const guess = Number(input)
    console.log(guess)
    guesses++

    if(guess < number){
      setText(`Your quess ${guess} is too low`)
    }
    else if (guess > number){
      setText(`Your quess ${guess} is too high`)
    }
    else{
      Alert.alert(`You guessed the number in ${guesses} guesses`)
      handleQuess()
    }
    setInput('')
  }
  

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        onChangeText={input => setInput(input)}
        style={{width: 100, borderColor: 'black', borderWidth: 1}}
        keyboardType='numeric'
        value={input}
        >
      </TextInput>
      <TouchableOpacity style={{marginTop: 10}}>
      <Button title='MAKE GUESS' onPress={makeGuess}></Button>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
