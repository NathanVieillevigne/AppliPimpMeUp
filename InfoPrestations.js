import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

export default function InfoProduits({navigation,route}){
    const Produit = route.params.paramPrestations;
    return(
        <ScrollView style={styles.body}>
            <Image source={Produit.image} style ={styles.image}>
            </Image>
                <View style={{flexDirection:'row',}}>
                    <Text style={styles.titre}>
                        {Produit.nom}
                    </Text> 
                    <Text style={styles.prix}>
                    {Produit.prix}
                    </Text>
                </View>
            <Text style={styles.info}>
                Description : {"\n"}
                {Produit.info} lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem iprem ipsum
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Ajouter au panier</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      height:2500
    },
    entete: {
        fontSize:25,
        paddingTop: 10
    },
    prix: {
        paddingTop:'5%',
        paddingHorizontal:'5%',
        flex:0.5,
        fontSize:25,
        textAlign:'right'
    },
    titre:{
        paddingTop:'5%',
        paddingHorizontal:'5%',
        flex:0.5,
        fontSize:25,
        textAlign:'left'
    },
    info:{
        paddingVertical:'5%',
        textAlign:'center',
        fontSize : 15,
    },
    text: {
        paddingTop:'10%',
        fontSize: 25,
        fontStyle: 'italic',
    },
    image: {
        resizeMode:'cover',
        width: '100%', 
        height: 300
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
    },
    button:{
        borderWidth:5,
        backgroundColor:'black',
        marginHorizontal:'20%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttontext:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5
    }
    

})