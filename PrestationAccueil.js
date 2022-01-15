import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, FlatList, ImageBackground, Image, requireNativeComponent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BoutiqueAccueil({navigation}){
    const [categorie, setCategorie] = useState([
        { nom: 'Bien-être', key: '1', image: require('./Vetements.jpg'), produits : useState([{nom: 'Pantalon', image: require('./Vetements.jpg'), key: '1', prix: '10,99€', info : 'C\'est un pantalon'},{nom:'T-Shirt', key : '2', image: require('./Vetements.jpg'), prix: '12,99€', info : 'C\'est un t-shirt'}])},
        { nom: 'Coiffure', key: '2', image: require('./Accessoires.jpg'), produits : useState([{nom: 'SacAMain', image: require('./Vetements.jpg'),  key: '1', prix: '10,99€', info : 'C\'est un sac à main'},{nom:'Ceinture',image: require('./Vetements.jpg'), key : '2', prix: '12,99€', info : 'C\'est une ceinture'}])},
        { nom: 'Beauté', key: '3', image: require('./Cosmetiques.jpg'), produits : useState([{nom: 'RougeALevres', image: require('./Vetements.jpg'), key: '1', prix: '10,99€', info : 'C\'est un rouge à lèvres'},{nom:'Maquillage', image: require('./Vetements.jpg'), key : '2', prix: '12,99€', info : 'C\'est un maquillage'}])},
    ]);
    return(
        <FlatList 
            data={categorie}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('PrestationListe', { paramPrestations: item.produits})}>
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
        marginTop: 24,
        paddingHorizontal:'3%',
        paddingTop:'45%',
        paddingBottom:'5%',
        marginHorizontal: '4%',
        marginTop: 24,
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