import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EditImage from "../../../assets/EditImage.svg";
import DropDownPicker from "react-native-dropdown-picker";
import { CreditCardInput } from "react-native-creditcard";
import Upload_Photo_Icon from "../../../assets/Upload_Photo_Icon.svg";

const { width, height } = Dimensions.get("window");
export default function EditProfileScreen({ openDrawer }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [value, setValue] = useState("Madhya Pradesh"); // Default selected value
  const [valueMonth, setValueMonth] = useState("January"); // Default selected value
  const [valueYear, setValueYear] = useState("1999"); // Default selected value
  const [valueCity, setValueCity] = useState("Ahmedabad"); // Default selected value
  const [valueState, setValueState] = useState("Gujarat");
  const [items, setItems] = useState([
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Gujarat", value: "Gujaat" },
  ]);
  const [month, setMonth] = useState([
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [year, setYear] = useState([]);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const expirationYears = Array.from({ length: 20 }, (_, i) => {
      const yearValue = currentYear + i;
      return { label: yearValue.toString(), value: yearValue.toString() };
    });
    setYear(expirationYears);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <ImageBackground
        source={require("../../../assets/vector_1.png")}
        style={styles.vector}
      >
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                color={"#0D0D26"}
                size={23}
              />
            </Pressable>
            <Text style={styles.headerText}>Edit Profile</Text>
          </View>
        </View>
        <View style={styles.profileSection}>
          <Image
            source={require("../../../assets/profile_img.png")}
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.editBtn}>
            <EditImage width={wp(3)} />
          </TouchableOpacity>
        </View>
        <View style={{ padding: "5%" }}>
          <View style={{ marginBottom: "5%" }}>
            <Text
              style={{
                fontFamily: "Nunito-SemiBold",
                fontSize: wp(5),
                color: "#000000",
              }}
            >
              Store Details
            </Text>
          </View>
          <Text style={styles.label}>Store Name</Text>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "3%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="Hidden Finds"
              value="Hidden Finds"
              style={{
                fontFamily: "Nunito-Bold",
                color: "#000",
                fontSize: hp(2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
          <Text style={styles.label}>Address</Text>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "3%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder=" Enter your complete store address"
              value=" Enter your complete store address"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2%",
            }}
          >
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openMonth}
                value={"City"}
                items={month}
                setOpen={setOpenMonth}
                setValue={setValueCity}
                setItems={setCity}
                placeholder="City"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openYear}
                value={"State"}
                items={year}
                setOpen={setOpenYear}
                setValue={setValueState}
                setItems={setState}
                placeholder="State"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2%",
            }}
          >
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openMonth}
                value={"Postal/Zip code"}
                items={month}
                setOpen={setOpenMonth}
                setValue={setValueCity}
                setItems={setCity}
                placeholder="Zip Code"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openYear}
                value={"Country"}
                items={year}
                setOpen={setOpenYear}
                setValue={setValueState}
                setItems={setState}
                placeholder="Country"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "3%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="johndoe@gmail.com"
              value="Google Maps Links"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "#C4C4C4",
            width: wp(90),
            alignSelf: "center",
            marginTop: "6%",
          }}
        />
        <View style={{ padding: "5%" }}>
          <View style={{ marginBottom: "5%" }}>
            <Text
              style={{
                fontFamily: "Nunito-SemiBold",
                fontSize: wp(5),
                color: "#000000",
              }}
            >
              Business Address Details
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2%",
            }}
          >
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openMonth}
                // value={valueMonth}
                items={month}
                setOpen={setOpenMonth}
                setValue={setValueMonth}
                setItems={setMonth}
                placeholder="Day's"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
            <View style={styles.monthDropContainer}>
              <DropDownPicker
                open={openYear}
                value={valueYear}
                items={year}
                setOpen={setOpenYear}
                setValue={setValueYear}
                setItems={setYear}
                placeholder="Timing"
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropDownContainerStyle={[
                  styles.dropdownContainerStyle,
                  { maxHeight: "auto" },
                ]}
                ArrowDownIconComponent={() => (
                  <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                )}
              />
            </View>
          </View>
          <Text style={styles.label}>Phone Number</Text>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="johndoe@gmail.com"
              value="+97 23342234244"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
          <Text style={styles.label}>Store Email</Text>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="johndoe@gmail.com"
              value="Enter your store email"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "#C4C4C4",
            width: wp(90),
            alignSelf: "center",
            marginTop: "6%",
          }}
        />
        <View style={{ padding: "5%" }}>
          <View style={{ marginBottom: "5%" }}>
            <Text
              style={{
                fontFamily: "Nunito-SemiBold",
                fontSize: wp(5),
                color: "#000000",
              }}
            >
              Social Media Links
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="John Doe"
              value=" Facebook link"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="johndoe@gmail.com"
              value="Instagram Link"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: hp(6.5),
              alignSelf: "center",
              borderRadius: 8,
              marginVertical: "2%",
              paddingHorizontal: "5%",
              justifyContent: "center",
              borderWidth: 0.4,
              borderColor: "#524B6B",
            }}
          >
            <TextInput
              placeholder="johndoe@gmail.com"
              value="Twitter Link"
              style={{
                fontFamily: "Nunito-Regular",
                color: "#000",
                fontSize: hp(2.2),
              }}
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "#C4C4C4",
            width: wp(90),
            alignSelf: "center",
            marginTop: "6%",
          }}
        />
        <TouchableOpacity style={styles.gettingStarted}>
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              color: "#fff",
              fontSize: hp(2.5),
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={{ height: hp(7) }} />
      <ImageBackground
        source={require("../../../assets/vector_2.png")}
        style={styles.vector2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  vector: {
    flex: 1,
    width: wp(100),
  },
  vector2: {
    flex: 1,
    width: wp(100),
    height: height * 2,
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  header: {
    width: wp(100),
    height: hp(7),
    marginTop: "10%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerChild: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(50),
    // justifyContent: 'space-between'
  },
  headerText: {
    fontFamily: "Nunito-Bold",
    fontSize: hp(3.2),
    textAlign: "left",
    color: "#0D0140",
    marginLeft: "3%",
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    elevation: 2,
    backgroundColor: "#fff",
    marginVertical: "2%",
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    marginLeft: 16,
    fontSize: hp(2.3),
    color: "#150B3D",
    fontFamily: "Nunito-Regular",
  },
  profileSection: {
    alignItems: "center",
    borderBottomColor: "#f0f0f0",
    justifyContent: "center",
    marginTop: "3%",
  },
  profilePicture: {
    width: wp(26),
    height: wp(26),
    borderRadius: 40,
  },
  profileName: {
    fontSize: hp(2.7),
    color: "#0D0D26",
    fontFamily: "Nunito-Bold",
  },
  editBtn: {
    width: wp(7.5),
    height: wp(7.5),
    backgroundColor: "#130160",
    position: "absolute",
    bottom: 0,
    right: "36.5%",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#fbfdff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "black",
    fontFamily: "Nunito-SemiBold",
    fontSize: hp(1.8),
    marginTop: "1.5%",
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: "2%",
    justifyContent: "center",
    borderWidth: 0.1,
    borderColor: "#524B6B",
    zIndex: 5,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#524B6B",
    height: hp(6),
    borderRadius: 6,
    borderWidth: 0.3,
    borderColor: "#000",
  },
  dropdownText: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: "#000",
  },
  dropdownContainerStyle: {
    borderColor: "#524B6B",
    backgroundColor: "#fff",
    zIndex: 4,
  },
  monthDropContainer: {
    backgroundColor: "#fff",
    width: "48%",
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: "2%",
    justifyContent: "center",
    borderWidth: 0.1,
    borderColor: "#524B6B",
    zIndex: 5,
  },
  inputContainer: {
    backgroundColor: "#fff",
    width: "45%",
    height: hp(6.5),
    alignSelf: "flex-start",
    borderRadius: 8,
    paddingHorizontal: "3%",
    marginVertical: "2%",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: "#524B6B",
  },
  input: {
    fontFamily: "Nunito-Regular",
    color: "#000",
    fontSize: hp(2),
  },
  gettingStarted: {
    backgroundColor: "#130160",
    width: "90%",
    height: hp(7),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: "5%",
  },
  bannerContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: hp(23),
    borderRadius: 8,
    marginVertical: "2%",
    // paddingHorizontal: '5%',
    borderWidth: 0.4,
    borderColor: "#524B6B",
    alignItems: "center",
    padding: "2%",
    justifyContent: "center",
  },
  nearestStore: {
    width: "48%",
    borderWidth: 0.4,
    borderColor: "#828282",
    height: "90%",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: '9%',
    borderColor: "red",
    borderWidth: 0.8,
  },
  nearestStoreBtn2: {
    width: "48%",
    borderWidth: 0.4,
    // borderColor: '#828282',
    height: "90%",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: '5%',
    borderColor: "gray",
    borderWidth: 0.8,
  },
});
