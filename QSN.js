import React from 'react';
import { Pressable, StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import ScrollHori from './ScrollHori'



export default function Accueil(){
    return(
      <ScrollView
                        scrollEventThrottle={16}
      >
      <View style={styles.container}>
            <ImageBackground source={require('./vêtements.jpg')} resizeMode="cover" style={styles.image}>
              <Text style={{ fontSize: 40, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40, color:'red', textAlign: 'center',}}>
                               Qui sommes nous ?
              </Text>
            </ImageBackground>    
      </View>
                        <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 20, paddingBottom : 20 }}>
                            <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40, color:'red'}}>
                               Notre entreprise :
                            </Text>
                            <Text style= {{ paddingLeft: 10, paddingTop: 20, fontSize: 15, fontStyle:'italic', textAlign: 'center', color: 'white', paddingRight:10 }}>
                              Pimp me up est créée par deux amies passionnée de mode et de beauté.{"\n"}
                              {"\n"}
                              Regroupant vente de produits tels que vêtements, maquillage, bijoux, accessoires de mode mais aussi prestations de services dont coiffure, maquillage, soin et bien-être
                            </Text>
                            </View>
       <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, paddingBottom : 20 }}>
                            <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40, color:'red'}}>
                               Une production sénégalaise :
                            </Text>
                            <Text style= {{ paddingLeft: 10, paddingTop: 20, fontSize: 15, fontStyle:'italic', textAlign: 'center',paddingRight:10 }}>
                              Pimp Me Up met en lumière le talent des jeunes ainsi que l’artisanat local sénégalais. 
                              {"\n"}
                              {"\n"}
                              Nous mettons en vente des bijoux et vêtements de créateurs ainsi que des accessoires de mode pour vous sublimer et répondre à toutes vos envies.
                            </Text>
                            </View>
                            <View style={styles.container}>
            <ImageBackground source={require('./fondnoiretoileblanc.jpg')} resizeMode="cover" style={styles.image}>
                  <View style={{ height: 170 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <ScrollHori imageUri={require('./image1.jpg')}
                                        name="Ventes A"
                                    />
                                    <ScrollHori imageUri={require('./image2.jpg')}
                                        name="Ventes B"
                                    />
                                    <ScrollHori imageUri={require('./image3.jpg')}
                                        name="Ventes C"
                                    />
                                    <ScrollHori imageUri={require('./image4.jpg')}
                                        name="Ventes C"
                                    />
                                </ScrollView>
                            </View>
                      
                            </ImageBackground>    
      </View>
         <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, paddingBottom : 20 }}>
                            <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: '900', paddingHorizontal: 40, color:'red'}}>
                               Prestataires et clients :
                            </Text>
                            <Text style= {{ paddingLeft: 10, paddingTop: 20, fontSize: 15, fontStyle:'italic', textAlign: 'center',paddingRight:10 }}>
                              Pimp Me Up permet aux indépendants de travailler pour leurs comptes et à leurs rythmes selon leurs disponibilités.
                              {"\n"}
                              {"\n"}
                               Nous mettons en relation des clients et des prestataires dans le but de faciliter l’accès aux produits et services de beauté.
                            </Text>
                            </View>
    </ScrollView>
);

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
})