import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
  StatusBar,
  Pressable,
  Image,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Star, Heart } from "lucide-react-native";
import SearchIcon from '../../../assets/SearchIcon.svg';
import CameraIcon from '../../../assets/CameraIcon.svg';
import FilterIcon from '../../../assets/FilterIcon.svg';
import VictoryPie from 'victory-native';
import Svg, { Text as SvgText } from 'react-native-svg';
import PieGraph from '../../Components/PieGraph';
import * as Progress from 'react-native-progress';

const { width } = Dimensions.get('window');
const ScanHistoryScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      // <Pressable style={{ width: wp(50), height: hp(23), marginVertical: '7%' }} onPress={() => navigation.navigate('TopBinsNearMe')}>
      //   <View style={{ width: wp(47), height: hp(21.5), borderRadius: 10, elevation: 2, backgroundColor: '#fff' }}>
      //     <Image source={item.image} style={{ width: wp(47), height: hp(12), borderRadius: 10 }} />
      //     {/* <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} /> */}
      //     <View style={{ margin: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
      //       <View>
      //         <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#0049AF', fontSize: hp(2) }}>{item.title}</Text>
      //         <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.6) }}>{item.location}</Text>
      //         <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#14BA9C', fontSize: hp(1.4) }}>{item.distance}</Text>
      //       </View>
      //       <View style={{ backgroundColor: '#FFBB36', height: hp(2.3), width: wp(11), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: '1.4%', borderRadius: 4 }}>
      //         {/* <FontAwesome name='star' size={12} color={'#fff'} /> */}
      //         <Text style={{ color: '#fff', fontFamily: 'Nunito-Regular', fontSize: hp(1.6) }}>{item.review}</Text>
      //       </View>
      //     </View>
      //   </View>
      // </Pressable>
      // <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SinglePageItem')}>
        <Image source={require('../../../assets/dummy_product.png')} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.ratingContainer}>
          <Star size={12} color="#FFD700" fill="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>{item.reviews} Reviews</Text>
        </View>
        <TouchableOpacity style={styles.heartButton}>
          <Heart size={13} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
      // </View>
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <View style={{ width: '95%', alignSelf: 'center', marginVertical: '5%' }}>
        <Progress.Bar
          progress={progress}
          width={null}
          height={10}
          borderWidth={0}
          borderRadius={5}
          color="#FFA726" // Orange color for the progress
          unfilledColor="#90CAF9" // Light blue color for the remaining
        />
        <View style={{ marginVertical: '2%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', color: '#130160', fontSize: wp(4.5) }}>Available balance</Text>
          <Text style={{ fontFamily: 'Nunito-Bold', color: '#130160', fontSize: wp(5) }}>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#FFBB36', fontSize: wp(5) }}>{currentBalance}</Text>/{maxBalance}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.searchParent, marginBottom: '4%' }}>
        <Pressable style={styles.searchContainer}>
          <View style={styles.cameraButton}>
            <SearchIcon />
          </View>
          <Text style={styles.input}>search for anything</Text>
        </Pressable>
      </View>
      <View style={{ height: hp(38), flexDirection: 'row' }}>
        <View style={{ width: '72%', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <Text style={{ color: '#130160', fontFamily: 'Nunito-SemiBold', fontSize: hp(2), textDecorationLine: 'underline' }}>SCANS CATEGORY</Text>
          </View>
          <View>
            <PieGraph />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: wp(4), height: hp(1.2), backgroundColor: '#0049AF', borderRadius: 3 }} />
              <Text style={{ color: '#000', fontWeight: 'semibold', fontSize: hp(1.4) }}> Category 1</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: wp(4), height: hp(1.2), backgroundColor: '#FFBB36', borderRadius: 3 }} />
              <Text style={{ color: '#000', fontWeight: 'semibold', fontSize: hp(1.4) }}> Category 1</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: wp(4), height: hp(1.2), backgroundColor: '#70B6C1', borderRadius: 3 }} />
              <Text style={{ color: '#000', fontWeight: 'semibold', fontSize: hp(1.4) }}> Category 1</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '28%', height: '100%', justifyContent: 'space-between', }}>
          <View style={{ height: '18%', width: '100%', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#0049AF', borderRadius: 20 }} />
              <Text style={{ color: 'gray', fontWeight: 'semibold', fontSize: hp(1.9) }}>Category 1</Text>
            </View>
            <View style={{ width: '68%', height: '69%', alignItems: 'flex-start', alignSelf: 'flex-end', paddingVertical: '1%' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.2) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '18%', width: '100%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#70B6C1', borderRadius: 20 }} />
              <Text style={{ color: 'gray', fontWeight: 'semibold', fontSize: hp(1.9) }}>Category 2</Text>
            </View>
            <View style={{ width: '68%', height: '69%', alignItems: 'flex-start', alignSelf: 'flex-end', paddingVertical: '1%' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.2) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '18%', width: '100%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#6F19C2', borderRadius: 20 }} />
              <Text style={{ color: 'gray', fontWeight: 'semibold', fontSize: hp(1.9) }}>Category 3</Text>
            </View>
            <View style={{ width: '68%', height: '100%', alignItems: 'flex-start', alignSelf: 'flex-end', paddingVertical: '1%' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.2) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '18%', width: '100%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#FF9F40', borderRadius: 20 }} />
              <Text style={{ color: 'gray', fontWeight: 'semibold', fontSize: hp(1.9) }}>Category 4</Text>
            </View>
            <View style={{ width: '68%', height: '69%', alignItems: 'flex-start', alignSelf: 'flex-end', paddingVertical: '1%' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.2) }}>45%</Text>
            </View>
          </View>
          <View style={{ height: '18%', width: '100%', paddingRight: '4%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ width: 13, height: 13, backgroundColor: '#14BA9C', borderRadius: 20 }} />
              <Text style={{ color: 'gray', fontWeight: 'semibold', fontSize: hp(1.9) }}>Category 5</Text>
            </View>
            <View style={{ width: '68%', height: '69%', alignItems: 'flex-start', alignSelf: 'flex-end', paddingVertical: '1%' }}>
              <Text style={{ color: '#000', fontWeight: '600', fontSize: hp(2.2) }}>45%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '8%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.4) }}>MY ITEMS</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(1.9), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <View style={{ flex: 1, width: '100%', marginBottom: '22%' }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          // columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: '5%' }}
          showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

const MyItemsScreen = () => {
  return (
    <View style={{ marginBottom: '22%' }}>
      <View style={{ width: '95%', alignSelf: 'center', marginVertical: '5%' }}>
        <Progress.Bar
          progress={progress}
          width={null}
          height={10}
          borderWidth={0}
          borderRadius={5}
          color="#FFA726" // Orange color for the progress
          unfilledColor="#90CAF9" // Light blue color for the remaining
        />
        <View style={{ marginVertical: '2%' }}>
          <Text style={{ fontFamily: 'Nunito-Bold', color: '#130160', fontSize: wp(4.5) }}>Available balance</Text>
          <Text style={{ fontFamily: 'Nunito-Bold', color: '#130160', fontSize: wp(5) }}>
            <Text style={{ fontFamily: 'Nunito-Bold', color: '#FFBB36', fontSize: wp(5) }}>{currentBalance}</Text>/{maxBalance}
          </Text>
        </View>
      </View>
      <View style={styles.searchParent}>
        <Pressable style={styles.searchContainer}>
          <View style={styles.cameraButton}>
            <SearchIcon />
          </View>
          <Text style={styles.input}>search for anything</Text>
        </Pressable>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '7%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.2) }}>SCANS HISTORY</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(2), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
      // contentContainerStyle={styles.grid}
      />
    </View>
  );
};
const AllTotalScans = () => {
  return (
    <View style={{ marginBottom: '22%' }}>
      <View style={{ height: hp(4) }} />
      <View style={styles.searchParent}>
        <Pressable style={styles.searchContainer}>
          <View style={styles.cameraButton}>
            <SearchIcon />
          </View>
          <Text style={styles.input}>search for anything</Text>
        </Pressable>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: '7%', paddingHorizontal: '2%' }}>
        <Text style={{ color: '#000000', fontFamily: 'Nunito-Bold', fontSize: hp(2.2) }}>MY SCAN</Text>
        <Text style={{ color: '#524B6B', fontSize: hp(2), textDecorationLine: 'underline' }}>View All</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SinglePageItem')}>
      <Image source={require('../../../assets/dummy_product.png')} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.subtitle}>{product.subtitle}</Text>
      <View style={styles.ratingContainer}>
        <Star size={12} color="#FFD700" fill="#FFD700" />
        <Text style={styles.rating}>{product.rating}</Text>
        <Text style={styles.reviews}>{product.reviews} Reviews</Text>
      </View>
      <TouchableOpacity style={styles.heartButton}>
        <Heart size={15} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
const progress = 0.2; // 20% progress
const maxBalance = 100;
const currentBalance = progress * maxBalance;
const products = [
  {
    id: "1",
    name: "TMA-2 HD Wireless",
    subtitle: "Hidden Finds",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "2",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "3",
    name: "TMA-2 HD Wireless",
    subtitle: "Hidden Finds",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "4",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  },
  {
    id: "5",
    name: "TMA-2 HD Wireless",
    subtitle: "Best Sells Store",
    rating: 4.8,
    reviews: 88,
    image: "/placeholder.svg?height=150&width=150"
  },
  {
    id: "6",
    name: "TMA-2 HD Wireless",
    subtitle: "ANC Store",
    rating: 4.8,
    reviews: 88,
    image: "https://placeholder.com/150"
  }
]
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
const MyLibrary = () => {
  const [activeTab, setActiveTab] = useState('scan');
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground
        source={require('../../../assets/vector_1.png')}
        style={styles.vector}
        resizeMode="stretch"
      >
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
            </Pressable>
            <Text style={styles.headerText}>My Library</Text>
          </View>
        </View>
        {/* Tab navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'scan' && styles.activeTab]}
            onPress={() => setActiveTab('scan')}
          >
            <Text style={[styles.tabText, activeTab === 'scan' && styles.activeTabText]}>My Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'items' && styles.activeTab]}
            onPress={() => setActiveTab('items')}
          >
            <Text style={[styles.tabText, activeTab === 'items' && styles.activeTabText]}>Scan History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all_scans' && styles.activeTab]}
            onPress={() => setActiveTab('all_scans')}
          >
            <Text style={[styles.tabText, activeTab === 'all_scans' && styles.activeTabText]}>All Scans</Text>
          </TouchableOpacity>
        </View>

        {/* Content for the active tab */}
        <ScrollView style={styles.content}>
          {activeTab === 'scan' && <ScanHistoryScreen />}
          {activeTab === 'items' && <MyItemsScreen />}
          {activeTab === 'all_scans' && <AllTotalScans />}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3F5',
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  header: {
    width: wp(100),
    height: hp(7),
    marginTop: '10%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: hp(3),
    textAlign: 'left',
    color: '#0D0140'
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginBottom: 16,
    width: '100%',
    paddingHorizontal: '5%',
    height: hp(6),
    marginTop: '3%'
  },
  tab: {
    paddingVertical: '3%',
    paddingHorizontal: '4.5%',
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: '1%'
  },
  activeTab: {
    backgroundColor: '#2CCCA6',
    borderColor: '#2CCCA6',
  },
  tabText: {
    fontSize: hp(1.9),
    fontFamily: 'Nunito-SemiBold',
    color: '#000',
    justifyContent: 'center'

  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '2%'
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: 'gray',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: hp(2.2),
    fontFamily: 'Nunito-Bold',
    color: '#1E1E1E',
  },
  itemSubtitle: {
    fontSize: hp(1.9),
    fontFamily: 'Nunito-SemiBold',
    color: '#666',
  },
  heartIcon: {
    padding: 8,
  },
  list: {
    marginBottom: 100,
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(50),
  },
  card: {
    width: '20%', // Adjust the width to allow space between columns
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: '2%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: '0.85%',
    marginBottom: '5%', // Add spacing between rows
  },
  image: {
    width: '100%',
    marginBottom: 10,
  },
  name: {
    fontSize: hp(1.36),
    marginBottom: 4,
    color: '#000',
    fontFamily: 'DMSans-SemiBold'
  },
  subtitle: {
    fontSize: hp(1.5),
    color: "#14BA9C",
    fontFamily: 'DMSans-SemiBold',
    marginBottom: '8%',
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    // marginLeft: 4,
    fontSize: hp(1.3),
    fontWeight: "bold",
    color: '#000'
  },
  reviews: {
    marginLeft: 4,
    fontSize: hp(1.2),
    color: "#666"
  },
  heartButton: {
    position: "absolute",
    bottom: '2%',
    right: '1%',
    borderRadius: 15,
    padding: 5
  },
  searchParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '3%',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    // marginRight: 10,
    borderColor: '#99ABC678',
    height: hp(6.5),
    backgroundColor: '#F2F2F2',
    width: '100%'
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
    height: hp(6.5),
    width: wp(14),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MyLibrary;
