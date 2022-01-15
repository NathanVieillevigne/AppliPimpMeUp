import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QSN from './QSN';
import Accueil from './Accueil';




const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 117, height: 40 }}
      source={require('./PMU.jpg')}
    />
  );
}

export default function NavAccueil({navigation}){
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen options={{headerShown: false}}
          name = "Accueil"
          component = { Accueil }
        />
        <Stack.Screen
          options ={{
            headerStyle:{
              backgroundColor : 'transparent'
            },
            headerBackTitle : 'Accueil',
            headerBackTitleStyle :{
              color : 'red'
            },
            headerTitle : '',
          }}
          name = "QSN"
          component = {QSN}
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
