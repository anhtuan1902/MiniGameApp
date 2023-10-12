import {Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function InstructionText({children, style}) {
  return (
      <Text style={[style, styles.instructionText]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.textColor,
        fontSize: 24,
    }
})