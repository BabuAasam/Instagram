import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import EditeProfile from '../screen/EditeProfile';
import Splash from '../screen/Splash';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name='Splash'
        component={Splash}
        options={{ headerShown:false, header:null, }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown:false}}
        />
        <Stack.Screen
        name='EditeProfile'
        component={EditeProfile}
        options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;