import React from 'react';

import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Image
          source={require('./PMU.jpg')}
          style={{ width: 250, height: 100 }}
          resizeMode="stretch"
        />

      </View>

      <View style={styles.footer}>

        <Text style={styles.text}>Voulez-vous créer une compte ?</Text>

        <View style={styles.button}>

          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.textSign}>Démarrer</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  button: {
    width: 150,
    backgroundColor: 'white',
    marginTop: 75,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40

  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25,
    marginTop: 30,
  },

  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },

  textSign: {
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18
  },
});
