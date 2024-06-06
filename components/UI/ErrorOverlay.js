import { View, Text, StyleSheet } from 'react-native'
import React, { startTransition } from 'react'
import { GlobalStyles } from '../../constants/styles'

export default function ErrorOverlay({message, }) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error occurred!</Text>
        <Text style={styles.title}>{message}</Text>
        <Text style={styles.text}>Please try again later.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});