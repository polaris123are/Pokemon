import { View, ScrollView, Text, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import ItemMenuPokemon from './ItemMenuPokemon';
export default function MenuPokemon({table,settable}) {
  
  return (
    <View >
        <ScrollView >
            {table.map((el,index)=><ItemMenuPokemon item={el} id={index} />)}
        </ScrollView>
    </View>
  );
}