import React,{useState} from 'react';
import { Pressable, StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';



export default function Panier({navigation}){
    const [Produits,setProduits]=useState([
        {nom:'Pantalon', prix: 10.99 ,key:'1'},
        {nom:'Ceinture', prix: 11.99 ,key:'2'},
        {nom:'Ceinture', prix: 11.99 ,key:'3'},
    ]);

    var total = 0.00;

    Produits.map((Produits) =>{
        total += Produits.prix
    });

    return(
        <View style={styles.tout}>
            <FlatList 
                data={Produits}
                renderItem={({item})=>(
                    <View style={styles.liste}>
                        <Text style={styles.titre}>
                            {item.nom}
                        </Text> 
                        <Text style={styles.prix}>
                            {item.prix}€
                        </Text>
                    </View>
                )}
                numColumns={1}
            />
            <View style={{flexDirection:'row',}}>
                <Text style={styles.titre}>
                    Total:
                </Text> 
                <Text style={styles.prix}>
                    {total}€
                </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Paiement</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontStyle: 'italic',
      backgroundColor: 'white'
    },
    tout: {
        flex: 1,
    },
    buttontext:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5
    },
    button:{
        marginVertical:'5%',
        borderWidth:5,
        backgroundColor:'black',
        marginHorizontal:'20%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    container: {
        flex: 1,
    },
    prix: {
        paddingHorizontal:'5%',
        flex:0.5,
        fontSize:20,
        textAlign:'right'
    },
    titre:{
        paddingHorizontal:'5%',
        flex:0.5,
        fontSize:20,
        textAlign:'left'
    },
    liste:{
        borderWidth:2,
        marginVertical:2,
        flexDirection:'row',
        paddingVertical:'2%'
    }
})