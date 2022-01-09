import React from 'react';

import { 
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    }
  }

  const passwordChange = (val) => {
    setData({
        ...data,
        password: val,
    });
  }

  const updateSecureEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.text_header}>Identifiez-vous pour accéder à votre compte</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>

        <View style={styles.action}>

          <FontAwesome 
            name="user-o" 
            color="white" 
            size={20}
          />

          <TextInput 
            placeholder ="Inserer votre adresse e-mail" 
            placeholderTextColor={"grey"} 
            style={styles.textInput}                               
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />

          { data.check_textInputChange ? 
          <Animatable.View animation="bounceIn">

            <Feather 
              name="check-circle" 
              color="white" 
              size={20}
            />

          </Animatable.View>
          : null }

        </View>

        <Text style={[styles.text_footer, { marginTop: 15}]}>Mot de passe</Text>

        <View style={styles.action}>

          <FontAwesome 
            name="lock" 
            color="white" 
            size={20}
          />

          <TextInput 
            placeholder=" Inserer votre Mot de passe"
            placeholderTextColor={"grey"} 
            style={styles.textInput}                                                                autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => passwordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureEntry}>
            {data.secureTextEntry ? 
            <Feather 
              name="eye-off" 
              color="white" 
              size={20}
            /> 
            :   //sinon
            <Feather 
            name="eye" 
            color="white" 
            size={20}
            />}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>

          <TouchableOpacity>
              <Text style={styles.textSign}>Connecter à mon compte</Text>
          </TouchableOpacity>
          
        </View>

        <View style={styles.button}>

          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.textSign}>Crée un compte</Text>
          </TouchableOpacity>
          
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },

  footer: {
    flex: 3,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  text_header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25, 
  },

  text_footer: {
    color: 'white',
    fontSize: 16
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 5, 
    color: 'white'
  },

  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: 'white'
  },

  button: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40

  },
  
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  textSign: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
});