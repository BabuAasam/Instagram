import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {fil} from './FlatList';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {UserData} from '../screenComponents/Database';
import SingleProfile from '../screenComponents/SingleProfile';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleIndexValue = ({index}) => {
    setcurrentIndex(index);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const filItem = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.toconter}>
          <Image style={styles.profileImage} source={item.mineImage} />
        </TouchableOpacity>

        <Text style={styles.your}>{item.mineText}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={{height: 40, width: 110, marginTop: 13, marginLeft: 8}}
            source={require('../Image/Instagram1.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={{height: 16, width: 16, marginTop: 25}}
            source={require('../Image/arrow.png')}
          />
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="none"
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              height: 85,
              width: 130,
              backgroundColor: '#fff',
              borderRadius: 5,
              marginLeft: 12,
              marginTop: 50,
              borderWidth: 0.3,
              borderColor: 'lightgray',
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                height: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="x" style={{fontSize: 13, opacity: 0.1}} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
                borderBottomWidth: 0.3,
                borderBottomColor: 'lightgray',
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                }}
              >
                Following
              </Text>
              <TouchableOpacity>
                <Image
                  style={{height: 18, width: 18}}
                  source={require('../Image/0000.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                }}
              >
                Favourites
              </Text>
              <TouchableOpacity>
                <Feather name="star" style={{fontSize: 19, color: '#000'}} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity>
          <Image style={styles.plus} source={require('../Image/plus.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.massage}
            source={require('../Image/round-shape.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={fil}
          keyExtractor={item => item.id}
          horizontal
          renderItem={item => filItem(item)}
        />
      </View>
      <SwiperFlatList
        data={UserData}
        vertical={true}
        onChangeIndex={handleIndexValue}
        onRefresh={() => {
          console.log('Data onRefresh');
        }}
        refreshing={false}
        renderItem={({item, index}) => (
          <SingleProfile
            item={item}
            index={index}
            currentIndex={currentIndex}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  yourstory: {
    backgroundColor: '#ed59f0',
    marginTop: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    marginHorizontal: 15,
    marginTop: 8,
    fontSize: 28,
    color: '#000',
  },
  plus: {
    width: 25,
    height: 25,
    marginHorizontal: 25,
    marginTop: 18,
    marginLeft: 120,
  },
  massage: {
    width: 30,
    height: 30,
    marginTop: 18,
  },
  post: {
    marginTop: 18,
  },
  toconter: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileImage: {
    width: 66,
    height: 66,
    borderRadius: 50,
  },
  your: {
    color: '#000',
    fontSize: 13,
  },
  post: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
