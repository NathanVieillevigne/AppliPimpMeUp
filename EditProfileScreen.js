import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {
  Avatar,
  Title,
} from 'react-native-paper';


import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



const EditProfileScreen = () => {

  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      
        <View style={styles.header}>
        <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
        <Title style={[styles.title]}>
          nom prenom
        </Title>
       </View>
       <View style={styles.footer}>
        <View style={styles.action}>
          <FontAwesome 
            name="user-o" 
            color="white" 
            size={20}
          />

          <TextInput
            placeholder="Nom"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome 
            name="user-o" 
            color="white" 
            size={20}
          />
          
          <TextInput
            placeholder="Prenom"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="white" size={20} />
          <TextInput
            placeholder="Numero portable"
            placeholderTextColor="grey"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="white" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color="white" size={20} />
          <TextInput
            placeholder="Adresse"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
          />
        </View>
        <View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Sauvegarder</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 17,
    alignItems: 'center',
    paddingTop: 25, 
  },

  footer: {
    flex: 3,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  
  commandButton: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },

  panelButtonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    fontSize: 16,
    color: 'white'
  },
});