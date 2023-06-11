import React from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [number, setNumber] = React.useState('');

  const onChanged = (text) => {
    let newText = '';

    if (/^[1-4]$/.test(text)) {
      newText = text;
    } else {
      alert("Please enter a number between 1 and 4");
    }

    setNumber(newText);
  }

  const onPress = () => {
    if (number.length !== 0) {
      navigation.navigate('NumberPage', { number: parseInt(number) });
      setNumber('');
      Keyboard.dismiss();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='numeric'
        onChangeText={text => onChanged(text)}
        value={number}
        style={styles.input}
        placeholder='Number'
        maxLength={1}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Submit'
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
}

const NumberPage = ({ navigation, route }) => {
  const { number } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Button title={`Page ${number}`}  />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NumberPage" component={NumberPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: '#c7c3c3',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
})

export default App;
