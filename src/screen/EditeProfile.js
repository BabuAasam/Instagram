import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const EditeProfile = ({navigation}) => {
  const Massage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: '#000'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            Massage();
            navigation.goBack();
          }}
        >
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', padding: 10}}>
        <Image
          style={{height: 60, width: 60, borderRadius: 100}}
          source={require('../Image/Babu.jpeg')}
        />
        <TouchableOpacity>
          <Text style={{color: '#3493D9'}}>Change Proflie Photo</Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <Text>Name</Text>
        <TextInput
          placeholder="Username"
          defaultValue="Khan_Bhai"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#DEDEDE',
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <Text>Username</Text>
        <TextInput
          placeholder="Username"
          defaultValue="Khan_Bhai"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#DEDEDE',
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Website"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#DEDEDE',
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Bio"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#DEDEDE',
          }}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            padding: 10,
            color: '#3493D9',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#DEDEDE',
          }}
        >
          Swich to Profasstional account
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            padding: 10,
            color: '#3493D9',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#DEDEDE',
          }}
        >
          Personl information Satting
        </Text>
      </View>
    </View>
  );
};

export default EditeProfile;
