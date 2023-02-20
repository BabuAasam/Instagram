import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Dimensions, Image, Text} from 'react-native';
import Video from 'react-native-video';
import Ionice from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBoffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);
  const [like, setlike] = useState(item.islike);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowheight,
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBoffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.Video}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Ionice
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          top: windowheight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: 'rgba(52, 52, 52, 0.4)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 80,
          padding: 10,
        }}>
        <View>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 150, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.postProfile}
                  style={{
                    height: 32,
                    width: 32,
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: '#fff', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Ionice
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: '#fff'}}>Origianl Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 150,
          right: 0,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setlike(!like)} style={{padding: 10}}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : '#fff', fontSize: 25}}
          />
          <Text style={{fontSize: 12, color: '#fff'}}>{item.like}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionice
            name="ios-chatbubble-outline"
            style={{
              color: '#fff',
              fontSize: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Ionice
            name="paper-plane-outline"
            style={{
              color: '#fff',
              fontSize: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Feather
            name="more-vertical"
            style={{
              color: '#fff',
              fontSize: 25,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#fff',
          }}>
          <Image
            source={item.postProfile}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 12,
              resizeMode: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default SingleReel;
