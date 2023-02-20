import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Following = () => {
  const [Show, setShow] = useState();

  return (
    <View>
      <TouchableOpacity onPress={() => setShow(!Show)}>
        {Show ? (
          <TouchableOpacity style={styles.Follow}>
            <Text style={{color: '#fff'}}>Follow</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.following}>
            <Text style={{color: '#000'}}>following</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Following;
const styles = StyleSheet.create({
  Follow: {
    width: 65,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#669cf2',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: 3,
  },
  following: {
    width: 75,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#e4e8f0',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: 3,
  },
});
