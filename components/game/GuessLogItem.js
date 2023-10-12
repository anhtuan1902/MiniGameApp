import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.itemColor,
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.prinmary600,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    itemText :{
        fontFamily: 'open-sans' 
    }
})