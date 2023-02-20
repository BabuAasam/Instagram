import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entpyo from 'react-native-vector-icons/Entypo';
import TopTabs from '../navigation/TopTabs';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Material from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
  const Sheet = useRef();
  const bottomSheet = useRef();
  const Dwon = useRef();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'center',
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => Dwon.current.open()}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <Text style={{color: '#000', fontSize: 18, marginLeft: 10}}>
              Khan_Bhai
            </Text>
            <TouchableOpacity>
              <Feather
                name="chevron-down"
                style={{
                  fontSize: 20,
                  color: '#000',
                  paddingHorizontal: 5,
                  opacity: 0.5,
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              bottomSheet.current.open();
            }}
          >
            <Feather
              name="plus-square"
              style={{
                fontSize: 25,
                color: '#000',
                marginTop: 10,
                marginRight: 14,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Sheet.current.open();
            }}
          >
            <Feather
              name="menu"
              style={{
                fontSize: 25,
                color: '#000',
                marginTop: 10,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 17,
        }}
      >
        <View style={{alignItems: 'center', margin: 5}}>
          <Image
            source={require('../Image/Babu.jpeg')}
            style={{
              resizeMode: 'cover',
              height: 55,
              width: 55,
              borderRadius: 100,
            }}
          />
          <Text style={{paddingVertical: 5, color: '#000'}}>Khan_Bhai</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 18}}>300</Text>
          <Text>post</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 18}}>2.6M</Text>
          <Text>followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#000', fontSize: 18}}>300</Text>
          <Text>following</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', width: '100%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditeProfile')}
          style={{
            borderColor: '#DEDEDE',
            borderWidth: 1,
            borderRadius: 5,
            width: '98%',
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
          }}
        >
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 15,
          }}
        >
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            height: 70,
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 8,
              opacity: 0.6,
            }}
          >
            <Entpyo name="plus" style={{fontSize: 25}} />
          </View>
          <View
            style={{
              height: 45,
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              opacity: 0.5,
              marginHorizontal: 12,
              backgroundColor: '#e1e6f0',
            }}
          ></View>
          <View
            style={{
              height: 45,
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              opacity: 0.5,
              marginHorizontal: 12,
              backgroundColor: '#e1e6f0',
            }}
          ></View>
          <View
            style={{
              height: 45,
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              opacity: 0.5,
              marginHorizontal: 12,
              backgroundColor: '#e1e6f0',
            }}
          ></View>
          <View
            style={{
              height: 45,
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              opacity: 0.5,
              marginHorizontal: 12,
              backgroundColor: '#e1e6f0',
            }}
          ></View>
          <View
            style={{
              height: 45,
              width: 45,
              borderWidth: 1,
              borderRadius: 50,
              opacity: 0.5,
              marginHorizontal: 12,
              backgroundColor: '#e1e6f0',
            }}
          ></View>
        </ScrollView>
        <ScrollView>
          <View style={{height: 750, width: 380}}>
            <TopTabs />
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={Sheet}
        closeOnDragDown={true}
        openDuration={300}
        height={520}
      >
        <View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather
                name="settings"
                style={{
                  fontSize: 25,
                  color: '#000',
                  opacity: 0.8,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 35, width: 35}}
                source={require('../Image/Archive.png')}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Archive
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 18,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 42, width: 42}}
                source={require('../Image/Your.jpeg')}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Your activity
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 32, width: 32, opacity: 0.8}}
                source={require('../Image/qr-code.png')}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                QR code
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Material
                name="bookmark-outline"
                style={{
                  fontSize: 25,
                  color: '#000',
                  opacity: 0.8,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Saved
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Material
                name="check-circle-outline"
                style={{
                  fontSize: 28,
                  color: '#000',
                  opacity: 0.8,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Digital collectibles
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 28, width: 28}}
                source={require('../Image/CloseF.webp')}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Close Friends
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather
                name="star"
                style={{
                  fontSize: 25,
                  color: '#000',
                  opacity: 0.8,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                Favourites
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 12,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={{height: 32, width: 32}}
                source={require('../Image/covid-19.png')}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  marginLeft: 14,
                  opacity: 0.8,
                }}
              >
                COVIDE-19 Information Center
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheet}
        closeOnDragDown={true}
        openDuration={300}
        height={440}
      >
        <View>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 2,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray',
            }}
          >
            <Text style={{fontSize: 22, color: '#000'}}>Create</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 14,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 25, width: 25}}
                source={require('../Image/Reel.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                Reel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 23, width: 23}}
                source={require('../Image/images.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 14,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 28, width: 28}}
                source={require('../Image/story.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                Story
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 14,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 30, width: 30}}
                source={require('../Image/hii.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                Story Highlight
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 14,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 30, width: 30}}
                source={require('../Image/live.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                live
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 14,
                marginLeft: 15,
                width: 8,
              }}
            >
              <Image
                style={{height: 26, width: 26}}
                source={require('../Image/book.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                borderBottomWidth: 0.7,
                borderBottomColor: 'lightgray',
                width: '94%',
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  padding: 5,
                }}
              >
                Guide
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <BottomSheet
        ref={Dwon}
        closeOnDragDown={true}
        openDuration={200}
        height={200}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View style={{margin: 4, marginLeft: 20}}>
            <Image
              source={require('../Image/Babu.jpeg')}
              style={{
                resizeMode: 'cover',
                height: 55,
                width: 55,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            Khan_Bhai
          </Text>
          <TouchableOpacity>
            <View
              style={{
                height: 23,
                width: 23,
                backgroundColor: '#5590ed',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginLeft: 140,
              }}
            >
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: '#fff',
                  borderRadius: 100,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 58,
              width: 58,
              borderWidth: 0.7,
              borderRadius: 100,
              marginTop: 14,
              marginLeft: 20,
            }}
          >
            <Feather
              name="plus"
              style={{fontSize: 55, color: '#000', opacity: 0.7}}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              marginTop: 30,
              marginLeft: 20,
            }}
          >
            Add account
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Profile;
