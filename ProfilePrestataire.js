import React from 'react';
import {View, SafeAreaView, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Feather";

const ProfilePrestataire = ({navigation}) => {
  return(

    <SafeAreaView style={styles.container}>
    <ScrollView>
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
       <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="white" size={20}/>
          <Text style={{color:"white", marginLeft: 20}}>23 Avenue danielle casanova</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="white" size={20}/>
          <Text style={{color:"white", marginLeft: 20}}>0123456789</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="white" size={20}/>
          <Text style={{color:"white", marginLeft: 20}}>quelquechose@gmail.com</Text>
        </View>
      </View>

      <View>
        <Title style={styles.menuItemText, {fontSize: 19, color: "white"}}>      Informations</Title>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="white" size={25}/>
            <Text style={styles.menuItemText}>Mes derniers activites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-clock-outline" color="white" size={25}/>
            <Text style={styles.menuItemText}>Consulter les rendez-vous</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="white" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icons name="settings" color="white" size={25}/>
            <Text style={styles.menuItemText}>Paramétres</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePrestataire;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      alignItems: 'center',
      paddingTop: 25,
      paddingBottom: 17, 
      flex: 1,
      backgroundColor: 'white',
  },

  footer: {
    flex: 3,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  
  menuItemText: {
    color: 'white',
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 16,
    lineHeight: 30,
  },
});