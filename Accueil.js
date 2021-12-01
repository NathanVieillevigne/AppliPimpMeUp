import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Accueil(){
    return(
        <View style={styles.body}>
            <Text style={styles.text}>
                Ceci est l'écran d'accueil! 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontStyle: 'italic',
    }
})