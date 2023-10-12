import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.screen}>
      <Title> Game Is Over! </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.prinmary600,
    overflow: "hidden",
    margin: 26,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    color: Colors.textColor,
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.prinmary600,
  },
});
