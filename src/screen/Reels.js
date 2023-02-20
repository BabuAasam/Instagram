import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {VideoData} from '../screenComponents/Database';
import SingleReel from '../screenComponents/SingleReel';

const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;

  const [currentIndex, setcurrentIndex] = useState(0);
  const handleIndexValue = ({index}) => {
    setcurrentIndex(index);
  };

  return (
    <View
      style={{
        width: windowWidth,
        height: windowheight,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          {' '}
          Reels{' '}
        </Text>
        <Feather name="camera" style={{fontSize: 25, color: 'white'}} />
      </View>
      <SwiperFlatList
        data={VideoData}
        vertical={true}
        onChangeIndex={handleIndexValue}
        renderItem={({item, index}) => (
          <SingleReel item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Reels;
