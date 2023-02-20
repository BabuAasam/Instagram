import React, {useState} from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionice from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SingleProfile = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;
  const [like, setlike] = useState();
  const [save, setsave] = useState();
  return (
    <View style={{flex: 1, marginBottom: 5}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            width: windowWidth,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                marginLeft: 2,
              }}
              source={item.Profile}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000',
                  marginLeft: 5,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="more-vertical"
                style={{
                  color: '#000',
                  fontSize: 22,
                  marginLeft: 200,
                  marginHorizontal: 5,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{
            height: 500,
            width: 400,
            resizeMode: 'cover',
            marginTop: 5,
          }}
          source={item.postProfile}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => setlike(!like)}
            style={{padding: 10}}
          >
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{color: like ? 'red' : '#000', fontSize: 25}}
            />
            <Text style={{fontSize: 12, color: '#fff'}}>{item.like}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Ionice
              name="ios-chatbubble-outline"
              style={{
                color: '#000',
                fontSize: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Ionice
              name="paper-plane-outline"
              style={{
                color: '#000',
                fontSize: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10}}>
            <Feather
              name="bookmark"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 180,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{marginLeft: 12, color: '#000'}}>{item.description}</Text>
        <Text style={{marginLeft: 12}}>{item.Add}</Text>
        <Text style={{marginLeft: 12}}>{item.Seen}</Text>
      </View>
    </View>
  );
};
export default SingleProfile;
