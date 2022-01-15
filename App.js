import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Boutique from './Boutique';
import Prestation from './Prestation';
import Panier from './Panier';
import SignInScreen from './SignInScreen';
import NavAccueil from './NavAccueil';
import NavProfil from './NavProfil';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 117, height: 40 }}
      source={require('./PMU.jpg')}
    />
  );
}

function NavigationTab(){

  return(
    <Tab.Navigator initialRouteName="NavAccueil" 
      screenOptions = {({route}) => ({
        tabBarIcon: ({size,color,focused}) => {
          let iconnom;
          if (route.name === 'Boutique'){
            iconnom = 'cart-plus';
            size = focused ? 25 : 20;
            color = focused ? 'red' : 'black';
          } else if (route.name === 'NavAccueil'){
            iconnom = 'home';
            size = focused ? 25 : 20;
            color = focused ? 'red' : 'black';
          } else if (route.name === 'Prestation'){
            iconnom = 'table';
            size = focused ? 25 : 20;
            color = focused ? 'red' : 'black';
          }
          return (
            <FontAwesome5
              name = {iconnom}
              size = {size}
              color = {color}
            />  
          )
        },
        headerShown : false
      }
      )}>
        <Tab.Screen
          name = "Boutique"
          component = { Boutique }
        />
        <Tab.Screen
          name = "NavAccueil"
          component = { NavAccueil }
        />
        <Tab.Screen
          name = "Prestation"
          component = { Prestation }
        />
      </Tab.Navigator>
  );
}

function App({navigation}){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Appli">
        <Stack.Screen 
          options = { ({ navigation,nav }) => ({
            headerStyle:{
              backgroundColor : 'white',
            },
            headerLeft: () => (
            <FontAwesome5 name ="user-alt" onPress= {() => {navigation.navigate(NavProfil)}} color ="red" size= "25"/>
            ),
            headerRight: () => (
            <FontAwesome5 name ="cart-arrow-down" onPress= {() => {navigation.navigate(Panier)}} color ="red" size ="25"/>
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
              backgroundColor : 'white'
            },
            headerBackTitle : 'Retour',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle: (props) => <LogoTitle/>
          }}
          name = "Panier"
          component = { Panier }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'white'
            },
            headerBackTitle : 'Retour',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle: (props) => <LogoTitle/>
          }}
          name = "NavProfil"
          component = { NavProfil }
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

export default App;