import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  Image
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({navigation}) => {
  return(
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text category="s1" style={styles.text}>
              idk
            </Text>
            <Text
              category="c1"
              appearance="hint"
              style={styles.textTime}>
              12:30
            </Text>
          </View>
        </View>
        <View style={styles.cardImage}>
          <Image
          source={require('./idk.jpg')}
          style={{ width: 'stretch', height: 220 }}
          />
        </View>
      </View>
  )};

export default HomeScreen;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
  footer: {
    paddingTop: 16,
  },
  time: {
    marginTop: 5,
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'yellow',
    //maxHeight: 520
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    padding: 10,
  },
  cardBottom: {
    padding: 10,
    width: '100%',
    height: 100,
  },
  avatar: {
    marginRight: 16,
  },
  text: {
    color: 'pink',
  },
  textTime: {
    color: 'green',
    // marginTop: 5,
  },
  image: {
    width: '100%',
    // minHeight: 220,
    maxHeight: 220,
  },
  cardImage: {
    maxHeight: 220,
  },
});

  