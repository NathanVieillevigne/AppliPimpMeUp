import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Produits from './Produits';
import BoutiqueAccueil from './BoutiqueAccueil';
import InfoProduits from './InfoProduits';




const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 117, height: 40 }}
      source={require('./PMU.jpg')}
    />
  );
}

export default function Boutique({navigation}){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="BoutiqueAccueil">
        <Stack.Screen options={{headerShown: false}}
          name = "BoutiqueAccueil"
          component = { BoutiqueAccueil }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'transparent'
            },
            headerBackTitle : 'Catégories',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle : '',
          }}
          name = "Produits"
          component = { Produits }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'transparent'
            },
            headerBackTitle : 'Produits',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle : '',
          }}
          name = "InfoProduits"
          component = { InfoProduits }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
  },
  icon: {
    paddingLeft: 15,
  }
})
