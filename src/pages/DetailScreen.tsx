import React from 'react';
import {
  View,
  Text,
  Image,
  BackHandler,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../constants/theme';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  // Back Button Starts
  const backButtonHandler = () => {
    navigation.goBack();
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backButtonHandler,
      );
      return () => backHandler.remove();
    }, []),
  );
  // Back Button Ends

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: '25%', width: '100%'}}>
        <TouchableOpacity
          onPress={backButtonHandler}
          style={{
            position: 'absolute',
            top: 15,
            left: 10,
            zIndex: 99,
            backgroundColor: theme.COLORS.WHITE,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="chevron-left" size={30} color={theme.COLORS.PRIMARY} />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          height: '78%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          top: -25,
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 10,
            borderRadius: 10,
            alignSelf: 'flex-start',
            marginTop: 15,
            marginBottom: 5,
          }}>
          <Text style={{color: 'grey', fontSize: 10}}>Design</Text>
        </View>
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={{paddingBottom: 10}}>
            <Text
              style={{
                color: theme.COLORS.BLACK,
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: 15,
                width: '100%',
              }}>
              Lorem ipsum dolor sit amet consectetur. Sed vulputate nibh nulla
              condimentum vel mattis.
            </Text>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                marginTop: 5,
              }}>
              <Text style={{fontSize: 12, color: '#000'}}>
                @Crazy Technology
              </Text>
              <Text style={{fontSize: 9, color: 'grey'}}>April 27, 2023</Text>
            </View>

            <Text
              style={{
                color: '#525252',
                fontSize: 14,
                marginTop: 15,
                width: '100%',
              }}>
              Lorem ipsum dolor sit amet consectetur. Morbi venenatis mauris sed
              nulla nec in. Auctor sapien sagittis semper leo sed donec lacinia
              libero. Lorem ipsum dolor sit amet consectetur. Facilisis egestas
              quis ut aenean feugiat in accumsan. Morbi eu praesent quam aenean
              venenatis. Nunc imperdiet ultricies eget tempor lobortis cursus
              lectus. Faucibus molestie diam placerat dolor. Nibh erat quis
              natoque neque quam feugiat orci. Arcu tincidunt ac proin tortor
              sit quis blandit odio tellus. Aliquet arcu maecenas neque diam
              nullam ultricies adipiscing tellus. Sapien pretium et lobortis
              aliquam ullamcorper est rhoncus nulla nunc. Commodo volutpat
              scelerisque eget eget. Lorem ipsum dolor sit amet consectetur. Mi
              feugiat in pulvinar ornare urna placerat odio sed proin. A leo
              etiam at eget commodo risus ullamcorper viverra. Amet quam nisi
              viverra pellentesque proin. Sollicitudin vitae amet varius vel
              praesent massa. Scelerisque dignissim bibendum ultricies eget.
              Tincidunt morbi fames tellus neque ut scelerisque enim. Lorem
              ipsum dolor sit amet consectetur. Senectus in faucibus lobortis
              velit porttitor metus commodo. Sed pellentesque sed tortor at
              vulputate purus non. Vitae vitae sed orci et nisl in parturient
              scelerisque dignissim. Ut volutpat ullamcorper egestas tristique
              non enim.Lorem ipsum dolor sit amet consectetur. Morbi venenatis
              mauris sed nulla nec in. Auctor sapien sagittis semper leo sed
              donec lacinia libero. Lorem ipsum dolor sit amet consectetur.
              Facilisis egestas quis ut aenean feugiat in accumsan. Morbi eu
              praesent quam aenean venenatis. Nunc imperdiet ultricies eget
              tempor lobortis cursus lectus. Faucibus molestie diam placerat
              dolor. Nibh erat quis natoque neque quam feugiat orci. Arcu
              tincidunt ac proin tortor sit quis blandit odio tellus. Aliquet
              arcu maecenas neque diam nullam ultricies adipiscing tellus.
              Sapien pretium et lobortis aliquam ullamcorper est rhoncus nulla
              nunc. Commodo volutpat scelerisque eget eget. Lorem ipsum dolor
              sit amet consectetur. Mi feugiat in pulvinar ornare urna placerat
              odio sed proin. A leo etiam at eget commodo risus ullamcorper
              viverra. Amet quam nisi viverra pellentesque proin. Sollicitudin
              vitae amet varius vel praesent massa. Scelerisque dignissim
              bibendum ultricies eget. Tincidunt morbi fames tellus neque ut
              scelerisque enim. Lorem ipsum dolor sit amet consectetur. Senectus
              in faucibus lobortis velit porttitor metus commodo. Sed
              pellentesque sed tortor at vulputate purus non. Vitae vitae sed
              orci et nisl in parturient scelerisque dignissim. Ut volutpat
              ullamcorper egestas tristique non enim.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
