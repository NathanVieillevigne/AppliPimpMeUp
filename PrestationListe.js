import React from 'react';
import { Pressable, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

export default function Produits({navigation,route}){
    const [Produits, setProduits] = route.params.paramPrestations;
    return(
        <FlatList 
            data={Produits}
            renderItem={({item})=>(
            <TouchableOpacity onPress={() => navigation.navigate('InfoPrestations', { paramPrestations: item})}>
                <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                    <View style={styles.view}>
                        <Text style={styles.item}>{item.nom}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            )}
            numColumns={1}
        />
    )
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
      backgroundColor: 'white'
    },
    view: {
        position: 'relative',
        paddingHorizontal: '28%'
    },
    image: {
        flex:1,
        paddingHorizontal:'5%',
        paddingTop:'45%',
        paddingBottom:'5%',
        marginHorizontal: '4%',
        marginTop: 10,
        borderWidth: 5,
    },
    item: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight:'bold',
    },
    container: {
        flex: 1,
    }
})