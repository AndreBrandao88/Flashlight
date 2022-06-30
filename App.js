//import { StatusBar, Text, Image, StyleSheet, View, TouchableOpacity } from 'expo-status-bar';   inutilizada

import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


export default function App() {

      const [toggle, setToggle] = useState(false)

      const handleChangeToggle = () => setToggle (oldToggle => !oldToggle);

      useEffect(()  => {

        Torch.switchState(toggle);
        console.log ('Trocou estado do flash');
      }, [toggle]);

      useEffect(() => {

      const subscription = RNShake.addListener(()=>{
        setToggle(oldToggle => !oldToggle);

      });
      //Essa func. vai ser chamada quando o components
      //For ser desmontado
      return () => subscription.remove();
      }, [] );
    
  //const toggle = true; //false
  return (


    <View style={toggle ? style.containerLight : style.container}>
      
      <TouchableOpacity onPress = {handleChangeToggle} >
        
      <Image style={toggle ? style.lightingOn : style.lightingOff} 
      source={
        toggle
          ? require('./assets/icons/eco-light.png')
          : require('./assets/icons/eco-light-off.png')
        
        }
      />

    </TouchableOpacity>

      
    </View>

  );
}


const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {

    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {

    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

});
