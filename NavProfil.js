import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import ProfileClient from './ProfileClient';
import HomeScreen from './HomeScreen';
import EditProfileScreen from './EditProfileScreen';
import ProfilePrestataire from './ProfilePrestataire';
const Stack = createStackNavigator();

function NavProfil({navigation}){
   
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator initialRouteName="ProfileClient">
        
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name="ProfilePrestataire" component={ProfilePrestataire}/>
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
        <Stack.Screen options={{headerShown: false}} name="ProfileClient" component={ProfileClient}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavProfil;