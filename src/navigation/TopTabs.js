import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {View, Image, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();
const TopTabs = () => {
  const Post = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 6,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
        </View>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
              marginLeft: 5,
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Feather name="plus-circle" style={{fontSize: 60, opacity: 0.7}} />
        </View>
      </View>
    );
  };
  const Video = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 6,
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
        </View>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
            }}
          ></View>
          <View
            style={{
              height: 150,
              width: 120,
              backgroundColor: '#ccd9fc',
              marginLeft: 5,
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Feather name="plus-circle" style={{fontSize: 60, opacity: 0.7}} />
        </View>
      </View>
    );
  };
  const Tags = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}
      >
        <View
          style={{
            height: 75,
            width: 75,
            borderRadius: 100,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{height: 70, width: 70, borderRadius: 100}}
            source={require('../Image/tag.webp')}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 20}}>Photos and</Text>
          <Text style={{color: '#000', fontSize: 20}}>video of you</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 8}}>
          <Text>When People tag you in Photos and</Text>
          <Text>video. they'll appear here.</Text>
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};
export default TopTabs;
