import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function Card({children, style}) {
  return (
    <View style={[styles.inputContainer, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
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
})