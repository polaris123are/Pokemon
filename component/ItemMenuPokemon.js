import { Image,Text,View,Button } from "react-native";
import { useState, useEffect } from 'react';

export default function ItemMenuPokemon({item,id}){
    
 var id=id+1
  
 
    return (
        <View style={{borderColor:"gainsboro",borderWidth:1,borderRadius:5,padding:10,width:"50%",margin:10}}>
            <Image style={{height:200,width:"100%"}} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"}}/>
            <Text style={{fontSize:20,textAlign:"center",margin:2}}>{item.name}</Text>
            <Button title='detailles' style={{width:"100%"}} ></Button>
        </View>
    )
}
