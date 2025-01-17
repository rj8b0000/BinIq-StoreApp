import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Camera, Search, Menu } from 'lucide-react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MapView, { Marker } from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BinIQIcon from '../../../assets/BinIQIcon.svg';
import GetButton from '../../../assets/GetButton.svg';
import Notification from '../../../assets/Notification.svg';
import CameraIcon from '../../../assets/CameraIcon.svg';
import SearchIcon from '../../../assets/SearchIcon.svg';
import MenuIcon from '../../../assets/MenuIcon.svg';
import BinFinderIcon from '../../../assets/BinFinderIcon.svg';
import SettingsIcon from '../../../assets/SettingsIcon.svg';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';

const { width, height } = Dimensions.get('window');
const HomeScreen = ({ openDrawer }) => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const topBins = [
    {
      id: 1,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 2,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 3,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 4,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 5,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 6,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 7,
      image: require('../../../assets/flip_find.png'),
      title: 'FLIP $ FIND',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
    {
      id: 8,
      image: require('../../../assets/hidden_finds.png'),
      title: 'HIDDED FINDS',
      location: 'Florida US',
      distance: '3.4KM',
      review: '4.2'
    },
  ]
  const products = [
    {
      id: 1,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 2,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    },
    {
      id: 3,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 4,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    },
    {
      id: 5,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 6,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    },
    {
      id: 7,
      image: require('../../../assets/colgate.png'),
      title: 'COLGATE',
      description: 'Advance whitening toothpaste 160g',
      price: '$7 - 27'
    },
    {
      id: 8,
      image: require('../../../assets/darlie.png'),
      title: 'DARLIE',
      description: 'All shiny white toothpaste 140g',
      price: '$24.3 - 35.8'
    }

  ]
  const carouselImages = [
    {
      id: 1,
      isDashboard: true,
      styles: { width: wp(90), height: hp(43) },
    },
    {
      id: 2,
      isMap: true,
      styles: { width: wp(100), height: hp(100) }
    },
    {
      id: 3,
      image: require('../../../assets/slider_1.png'),
      styles: { width: wp(90), height: hp(53) }
    },
  ]
  const myFavourites = [
    {
      id: 1,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
      discountPrice: '$65',
      originalPrice: '$151',
      totalDiscount: '60% off'
    },
    {
      id: 2,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Labbin White Sneakers For Men and Female`,
      discountPrice: '$650',
      originalPrice: '$125',
      totalDiscount: '70% off'
    },
    {
      id: 3,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Mammon Women's Handbag (Set of 3, Beige)`,
      discountPrice: '$75',
      originalPrice: '$199',
      totalDiscount: '60% off'
    },
    {
      id: 4,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
      discountPrice: '$65',
      originalPrice: '$151',
      totalDiscount: '60% off'
    },
    {
      id: 5,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Labbin White Sneakers For Men and Female`,
      discountPrice: '$650',
      originalPrice: '$125',
      totalDiscount: '70% off'
    },
    {
      id: 6,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Mammon Women's Handbag (Set of 3, Beige)`,
      discountPrice: '$75',
      originalPrice: '$199',
      totalDiscount: '60% off'
    },
    {
      id: 7,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
      discountPrice: '$65',
      originalPrice: '$151',
      totalDiscount: '60% off'
    },
    {
      id: 8,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Labbin White Sneakers For Men and Female`,
      discountPrice: '$650',
      originalPrice: '$125',
      totalDiscount: '70% off'
    },
    {
      id: 9,
      image: require('../../../assets/gray_img.png'),
      title: 'COLGATE',
      description: `Mammon Women's Handbag (Set of 3, Beige)`,
      discountPrice: '$75',
      originalPrice: '$199',
      totalDiscount: '60% off'
    }
  ]
  const resellerIQPortal = [
    {
      id: 1,
      image: require('../../../assets/reseller_training.png'),
      miniHeader: 'Buy Pallets',
      title: 'Buy Pallets',
      tutDetails: 'Full Video • With PDF'
    },
    {
      id: 2,
      image: require('../../../assets/reseller_training.png'),
      miniHeader: 'Buy Pallets',
      title: 'Buy Pallets',
      tutDetails: 'Full Video • With PDF'
    },
    {
      id: 3,
      image: require('../../../assets/reseller_training.png'),
      miniHeader: 'Buy Pallets',
      title: 'Buy Pallets',
      tutDetails: 'Full Video • With PDF'
    },
    {
      id: 4,
      image: require('../../../assets/reseller_training.png'),
      miniHeader: 'Buy Pallets',
      title: 'Buy Pallets',
      tutDetails: 'Full Video • With PDF'
    }
  ]
  const renderCarouselItem = ({ item, index }) => {
    if (item.isMap) {
      return (
        <View style={{ width: wp(90), height: '100%', overflow: 'hidden', alignSelf: 'center' }}>
          <Dashboard2 />
        </View>
      );
    }
    if (item.isDashboard) {
      return (
        <View style={{ width: wp(90), height: '100%', overflow: 'hidden', alignSelf: 'center' }}>
          <Dashboard />
        </View>
      );

    }
    return (
      // <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '9%', width: wp(100), height: hp(40), backgroundColor: 'red' }}>
      //   <Image source={item.image} style={item.styles} />
      // </View>
      <View style={{ width: wp(90), height: '100%', overflow: 'hidden', alignSelf: 'center' }}>
        <Dashboard3 />
      </View>
    )
  };
  const renderItem = ({ item }) => (
    // <View style={{paddingHorizontal: '0.1%'}}>
    <Pressable style={{ width: wp(50), height: hp(23), marginVertical: '7%' }} onPress={() => navigation.navigate('TopBinsNearMe')}>
      <View style={{ width: wp(47), height: hp(21.5), borderRadius: 10, elevation: 2, backgroundColor: '#fff' }}>
        <Image source={item.image} style={{ width: wp(47), height: hp(12), borderRadius: 10 }} />
        <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
        <View style={{ margin: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(2) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.6) }}>{item.location}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.4) }}>{item.distance}</Text>
          </View>
          <View style={{ backgroundColor: '#FFBB36', height: hp(2.3), width: wp(11), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '1.4%', borderRadius: 4 }}>
            <FontAwesome name='star' size={12} color={'#fff'} />
            <Text style={{ color: '#fff', fontFamily: 'Nunito-Regular', fontSize: hp(1.6) }}>{item.review}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderProductsItem = ({ item }) => (
    <Pressable style={{ width: wp(51), height: hp(23), marginVertical: '5%' }} onPress={() => navigation.navigate('TopBinItems')}>
      <View style={{ width: wp(47), height: hp(21), borderRadius: 10, elevation: 2, backgroundColor: '#fff', paddingLeft: '1%' }}>
        <Image source={item.image} style={{ width: wp(46), height: hp(12) }} />
        <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
        <View style={{ margin: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(1.6) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.3) }}>{item.description}</Text>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(1.5) }}>{item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderMyFavourites = ({ item }) => (
    <Pressable style={{ width: wp(45), height: hp(26) }}>
      <View style={{ width: wp(42), height: hp(25), borderRadius: 5, elevation: 2, backgroundColor: '#fff' }}>
        <Image source={item.image} style={{ width: wp(42), height: hp(13), borderRadius: 5 }} />
        <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
        <View style={{ paddingHorizontal: '2.5%' }}>
          <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.5), margin: '0.5%', }}>{item.description}</Text>
        </View>
        <View style={{ position: 'absolute', bottom: '2%', paddingHorizontal: '3%' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(1.8) }}>{item.discountPrice}</Text>
            <Text style={{ color: 'red' }}><Text style={{ fontFamily: 'Nunito-Bold', color: '#808488', fontSize: hp(1.8), textDecorationLine: 'line-through' }}>{item.originalPrice}</Text>{'  '}{item.totalDiscount}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderResellerPortal = ({ item }) => (
    <TouchableOpacity style={{ width: wp(44), height: hp(24) }}>
      <Pressable style={{ width: wp(42), height: hp(22), borderRadius: 5, borderWidth: 0.5, borderColor: '#e6e6e6' }}>
        <Image source={item.image} style={{ width: wp(42), height: hp(11), borderRadius: 5 }} />
        <View style={{ margin: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontFamily: 'Nunito-ExtraBold', color: '#0049AF', fontSize: hp(1.7) }}>{item.miniHeader}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2) }}>{item.title}</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5), marginTop: '5%' }}>{item.tutDetails}</Text>
          </View>
        </View>
      </Pressable>
    </TouchableOpacity>
  )
  const pagination = () => {
    return (
      <Pagination
        dotsLength={carouselImages.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.7}
      />
    );
  };
  const locations = [
    { id: 1, title: 'Location 1', latitude: 37.78825, longitude: -122.4324 },
    { id: 2, title: 'Location 2', latitude: 37.78925, longitude: -122.4224 },
    { id: 3, title: 'Location 3', latitude: 37.79025, longitude: -122.4124 },
    { id: 4, title: 'Location 4', latitude: 37.79125, longitude: -122.4024 },
    { id: 5, title: 'Location 5', latitude: 37.79225, longitude: -122.3924 },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
        <View style={{ marginTop: '6%' }}>
          <View style={{ width: wp(90), height: hp(5), alignSelf: 'center', marginVertical: '4%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '28%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
              <BinIQIcon />
            </View>
            <View style={{ width: '45%', height: '100%', flexDirection: 'row', alignItems: 'center', paddingRight: '4%' }}>
              <Pressable onPress={() => navigation.navigate('ReferFriend')}>
                <GetButton height={hp(3.5)} />
              </Pressable>
              <Pressable style={{ width: '23%', height: '100%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: '2%' }} onPress={() => navigation.navigate('Notifications')}>
                <Notification height={hp(4)} />
              </Pressable>
            </View>
          </View>
          <View style={styles.container}>
            <Pressable style={styles.searchContainer} onPress={() => navigation.navigate('SearchScreen')}>
              <View style={styles.cameraButton}>
                <CameraIcon />
              </View>
              <Text style={styles.input}>search for anything</Text>
              <View style={styles.searchButton}>
                <SearchIcon />
              </View>
            </Pressable>
            <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
              {/* <FontAwesome6 name='bars-staggered' size={18} color={'#fff'} /> */}
              <SettingsIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Carousel
          data={carouselImages}
          renderItem={renderCarouselItem}
          sliderWidth={width}
          itemWidth={width}
          layout={'default'}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {/* {carouselImages[activeSlide]?.id === 2 ? (
          <View style={{ width: wp(100), height: hp(14), paddingHorizontal: '10%', justifyContent: 'center' }}>
            <BinFinderIcon />
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.6) }}>BIN FINDER</Text>
            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#667085', fontSize: hp(1.7) }}>Discover Hidden Gems Near You</Text>
          </View>
          ) :
            carouselImages[activeSlide]?.id === 3 ? (
              <>
                <View style={styles.header}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.greeting}>
                      Hello, <Text style={styles.name}>Lee Carter</Text>
                    </Text>
                    <Text style={styles.subtext}>Here's what you've been up to lately!</Text>
                  </View>
                  <Image
                    source={require('../../../assets/dashboard_profile.png')} // Replace with profile picture
                    style={styles.profileImage}
                  />
                </View>
                <View style={{ width: wp(100), height: hp(15), paddingHorizontal: '12%', justifyContent: 'center', backgroundColor: 'green' }}>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2) }}>KNOWLEDGE IS OPPORTUNITIES</Text>
                  <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#667085', fontSize: hp(1.4) }}>Ready to become a Bin IQ PRO? In this training learn the secrets of pinpointing the best bin stores, selecting the right items, listing effectively, and selling strategically with our proven BinIQ blueprint.</Text>
                  <View style={styles.cardButton}>
                    <Text style={{ color: '#fff', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.4), textAlign: 'center' }}>KEEP GOING</Text>
                  </View>
                </View>
              </>
        )
          : null
        } */}
        {pagination()}
      </ImageBackground>
      {/* TOP BINS NEAR ME  */}
      <View style={{ flex: 1, width: '100%', height: hp(35), marginTop: '4%' }}>
        <View style={{ marginTop: '7%', paddingHorizontal: '5%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2.5%' }}>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000' }}>TOP BINS NEAR ME</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TopBinsNearMe')}>
              <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={topBins}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* PRODUCTS  */}
      <View style={{ flex: 1, width: '100%', height: hp(30) }}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '5%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2.5%' }}>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000' }}>TOP BIN ITEM</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TopBinItems')}>
              <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            renderItem={renderProductsItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* MY FAVOURITES  */}
      <View style={{ flex: 1, width: '100%', height: hp(35) }}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '3%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2.5%' }}>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000' }}>MY FAVOURITES</Text>
            <TouchableOpacity onPress={() => navigation.navigate('FavouritesScreen')}>
              <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: '3%' }}>
            <FlatList
              data={myFavourites}
              renderItem={renderMyFavourites}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      {/* RESELLER IO PORTAL  */}
      <View style={{ flex: 1, width: '100%', height: hp(42) }}>
        <View style={{ marginVertical: '0%', paddingHorizontal: '3%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2.5%' }}>
            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000' }}>RESELLER IQ PORTAL</Text>
            <TouchableOpacity onPress={() => navigation.navigate('IQPortal')}>
              <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: '4%', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            {/* <FlatList
              data={resellerIQPortal}
              renderItem={renderResellerPortal}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            /> */}
            <TouchableOpacity style={{ width: wp(45), height: hp(24) }}>
              <Pressable style={{ width: wp(45), height: hp(22), borderRadius: 5, elevation: 2, backgroundColor: '#fff', paddingLeft: '1%' }}>
                <Image source={require('../../../assets/reseller_training.png')} style={{ width: wp(45), height: hp(11), borderRadius: 5 }} />
                <View style={{ margin: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={{ fontFamily: 'Nunito-ExtraBold', color: '#0049AF', fontSize: hp(1.7) }}>{'How to start a Bin Store'}</Text>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2), marginVertical: '1%' }}>{'Bin Store'}</Text>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5), marginTop: '5%' }}>{'Full Video • With PDF'}</Text>
                  </View>
                </View>
              </Pressable>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: wp(45), height: hp(24) }} onPress={() => navigation.navigate('IQPortal')}>
              <Pressable style={{ width: wp(45), height: hp(22), borderRadius: 5, elevation: 2, backgroundColor: '#fff', paddingLeft: '1%' }}>
                <Image source={require('../../../assets/reseller_training.png')} style={{ width: wp(45), height: hp(11), borderRadius: 5 }} />
                <View style={{ margin: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={{ fontFamily: 'Nunito-ExtraBold', color: '#0049AF', fontSize: hp(1.7) }}>{'How to start a Bin Store'}</Text>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(2.2), marginVertical: '1%' }}>{'Reseller Training'}</Text>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.5), marginTop: '5%' }}>{'Full Video • With PDF'}</Text>
                  </View>
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(78),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'trasparent',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    borderColor: '#99ABC678',
    height: hp(6),
  },
  cameraButton: {
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: hp(2.2),
    fontFamily: 'Nunito-Regular',
    paddingVertical: 8,
    color: '#999'
  },
  searchButton: {
    padding: 10,
  },
  menuButton: {
    backgroundColor: '#130160',
    padding: 10,
    borderRadius: 12,
    height: hp(6),
    width: wp(14),
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationContainer: {
    position: 'absolute',
    left: '43%',
    bottom: '-8%',
    width: wp(10),
    zIndex: 2
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#130160'
  },
  paginationInactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardButton: {
    backgroundColor: '#130160',
    width: '40%',
    height: hp(3.5),
    marginVertical: '3%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  greeting: {
    fontSize: hp(2.4),
    fontFamily: 'Nunito-Bold',
    color: '#000'
  },
  name: {
    color: "#000",
    fontFamily: 'Nunito-Bold',
    textDecorationLine: 'underline'
  },
  subtext: {
    fontSize: wp(3.5),
    color: "#000",
    fontFamily: 'Nunito-Bold',
  },
  profileImage: {
    width: wp(11),
    height: wp(11),
    borderRadius: 25,
  },
})