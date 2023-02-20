import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import SingleImage from '../screenComponents/SingleImage';

const SearchBar = () => {
  const [Show, setShow] = useState();
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <SingleImage />
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => setShow(!Show)}>
            {Show ? (
              <Feather
                name="plus-circle"
                style={{fontSize: 60, opacity: 0.7}}
              />
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SearchBar;
