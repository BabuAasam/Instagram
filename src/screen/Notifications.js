import React, {useState, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entpyo from 'react-native-vector-icons/Entypo';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Following from '../screenComponents/Following';
import Filter from '../screenComponents/Filter';

const Notifications = () => {
  const [Comments, setComments] = useState();
  const [follows, setfollows] = useState();
  const [Verified, setVerified] = useState();
  const [People, setPeople] = useState();

  const UseBottomSheet = useRef();

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#000',
          }}
        >
          Notifications
        </Text>
        <TouchableOpacity
          onPress={() => {
            UseBottomSheet.current.open();
          }}
        >
          <Text
            style={{
              color: '#3493D9',
              fontSize: 18,
            }}
          >
            Filter
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              borderRadius: 100,
              flexDirection: 'row',
              padding: 8,
              marginLeft: 12,
              marginTop: 10,
              justifyContent: 'center',
            }}
          >
            <Entpyo name="plus" style={{fontSize: 18, marginTop: 5}} />
            <Feather name="user" style={{fontSize: 28}} />
          </View>
          <View
            style={{
              padding: 14,
            }}
          >
            <View>
              <Text
                style={{
                  color: '#000',
                }}
              >
                Follow requests
              </Text>
            </View>
            <View>
              <Text>Apprave or ignore requests</Text>
            </View>
          </View>
        </View>

        <Text style={{color: '#000', padding: 16, fontSize: 16}}>Today</Text>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/boy.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>field_king_007,</Text>
              <Text>who you</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>might know,</Text>
              <Text>is on instagram</Text>
            </View>
            <View>
              <Text>5h</Text>
            </View>
          </View>

          <Following />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/Boys.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>aky_Bhati_official</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text>22h</Text>
            </View>
          </View>
          <Following />
        </View>

        <Text style={{color: '#000', padding: 16, fontSize: 16}}>
          This week
        </Text>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/Riya.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>Irfan_P.. .. .. ..</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text>4 d</Text>
            </View>
          </View>
          <Following />
        </View>

        <Text style={{color: '#000', padding: 16, fontSize: 16}}>
          This month
        </Text>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/post.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>itzz._ _ couple_</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text> 3 W</Text>
            </View>
          </View>
          <Following />
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/images.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>mr_ _ ms_ _ ff</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text>6 W</Text>
            </View>
          </View>
          <Following />
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/Champion.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>Freefire_ _lover</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text>2 W</Text>
            </View>
          </View>
          <Following />
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eb6ecc',
              borderRadius: 100,
              height: 50,
              width: 50,
            }}
          >
            <View
              style={{
                borderRadius: 100,
                height: 50,
                width: 50,
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{
                    height: 48,
                    width: 48,
                    borderRadius: 100,
                  }}
                  source={require('../Image/couple.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 4}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>its _ _ semim !!</Text>
              <Text>started</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000'}}>following you.</Text>
              <Text>4 W</Text>
            </View>
          </View>
          <Following />
        </View>
        <ActivityIndicator
          style={{marginTop: 5}}
          size={'large'}
          color="green"
        />
      </ScrollView>
      <BottomSheet
        ref={UseBottomSheet}
        closeOnDragDown={true}
        openDuration={300}
        height={550}
      >
        <View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              borderBottomWidth: 0.3,
              paddingVertical: 4,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                marginLeft: 160,
              }}
            >
              Filter
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 100,
                  marginTop: 10,
                }}
              >
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 15,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: '#000',
              }}
            >
              Categories
            </Text>
          </View>
          <Filter text={'Tags and mentions'} />
          <Filter text={'Comments'} />
          <View style={{borderBottomWidth: 0.3}}>
            <Filter text={'Follows'} />
          </View>
          <View
            style={{
              padding: 15,
              marginTop: 20,
            }}
          >
            <Text style={{fontSize: 17, color: '#000'}}>Account types</Text>
          </View>
          <Filter text={'Verified'} />
          <View style={{borderBottomWidth: 0.3}}>
            <Filter text={'People you follow'} />
          </View>
          <TouchableOpacity
            style={{
              width: '96%',
              height: 45,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4298f5',
              margin: 8,
            }}
          >
            <Text style={{color: '#fff'}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({});
