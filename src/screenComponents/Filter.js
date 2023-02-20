import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Filter = props => {
  const {text} = props;
  const [Check, setCheck] = useState();

  return (
    <View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{fontSize: 17, color: '#000'}}>{text}</Text>
        <TouchableOpacity onPress={() => setCheck(!Check)}>
          {Check ? (
            <View
              style={{
                height: 23,
                width: 23,
                borderRadius: 100,
                borderWidth: 0.8,
              }}
            ></View>
          ) : (
            <Image
              style={{
                height: 24,
                width: 24,
              }}
              source={require('../Image/CheckBox.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
