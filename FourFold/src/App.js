import React from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard, Alert } from 'react-native';

const App = () => {
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
            Alert.alert(
                "Confirm Number",
                number,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },
                    {
                        text: "OK",
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
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
