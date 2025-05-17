import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Carousel, { Pagination } from "react-native-snap-carousel";
import AntDesign from "react-native-vector-icons/AntDesign";
import ObImg5 from "../../../assets/ob_img5.svg";
import Onboarding1 from "../../../assets/onboarding_1.svg";
import Onboarding2 from "../../../assets/onboarding_2.svg";
import Onboarding3 from "../../../assets/onboarding_3.svg";
import Onboarding4 from "../../../assets/onboarding_4.svg";

const { width, height } = Dimensions.get("window");

const onboardingData = [
  {
    title: (
      <Text>
        Create and Manage{" "}
        <Text style={{ color: "#00B386", textDecorationLine: "underline" }}>
          Promotions!
        </Text>
      </Text>
    ),
    subtitle: (
      <Text
        style={{
          color: "#524B6B",
          fontFamily: "DMSans_18pt-Regular",
          fontSize: wp(3.8),
        }}
      >
        Keep your customers engaged with time-limited offers and discounts.
      </Text>
    ),
    image: <Onboarding1 />,
    styles: { width: wp(80), height: hp(37) },
  },
  {
    title: (
      <Text>
        Discover Trusted{" "}
        <Text style={{ color: "#00B386", textDecorationLine: "underline" }}>
          Suppliers
        </Text>
      </Text>
    ),
    subtitle: (
      <Text
        style={{
          color: "#524B6B",
          fontFamily: "DMSans_18pt-Regular",
          fontSize: wp(3.8),
        }}
      >
        Source products quickly and easily from over 100 suppliers.
      </Text>
    ),
    image: <Onboarding2 width={"97%"} />,
    styles: { width: wp(82), height: hp(35) },
  },
  {
    title: (
      <Text>
        Showcase{" "}
        <Text style={{ color: "#00B386", textDecorationLine: "underline" }}>
          Your Store!
        </Text>
      </Text>
    ),
    subtitle: (
      <Text
        style={{
          color: "#524B6B",
          fontFamily: "DMSans_18pt-Regular",
          fontSize: wp(3.8),
        }}
      >
        Effortlessly scan items, and list more products while tracking live
        prices, item details, and more.{" "}
      </Text>
    ),
    image: <Onboarding3 width={"99%"} />, // Add your image path
    styles: { width: wp(80), height: hp(35) },
  },
  {
    title: (
      <Text>
        Nationwide{" "}
        <Text style={{ color: "#00B386", textDecorationLine: "underline" }}>
          Bin Shopper & Reseller Network
        </Text>
      </Text>
    ),
    subtitle: (
      <Text
        style={{
          color: "#524B6B",
          fontFamily: "DMSans_18pt-Regular",
          fontSize: wp(3.8),
        }}
      >
        Upload photos, videos, and more to highlight your trending products and
        promotions.
      </Text>
    ),
    image: <Onboarding4 width={"95%"} />, // Add your image path
    styles: { width: wp(90), height: hp(37) },
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={{ ...styles.slide }}>
      {item.image}
      <View style={{ width: "90%" }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  const pagination = () => {
    return (
      <Pagination
        dotsLength={onboardingData.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: wp(8),
          height: hp(1.1),
          borderRadius: 5,
          backgroundColor: "#14BA9C",
          marginHorizontal: wp(-1.1), // Adjust spacing between dots
        }}
        inactiveDotStyle={{
          width: 10,
          marginHorizontal: wp(0.5), // Same spacing for inactive dots
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
    );
  };

  const handleNext = () => {
    if (activeIndex < onboardingData.length - 1) {
      carouselRef.current.snapToNext();
    } else {
      navigation.replace("SignUp"); // Change 'HomeScreen' to your main screen
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.snapToPrev();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.logoHeader}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <Carousel
        ref={carouselRef}
        data={onboardingData}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveIndex(index)}
        decelerationRate="fast"
        snapToInterval={width} // Ensures snapping to one item
      />
      <View style={styles.arrowContainer}>
        {activeIndex < onboardingData.length - 1 && pagination()}
        {activeIndex < onboardingData.length - 1 && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <AntDesign
              name="arrowright"
              size={30}
              color="#fff"
              style={styles.nextArrow}
            />
          </TouchableOpacity>
        )}
        {activeIndex === onboardingData.length - 1 && (
          <TouchableOpacity
            style={styles.gettingStarted}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={{
                fontFamily: "Nunito-SemiBold",
                color: "#fff",
                fontSize: hp(2.5),
              }}
            >
              Get started
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    marginTop: hp(5),
    height: hp(70),
    // flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  image: {
    width: wp(80),
    height: hp(24),
  },
  title: {
    fontSize: hp(4.2),
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: hp(2.1),
    color: "#666",
    textAlign: "left",
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    width: "100%",
    bottom: "7%",
  },
  getStartedButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoHeader: {
    alignItems: "flex-end",
    paddingRight: "3%",
    height: hp(13),
    width: "100%",
  },
  logo: {
    marginTop: hp(7),
    width: wp(30),
    height: hp(6),
  },
  nextButton: {
    width: wp(16),
    height: wp(16),
    backgroundColor: "#130160",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightedText: {
    color: "#00B386",
    textDecorationLine: "underline",
  },
  gettingStarted: {
    backgroundColor: "#130160",
    width: "100%",
    height: hp(7.5),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
