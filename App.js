import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import Accueil from './Accueil';
import Boutique from './Boutique';
import Prestation from './Prestation';
import Compte from './Compte';
import Panier from './Panier';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 40 }}
      source={require('./Pika.jpg')}
    />
  );
}

function NavigationTab(){

  return(
    <Tab.Navigator initialRouteName="Accueil" 
      screenOptions = {{headerShown : false}}>
        <Tab.Screen
          name = "Boutique"
          component = { Boutique }
        />
        <Tab.Screen
          name = "Accueil"
          component = { Accueil }
        />
        <Tab.Screen
          name = "Prestation"
          component = { Prestation }
        />
      </Tab.Navigator>
  );
}

function BoutonEntete({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
      color = 'white'
    />
  );
}

function App({navigation}){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Appli">
        <Stack.Screen 
          options = { ({ navigation }) => ({
            headerStyle:{
              backgroundColor : 'red'
            },
            headerLeft: () => (
             <BoutonEntete screenName ="Compte"/>
            ),
            headerRight: () => (
             <BoutonEntete screenName ="Panier"/>
            ),
            headerTintColor: 'white',
            headerTitle: (props) => <LogoTitle/>
           })}
          name = "Appli"
          component = { NavigationTab }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'red'
            },
            headerBackTitle : 'Retour',
            headerBackTitleStyle :{
              color : 'white'
            },
            headerTitle: (props) => <LogoTitle/>
          }}
          name = "Panier"
          component = { Panier }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'red'
            },
            headerBackTitle : 'Retour',
            headerBackTitleStyle :{
              color : 'white'
            },
            headerTitle: (props) => <LogoTitle/>
          }}
          name = "Compte"
          component = { Compte }
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
  }
})

export default App;