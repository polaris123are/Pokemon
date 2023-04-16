import { useState } from "react";
import { View,Text, TextInput,Button } from "react-native";

export default function PokemonHeader({handlechange,text}){
    
    return (
        <View  style={{ padding:20,marginTop:40}}>
       <Text style={{color:"#363757",fontSize:32,fontWeight:"bold"}}>Pokemon</Text>
       <Text style={{marginTop:5,fontSize:13,width:90+"%",lineHeight:20,color:"#a8acb5"}}>Search for a pokeman using the pokemon by name or by using its national Pokedex number  </Text>
        <TextInput placeholder="Enter name or id"  style={{padding:5,width:"90%",borderColor:"gainsboro",borderWidth:1,borderRadius:5,margin:10,color:"black"}} value={text} onChangeText={handlechange}/>
        <Button title="search" style={{margin:10,width:90+"%",padding:5}} />
        </View>
    )
}

