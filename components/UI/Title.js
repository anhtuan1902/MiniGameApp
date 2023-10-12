import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return (
      <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    color: 'white',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20
  },
});
