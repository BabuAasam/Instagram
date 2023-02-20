import React from 'react';
import { View, Image,  } from 'react-native';


const Splash = ({navigation}) => {

    
    setTimeout(() => 
    {
        navigation.navigate('BottomTab');
    }, 2000)
    
  return (
    <View style={{
        height:'100%',
        width:'100%',
    }}>
       <Image
       source={require('../Image/Splash.jpeg')}
       style={{
        height:'100%',
        width:'100%',
       }}
       />
    </View>
  )
}

export default Splash;