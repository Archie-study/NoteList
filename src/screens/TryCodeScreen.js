import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TryCodeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.blueBox} />
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.blueBox} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  secondContainer: {
    padding: 16,
    margin: 16,
    flex: 1,
    flexDirection : 'row',
    backgroundColor: 'mistyrose'
  },
  blueBox: {
    backgroundColor: 'blue',
    width: '25%',
    height: '25%',
    borderWidth: 1
  },
  redBox: {
    backgroundColor: 'red',
    width: '25%',
    height: '25%',
    borderWidth: 1,
    // top: 0,
    bottom: 0,
    right: 0,
    // left: 20,
    zIndex: 1,
    position: 'absolute'
  }
})

export default TryCodeScreen