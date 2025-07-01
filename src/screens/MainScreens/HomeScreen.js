import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BinIQIcon from "../../../assets/BinIQIcon.svg";
import Notification from "../../../assets/Notification.svg";
import UploadPlus from "../../../assets/upload_plus.svg";
import GiftIcon from "../../../assets/promo_Date.svg";
import Dashboard from "./Dashboard";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import useStore from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ openDrawer }) => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [activityFeed, setActivityFeed] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(new Set());
  const {
    user,
    logout,
    fetchTrendingProducts,
    fetchActivityFeed,
    fetchPromotions,
  } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [trending, activity, promo] = await Promise.all([
          fetchTrendingProducts(),
          fetchActivityFeed(),
          fetchPromotions(),
        ]);
        setTrendingProducts(trending);
        setActivityFeed(activity);
        setPromotions(promo);
        // Load favorites from AsyncStorage
        const savedFavorites = await AsyncStorage.getItem("favorites");
        if (savedFavorites) {
          setFavorites(new Set(JSON.parse(savedFavorites)));
        }
      } catch (error) {
        console.error("HomeScreen fetch error:", error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchTrendingProducts, fetchActivityFeed, fetchPromotions]);

  const toggleFavorite = async (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(Array.from(newFavorites))
    );
  };

  const handleLogout = () => {
    logout();
    navigation.replace("SignUp");
  };

  const carouselImages = [
    {
      id: 1,
      isDashboard: true,
      styles: { width: wp(90), height: hp(43) },
    },
    {
      id: 2,
      isMap: true,
      styles: { width: wp(100), height: hp(100) },
    },
    {
      id: 3,
      image: require("../../../assets/slider_1.png"),
      styles: { width: wp(90), height: hp(53) },
    },
  ];
  const renderCarouselItem = ({ item, index }) => {
    if (item.isMap) {
      return (
        <View style={styles.carouselItemContainer}>
          <Dashboard2 />
        </View>
      );
    }
    if (item.isDashboard) {
      return (
        <View style={styles.carouselItemContainer}>
          <Dashboard />
        </View>
      );
    }
    return (
      <View style={styles.carouselItemContainer}>
        <Dashboard3 />
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.topBinPressable}
      onPress={() => navigation.navigate("TopBinsNearMe")}
    >
      <View style={styles.topBinCard}>
        <Image source={item.image} style={styles.topBinImage} />
        <Ionicons
          name="heart"
          size={hp(3)}
          color={"#EE2525"}
          style={styles.heartIcon}
        />
        <View style={styles.topBinContent}>
          <View>
            <Text style={styles.topBinTitle}>{item.title}</Text>
            <Text style={styles.topBinLocation}>{item.location}</Text>
            <Text style={styles.topBinDistance}>{item.distance}</Text>
          </View>
          <View style={styles.topBinReviewContainer}>
            <FontAwesome name="star" size={12} color={"#fff"} />
            <Text style={styles.topBinReviewText}>{item.review}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderTrendingItem = ({ item }) => (
    <Pressable
      style={styles.favouritePressable}
      onPress={() =>
        navigation.navigate("SinglePageItem", {
          productId: item.id,
          section: "Trending Products",
          data: trendingProducts,
        })
      }
    >
      <View style={styles.favouriteCard}>
        <Image source={item.image} style={styles.favouriteImage} />
        <View style={styles.favouriteDescriptionContainer}>
          <Text style={styles.favouriteDescription}>{item.description}</Text>
        </View>
        <View style={styles.favouritePriceContainer}>
          <View>
            <Text style={styles.favouriteDiscountPrice}>
              {item.discountPrice}
            </Text>
            <Text style={styles.favouritePriceText}>
              <Text style={styles.favouriteOriginalPrice}>
                {item.originalPrice}
              </Text>
              {"  "}
              {item.totalDiscount}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderActivityItem = ({ item }) => (
    <Pressable
      style={styles.productPressable}
      onPress={() =>
        navigation.navigate("SinglePageItem", {
          productId: item.id,
          section: "Activity Feed",
          data: activityFeed,
        })
      }
    >
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        <TouchableOpacity
          onPress={() => toggleFavorite(item.id)}
          style={styles.heartIconContainer}
        >
          <Ionicons
            name="heart"
            size={hp(3)}
            color={favorites.has(item.id) ? "#EE2525" : "#ccc"}
          />
        </TouchableOpacity>
        <View style={styles.productContent}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderPromotionItem = ({ item }) => (
    <Pressable
      style={styles.promotionPressable}
      onPress={() =>
        navigation.navigate("PromotionScreen", {
          section: "Promotions",
          data: promotions,
        })
      }
    >
      <View style={styles.promotionCard}>
        <Image source={item.image} style={styles.promotionImage} />
        <View style={styles.promotionContent}>
          <View>
            <Text style={styles.promotionTitle}>{item.title}</Text>
            <Text style={styles.promotionDescription}>
              {item.shortDescription}
            </Text>
            <Text style={styles.promotionStatus}>Active</Text>
            <Text style={styles.promotionDate}>
              <GiftIcon /> Jun20 to July20
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

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

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <ImageBackground
        source={require("../../../assets/vector_1.png")}
        style={styles.vector}
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <BinIQIcon />
            </View>
            <View style={styles.headerIcons}>
              <Pressable
                style={styles.notificationButton}
                onPress={() => navigation.navigate("Notifications")}
              >
                <Notification height={hp(3)} width={hp(3)} />
              </Pressable>
              <TouchableOpacity onPress={handleLogout}>
                <MaterialIcons name="logout" size={25} color={"#c0392b"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => navigation.navigate("AddProduct")}
            >
              <View style={styles.uploadIcon}>
                <UploadPlus />
              </View>
              <Text style={styles.uploadText}>UPLOAD NEW CONTENT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Carousel
          data={carouselImages}
          renderItem={renderCarouselItem}
          sliderWidth={width}
          itemWidth={width}
          layout={"default"}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {pagination()}
      </ImageBackground>
      <View style={styles.trendingSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Products</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllProductsScreen", {
                section: "Trending Products",
                data: trendingProducts,
              })
            }
          >
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={trendingProducts.slice(0, 7)}
            renderItem={renderTrendingItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              isLoading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  style={{ padding: hp(2) }}
                />
              )
            }
          />
        </View>
        {trendingProducts.length > 7 && (
          <View style={styles.flatListContainer}>
            <FlatList
              data={trendingProducts.slice(7, 14)}
              renderItem={renderTrendingItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                isLoading && (
                  <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    style={{ padding: hp(2) }}
                  />
                )
              }
            />
          </View>
        )}
      </View>
      <View style={styles.activitySection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ACTIVITY FEED</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllProductsScreen", {
                section: "Activity Feed",
                data: activityFeed,
              })
            }
          >
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={activityFeed.slice(0, 7)}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              isLoading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  style={{ padding: hp(2) }}
                />
              )
            }
          />
        </View>
        {activityFeed.length > 7 && (
          <View style={styles.flatListContainer}>
            <FlatList
              data={activityFeed.slice(7, 14)}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                isLoading && (
                  <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    style={{ padding: hp(2) }}
                  />
                )
              }
            />
          </View>
        )}
      </View>
      <View style={styles.promotionSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>PROMOTIONS</Text>
        </View>
        <FlatList
          data={promotions.slice(0, 7)}
          renderItem={renderPromotionItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            isLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={{ padding: hp(2) }}
              />
            )
          }
        />
      </View>
      <View style={styles.iqPortalSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>IQ PORTAL</Text>
        </View>
        <View style={styles.iqPortalContainer}>
          <Pressable
            style={styles.iqPortalPressable}
            onPress={() => navigation.navigate("IQPortal")}
          >
            <View style={styles.iqPortalCard}>
              <Image
                source={require("../../../assets/reseller_training.png")}
                style={styles.iqPortalImage}
              />
              <View style={styles.iqPortalContent}>
                <View>
                  <Text style={styles.iqPortalMiniHeader}>
                    How to start a Bin Store
                  </Text>
                  <Text style={styles.iqPortalTitle}>Bin Store</Text>
                  <Text style={styles.iqPortalDetails}>
                    Full Video • With PDF
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.iqPortalPressable}
            onPress={() => navigation.navigate("IQPortal")}
          >
            <View style={styles.iqPortalCard}>
              <Image
                source={require("../../../assets/reseller_training.png")}
                style={styles.iqPortalImage}
              />
              <View style={styles.iqPortalContent}>
                <View>
                  <Text style={styles.iqPortalMiniHeader}>
                    Free Direct Contract Holder Training & Supplier List
                  </Text>
                  <Text style={styles.iqPortalTitle}>
                    Supplier Connect & Training
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(78),
  },
  headerContainer: {
    marginTop: "6%",
  },
  headerContent: {
    width: wp(90),
    height: hp(5),
    alignSelf: "center",
    marginVertical: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "28%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: "20%",
    height: "100%",
    justifyContent: "space-between",
  },
  notificationButton: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "3%",
  },
  uploadButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    borderColor: "#99ABC678",
    height: hp(6),
  },
  uploadIcon: {
    padding: 10,
  },
  uploadText: {
    flex: 1,
    fontSize: hp(2),
    fontFamily: "Nunito-Regular",
    paddingVertical: 8,
    color: "#000",
    textAlign: "center",
  },
  carouselItemContainer: {
    width: wp(90),
    height: "100%",
    overflow: "hidden",
    alignSelf: "center",
  },
  paginationContainer: {
    position: "absolute",
    left: "43%",
    bottom: "-8%",
    width: wp(10),
    zIndex: 2,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#130160",
  },
  paginationInactiveDot: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  trendingSection: {
    flex: 1,
    width: "94%",
    marginTop: "6%",
    marginHorizontal: "3%",
  },
  activitySection: {
    flex: 1,
    width: "94%",
    marginHorizontal: "3%",
  },
  promotionSection: {
    flex: 1,
    width: "94%",
    height: hp(30),
    marginHorizontal: "3%",
  },
  iqPortalSection: {
    flex: 1,
    width: "94%",
    marginHorizontal: "3%",
    height: hp(42),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "2.5%",
    paddingRight: "3%",
  },
  sectionTitle: {
    fontFamily: "Nunito-Bold",
    fontSize: hp(2.3),
    color: "#000000",
  },
  viewAllText: {
    color: "#524B6B",
    fontSize: hp(1.9),
    textDecorationLine: "underline",
  },
  flatListContainer: {
    marginVertical: "3%",
  },
  topBinPressable: {
    width: wp(50),
    height: hp(23),
    marginVertical: "7%",
  },
  topBinCard: {
    width: wp(47),
    height: hp(21.5),
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
  },
  topBinImage: {
    width: wp(47),
    height: hp(12),
    borderRadius: 10,
  },
  heartIconContainer: {
    position: "absolute",
    right: "2%",
    top: "2%",
    zIndex: 1,
  },
  topBinContent: {
    margin: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBinTitle: {
    fontFamily: "Nunito-SemiBold",
    color: "#0049AF",
    fontSize: hp(2),
  },
  topBinLocation: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(1.6),
  },
  topBinDistance: {
    fontFamily: "Nunito-SemiBold",
    color: "#14BA9C",
    fontSize: hp(1.4),
  },
  topBinReviewContainer: {
    backgroundColor: "#FFBB36",
    height: hp(2.3),
    width: wp(11),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1.4%",
    borderRadius: 4,
  },
  topBinReviewText: {
    color: "#fff",
    fontFamily: "Nunito-Regular",
    fontSize: hp(1.6),
  },
  productPressable: {
    width: wp(51),
    height: hp(23),
    marginVertical: "5%",
  },
  productCard: {
    width: wp(49),
    height: hp(21),
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    paddingLeft: "1%",
  },
  productImage: {
    width: wp(49),
    height: hp(12),
  },
  productContent: {
    margin: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTitle: {
    fontFamily: "Nunito-SemiBold",
    color: "#0049AF",
    fontSize: hp(1.6),
  },
  productDescription: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(1.3),
  },
  productPrice: {
    fontFamily: "Nunito-Bold",
    color: "#000",
    fontSize: hp(1.5),
  },
  promotionPressable: {
    width: wp(33),
    height: hp(23),
    marginVertical: "5%",
  },
  promotionCard: {
    width: wp(29),
    height: hp(23),
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#fff",
    paddingLeft: "1%",
  },
  promotionImage: {
    width: wp(26),
    height: hp(12),
    alignSelf: "center",
  },
  promotionContent: {
    marginTop: "10%",
    marginHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  promotionTitle: {
    fontFamily: "DMSans-Bold",
    color: "#000",
    fontSize: hp(1.3),
  },
  promotionDescription: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(1.3),
  },
  promotionStatus: {
    fontFamily: "Nunito-Bold",
    color: "#14BA9C",
    fontSize: hp(1.5),
    marginTop: "4%",
  },
  promotionDate: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(1.4),
  },
  favouritePressable: {
    width: wp(45),
    height: hp(26),
  },
  favouriteCard: {
    width: wp(43),
    height: hp(25),
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#fff",
  },
  favouriteImage: {
    width: wp(43),
    height: hp(13),
    borderRadius: 5,
  },
  favouriteDescriptionContainer: {
    paddingHorizontal: "2.5%",
  },
  favouriteDescription: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(1.5),
    margin: "0.5%",
  },
  favouritePriceContainer: {
    position: "absolute",
    bottom: "2%",
    paddingHorizontal: "3%",
  },
  favouriteDiscountPrice: {
    fontFamily: "Nunito-Bold",
    color: "#000",
    fontSize: hp(1.8),
  },
  favouritePriceText: {
    color: "red",
  },
  favouriteOriginalPrice: {
    fontFamily: "Nunito-Bold",
    color: "#808488",
    fontSize: hp(1.8),
    textDecorationLine: "line-through",
  },
  iqPortalPressable: {
    width: wp(47),
    height: hp(24),
  },
  iqPortalCard: {
    width: wp(47),
    height: hp(22),
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#fff",
    paddingLeft: "1%",
  },
  iqPortalImage: {
    width: wp(47),
    height: hp(11),
    borderRadius: 5,
  },
  iqPortalContent: {
    margin: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iqPortalMiniHeader: {
    fontFamily: "Nunito-ExtraBold",
    color: "#0049AF",
    fontSize: hp(1.4),
  },
  iqPortalTitle: {
    fontFamily: "Nunito-SemiBold",
    color: "#000",
    fontSize: hp(2.2),
    marginVertical: "1%",
  },
  iqPortalDetails: {
    fontFamily: "Nunito-SemiBold",
    color: "#14BA9C",
    fontSize: hp(1.5),
    marginTop: "5%",
  },
  iqPortalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "3%",
  },
});