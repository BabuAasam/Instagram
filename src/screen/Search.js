import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import SearchBar from '../screenComponents/SearchBar'

const Search = () => {
  const [Show, setShow] = useState();
  const onChangeSearch = () => {
    setShow()
  }
  return (

    <View style={{
      height: '92%',
      width: '100%',
      backgroundColor: '#fff',
      position: 'relative',
    }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 10,
          position: 'relative',
        }}>
        <Ionic name='search' style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }} />
        <TextInput
          placeholder='Search'
          placeholderTextColor='#909090'
          keyboardType='web-search'
          style={{
            width: '94%',
            backgroundColor: '#EBEBEB',
            borderRadius: 10,
            alignItems: 'center',
            fontSize: 15,
            padding: 2,
            justifyContent: 'center',
            paddingLeft: 40,
          }}
        />
      </View>
      <View>
        <ScrollView>
          <SearchBar/>
          </ScrollView>
      </View>
    </View>



  );
}

export default Search;
const styles = StyleSheet.create({
  image: {
    width: 118,
    height: 135,
  },
});