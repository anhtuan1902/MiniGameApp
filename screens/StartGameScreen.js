import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";

export default function StartGameScreen({ onPickNumber }) {
  const [enterNumber, setEnterNumnber] = useState("");

  function numberInputHandler(enteredText) {
    setEnterNumnber(enteredText);
  }

  function resetInputHandler() {
    setEnterNumnber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 0 and 99.", [
        {
          text: "OK",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card style={{marginTop: 100}}>
        <Text style={{ color: Colors.textColor, fontSize: 25 }}>
          Enter a number
        </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enterNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 16,
    backgroundColor: Colors.itemColor,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    opacity: 0.75,
  },
  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 20,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    marginBottom: 16,
    color: Colors.prinmary600,
    backgroundColor: "transparent",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
});
