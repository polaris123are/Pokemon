import React from "react";
import { View } from "react-native";
export default function Pokemondetaille(){
    return (
        <View>
            <Text>Name Of Pokemon</Text>
            <Image style={{height:200,width:200}} source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"}}/>
            
        </View>
    )
}