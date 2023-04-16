import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PokemonMenu from './component/PokemonMenu';
import PokemonHeader from './component/PokemonHeader';


export default function App() {
  const [text,handlechange]=useState("");
  const [table, settable] = useState([]);
  const [ca, setca] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((resp) => resp.json())
      .then((json) => {
        settable(json.results);
       
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
  <PokemonHeader text={text} handlechange={handlechange}/>
    <PokemonMenu table={table} settable={settable}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent:"flex-start",
    backgroundColor: '#fff',
  
    
  },
});
