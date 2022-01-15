import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import PrestationHori from './PrestationHori'



export default function Accueil({navigation}){
    return(
      <ScrollView
                        scrollEventThrottle={16}
      >
      <View style={styles.container}>
            <ImageBackground source={require('./pika2.jpg')} resizeMode="cover" style={styles.image}>
              <Image source={require('./PMU.jpg')} style={styles.imageint}/>
            </ImageBackground>    
      </View>
                        <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 20 }}>
                            <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40, color:'white'}}>
                               Nos prestations
                            </Text>
                            <View style={{ height: 170, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Prestation A"
                                    />
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Prestation B"
                                    />
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Prestation C"
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40}}>
                               Nos Ventes
                            </Text>
                            <View style={{ height: 170, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Ventes A"
                                    />
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Ventes B"
                                    />
                                    <PrestationHori imageUri={require('./Pika.jpg')}
                                        name="Ventes C"
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black'}}>
                            <SafeAreaView style={styles.container}>
    <View>
      <Text style={{ fontSize: 25, fontStyle: 'italic', fontWeight: '900',paddingVertical:20, paddingHorizontal: 40, color:'white'}}>
       Qui sommes nous ?
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QSN')}>
                <Text style={styles.buttontext}>En savoir plus</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
                        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: 200,
  },
  image: {
    flex: 1,
    justifyContent: 'space-around',
  },
  imageint:{
    alignSelf:'center',
    width:'50%',
    height:'25%'
  },
  button:{
      borderWidth:5,
      backgroundColor:'white',
      marginHorizontal:'20%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginVertical:10
  },
  buttontext:{
      color:'black',
      fontSize:20,
      textAlign:'center',
      paddingTop:10,
      paddingBottom:10,
  }
})