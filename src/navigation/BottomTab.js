import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Reels from '../screen/Reels';
import Notifications from '../screen/Notifications';
import Profile from '../screen/Profile';
import {View} from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ReelsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reels"
        component={Reels}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const NotificationsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#939fb5',
        marginTop: 20,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View style={{marginTop: -12}}>
                <MaterialCommunityIcons
                  name="home"
                  color={focused ? '#000' : '#939fb5'}
                  size={focused ? 35 : 30}
                />
              </View>
            ) : (
              <MaterialCommunityIcons
                name="home"
                color={focused ? '#000' : '#939fb5'}
                size={focused ? 35 : 30}
              />
            ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <View style={{marginTop: -12}}>
                <MaterialCommunityIcons
                  name="magnify"
                  color={focused ? '#000' : '#939fb'}
                  size={focused ? 35 : 30}
                />
              </View>
            ) : (
              <MaterialCommunityIcons
                name="magnify"
                color={focused ? '#000' : '#939fb'}
                size={focused ? 35 : 30}
              />
            ),
        }}
      />
      <Tab.Screen
        name="ReelsStack"
        component={ReelsStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Ionic name="ios-play-circle" style={{fontSize: 28}} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
