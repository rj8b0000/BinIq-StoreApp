// import { useNavigation } from "@react-navigation/native"
// import React, { useEffect, useState } from "react"
// import {
//     View,
//     Text,
//     StyleSheet,
//     Switch,
//     TouchableOpacity,
//     ImageBackground,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     Dimensions,
//     Pressable,
//     Image,
//     TextInput
// } from "react-native"
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
// import Ionicons from "react-native-vector-icons/Ionicons"
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
// import EditImage from '../../../assets/EditImage.svg'
// import DropDownPicker from "react-native-dropdown-picker"
// import { CreditCardInput } from "react-native-creditcard"
// import Upload_Photo_Icon from '../../../assets/Upload_Photo_Icon.svg';

// const { width, height } = Dimensions.get('window')
// export default function EditProfileScreen({ openDrawer }) {
//     const [isEnabled, setIsEnabled] = React.useState(false)
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState)
//     const navigation = useNavigation();
//     const [open, setOpen] = useState(false);
//     const [openMonth, setOpenMonth] = useState(false);
//     const [openYear, setOpenYear] = useState(false);
//     const [value, setValue] = useState('Madhya Pradesh'); // Default selected value
//     const [valueMonth, setValueMonth] = useState('January'); // Default selected value
//     const [valueYear, setValueYear] = useState('1999'); // Default selected value
//     const [valueCity, setValueCity] = useState('Ahmedabad'); // Default selected value
//     const [valueState, setValueState] = useState('Gujarat');
//     const [items, setItems] = useState([
//         { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
//         { label: 'Maharashtra', value: 'Maharashtra' },
//         { label: 'Rajasthan', value: 'Rajasthan' },
//         { label: 'Gujarat', value: 'Gujaat' },
//     ]);
//     const [month, setMonth] = useState([
//         { label: "January", value: "January" },
//         { label: "February", value: "February" },
//         { label: "March", value: "March" },
//         { label: "April", value: "April" },
//         { label: "May", value: "May" },
//         { label: "June", value: "June" },
//         { label: "July", value: "July" },
//         { label: "August", value: "August" },
//         { label: "September", value: "September" },
//         { label: "October", value: "October" },
//         { label: "November", value: "November" },
//         { label: "December", value: "December" },
//     ]);
//     const [city, setCity] = useState([])
//     const [state, setState] = useState([
//     ]);
//     const [year, setYear] = useState([])
//     useEffect(() => {
//         const currentYear = new Date().getFullYear();
//         const expirationYears = Array.from({ length: 20 }, (_, i) => {
//             const yearValue = currentYear + i;
//             return { label: yearValue.toString(), value: yearValue.toString() };
//         });
//         setYear(expirationYears);
//     }, []);

//     return (
//         <ScrollView style={styles.container}>
//             <StatusBar translucent={true} backgroundColor={'transparent'} />
//             <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
//                 <View style={styles.header}>
//                     <View style={styles.headerChild}>
//                         <Pressable onPress={() => navigation.goBack()}>
//                             <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={23} />
//                         </Pressable>
//                         <Text style={styles.headerText}>Edit Profile</Text>
//                     </View>
//                 </View>
//                 <View style={styles.profileSection}>
//                     <Image
//                         source={require("../../../assets/profile_img.png")}
//                         style={styles.profilePicture}
//                     />
//                     <TouchableOpacity style={styles.editBtn}>
//                         <EditImage width={wp(3)} />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ padding: '5%' }}>
//                     <View style={{ marginBottom: '5%' }}>
//                         <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: wp(5), color: '#000000' }}>Store Details</Text>
//                     </View>
//                     <Text style={styles.label}>Store Name</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '3%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='Hidden Finds'
//                             value='Hidden Finds'
//                             style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Address</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '3%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder=' Enter your complete store address'
//                             value=' Enter your complete store address'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2%', }}>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openMonth}
//                                 value={'City'}
//                                 items={month}
//                                 setOpen={setOpenMonth}
//                                 setValue={setValueCity}
//                                 setItems={setCity}
//                                 placeholder="City"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openYear}
//                                 value={'State'}
//                                 items={year}
//                                 setOpen={setOpenYear}
//                                 setValue={setValueState}
//                                 setItems={setState}
//                                 placeholder="State"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2%', }}>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openMonth}
//                                 value={'Postal/Zip code'}
//                                 items={month}
//                                 setOpen={setOpenMonth}
//                                 setValue={setValueCity}
//                                 setItems={setCity}
//                                 placeholder="Zip Code"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openYear}
//                                 value={'Country'}
//                                 items={year}
//                                 setOpen={setOpenYear}
//                                 setValue={setValueState}
//                                 setItems={setState}
//                                 placeholder="Country"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                     </View>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '3%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='Google Maps Links'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ borderWidth: 0.3, borderColor: '#C4C4C4', width: wp(90), alignSelf: 'center', marginTop: '6%' }} />
//                 <View style={{ padding: '5%' }}>
//                     <View style={{ marginBottom: '5%' }}>
//                         <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: wp(5), color: '#000000' }}>Business Address Details</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2%', }}>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openMonth}
//                                 // value={valueMonth}
//                                 items={month}
//                                 setOpen={setOpenMonth}
//                                 setValue={setValueMonth}
//                                 setItems={setMonth}
//                                 placeholder="Day's"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openYear}
//                                 value={valueYear}
//                                 items={year}
//                                 setOpen={setOpenYear}
//                                 setValue={setValueYear}
//                                 setItems={setYear}
//                                 placeholder="Timing"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                     </View>
//                     <Text style={styles.label}>Phone Number</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='+97 23342234244'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Store Email</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='Enter your store email'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ borderWidth: 0.3, borderColor: '#C4C4C4', width: wp(90), alignSelf: 'center', marginTop: '6%' }} />
//                 <View style={{ padding: '5%' }}>
//                     <View style={{ marginBottom: '5%' }}>
//                         <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: wp(5), color: '#000000' }}>Social Media Links</Text>
//                     </View>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='John Doe'
//                             value=' Facebook link'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='Instagram Link'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='Twitter Link'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ borderWidth: 0.3, borderColor: '#C4C4C4', width: wp(90), alignSelf: 'center', marginTop: '6%' }} />
//                 <View style={{ padding: '5%' }}>
//                     <View style={{ marginBottom: '5%' }}>
//                         <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: wp(4.5), color: '#000000' }}>Promotions Section (Add new promotion)</Text>
//                     </View>
//                     <Text style={styles.label}>Title</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='John Doe'
//                             value='Buy One, Get One Free'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Description</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='Free shipping on orders over $50'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Discount Type</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value=' buy-one-get-one (BOGO) deal'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Minimum Purchase Requirements</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='$50 to $300'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Applicable Products</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='johndoe@gmail.com'
//                             value='$50 to $300'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Specify Promotion Dates</Text>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2%', }}>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openMonth}
//                                 // value={valueMonth}
//                                 items={month}
//                                 setOpen={setOpenMonth}
//                                 setValue={setValueMonth}
//                                 setItems={setMonth}
//                                 placeholder="Start Date"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                         <View style={styles.monthDropContainer}>
//                             <DropDownPicker
//                                 open={openYear}
//                                 // value={valueYear}
//                                 items={year}
//                                 setOpen={setOpenYear}
//                                 setValue={setValueYear}
//                                 setItems={setYear}
//                                 placeholder="End Date"
//                                 style={styles.dropdown}
//                                 textStyle={styles.dropdownText}
//                                 dropDownContainerStyle={[styles.dropdownContainerStyle, { maxHeight: 'auto' }]}
//                                 ArrowDownIconComponent={() => <SimpleLineIcons name="arrow-down" size={20} color="#000" />}
//                             />
//                         </View>
//                     </View>
//                     <Text style={styles.label}>Banner</Text>
//                     <View style={styles.bannerContainer}>
//                         <Upload_Photo_Icon width={'50%'} height={'50%'} />
//                     </View>
//                     <View style={{ width: '100%', marginTop: '5%', height: hp(7), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <View style={styles.nearestStoreBtn2}>
//                             <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.9) }}>Delete Promotion</Text>
//                         </View>
//                         <View style={styles.nearestStore}>
//                             <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.9) }}>Create Promotion</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <TouchableOpacity style={styles.gettingStarted}>
//                     <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Save</Text>
//                 </TouchableOpacity>
//             </ImageBackground>
//             <View style={{ height: hp(7) }} />
//             <ImageBackground source={require('../../../assets/vector_2.png')} style={styles.vector2} />
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: "cover"
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     vector: {
//         flex: 1,
//         width: wp(100),
//     },
//     vector2: {
//         flex: 1,
//         width: wp(100),
//         height: height * 2,
//         position: 'absolute',
//         bottom: 0,
//         zIndex: -1
//     },
//     header: {
//         width: wp(100),
//         height: hp(7),
//         marginTop: '10%',
//         paddingHorizontal: '5%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     headerChild: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: wp(50),
//         // justifyContent: 'space-between'
//     },
//     headerText: {
//         fontFamily: 'Nunito-Bold',
//         fontSize: hp(3.2),
//         textAlign: 'left',
//         color: '#0D0140',
//         marginLeft: '3%'
//     },
//     content: {
//         flex: 1,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         padding: 16
//     },
//     settingItem: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 16,
//         elevation: 2,
//         backgroundColor: '#fff',
//         marginVertical: '2%',
//         borderRadius: 10,
//         paddingHorizontal: '5%'
//     },
//     settingLeft: {
//         flexDirection: "row",
//         alignItems: "center"
//     },
//     settingText: {
//         marginLeft: 16,
//         fontSize: hp(2.3),
//         color: '#150B3D',
//         fontFamily: 'Nunito-Regular'
//     },
//     profileSection: {
//         alignItems: "center",
//         borderBottomColor: "#f0f0f0",
//         justifyContent: 'center',
//         marginTop: '3%'
//     },
//     profilePicture: {
//         width: wp(26),
//         height: wp(26),
//         borderRadius: 40,
//     },
//     profileName: {
//         fontSize: hp(2.7),
//         color: '#0D0D26',
//         fontFamily: 'Nunito-Bold'
//     },
//     editBtn: {
//         width: wp(7.5),
//         height: wp(7.5),
//         backgroundColor: '#130160',
//         position: 'absolute',
//         bottom: 0,
//         right: '36.5%',
//         borderRadius: 20,
//         borderWidth: 3,
//         borderColor: '#fbfdff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     label: {
//         color: 'black',
//         fontFamily: 'Nunito-SemiBold',
//         fontSize: hp(1.8),
//         marginTop: '1.5%'
//     },
//     dropdownContainer: {
//         backgroundColor: '#fff',
//         width: '100%',
//         alignSelf: 'center',
//         borderRadius: 8,
//         marginVertical: '2%',
//         justifyContent: 'center',
//         borderWidth: 0.1,
//         borderColor: '#524B6B',
//         zIndex: 5
//     },
//     dropdown: {
//         backgroundColor: '#fff',
//         borderColor: '#524B6B',
//         height: hp(6),
//         borderRadius: 6,
//         borderWidth: 0.3,
//         borderColor: '#000'
//     },
//     dropdownText: {
//         fontFamily: 'Nunito-Regular',
//         fontSize: 16,
//         color: '#000',
//     },
//     dropdownContainerStyle: {
//         borderColor: '#524B6B',
//         backgroundColor: '#fff',
//         zIndex: 4,
//     },
//     monthDropContainer: {
//         backgroundColor: '#fff',
//         width: '48%',
//         alignSelf: 'center',
//         borderRadius: 8,
//         marginVertical: '2%',
//         justifyContent: 'center',
//         borderWidth: 0.1,
//         borderColor: '#524B6B',
//         zIndex: 5
//     },
//     inputContainer: {
//         backgroundColor: '#fff',
//         width: '45%',
//         height: hp(6.5),
//         alignSelf: 'flex-start',
//         borderRadius: 8,
//         paddingHorizontal: '3%',
//         marginVertical: '2%',
//         justifyContent: 'center',
//         borderWidth: 0.4,
//         borderColor: '#524B6B',
//     },
//     input: {
//         fontFamily: 'Nunito-Regular',
//         color: '#000',
//         fontSize: hp(2),
//     },
//     gettingStarted: {
//         backgroundColor: '#130160',
//         width: '90%',
//         height: hp(7),
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         marginVertical: '5%'
//     },
//     bannerContainer: {
//         backgroundColor: '#fff',
//         width: '100%',
//         height: hp(23),
//         borderRadius: 8,
//         marginVertical: '2%',
//         // paddingHorizontal: '5%',
//         borderWidth: 0.4,
//         borderColor: '#524B6B',
//         alignItems: 'center',
//         padding: '2%',
//         justifyContent: 'center'
//     },
//     nearestStore: {
//         width: '48%',
//         borderWidth: 0.4,
//         borderColor: '#828282',
//         height: '90%',
//         borderRadius: 7,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // paddingHorizontal: '9%',
//         borderColor: 'red',
//         borderWidth: 0.8,
//     },
//     nearestStoreBtn2: {
//         width: '48%',
//         borderWidth: 0.4,
//         // borderColor: '#828282',
//         height: '90%',
//         borderRadius: 7,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // paddingHorizontal: '5%',
//         borderColor: 'gray',
//         borderWidth: 0.8,
//     },
// })
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Carousel, { Pagination } from "react-native-snap-carousel";
import LocationIcon from "../../../assets/LocationIcon.svg";
import HeartIcon from "../../../assets/HeartIcon.svg";
import FacebookIcon from "../../../assets/FacebookIcon.svg";
import TwitterIcon from "../../../assets/TwitterIcon.svg";
import WhatsappIcon from "../../../assets/WhatsappIcon.svg";
import LinkedinIcon from "../../../assets/LinkedinIcon.svg";
import SharedIcon from "../../../assets/SharedIcon.svg";
import RatingsSummary from "../../Components/RatingsSummary";
import Heart_Icon from "../../../assets/heart_icon.svg";
import Share_Icon from "../../../assets/share_icon.svg";
import HiddenFindsImg from "../../../assets/hidden_find_img.svg";
import BoldTick from "../../../assets/bold_tick.svg";
import GreenTick from "../../../assets/green_tick.svg";
import { Star, Heart } from "lucide-react-native";

const { width, height } = Dimensions.get("window");
const BinStorePage = () => {
  const navigation = useNavigation();
  const [favouritePress, setFavouritePressed] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const carouselImages = [
    {
      id: 1,
      image: require("../../../assets/bin_store_img.png"),
    },
    {
      id: 2,
      image: require("../../../assets/bin_store_img.png"),
    },
    {
      id: 3,
      image: require("../../../assets/bin_store_img.png"),
    },
  ];
  const myFavourites = [
    {
      id: 1,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
      discountPrice: "$65",
      originalPrice: "$151",
      totalDiscount: "60% off",
    },
    {
      id: 2,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `Labbin White Sneakers For Men and Female`,
      discountPrice: "$650",
      originalPrice: "$125",
      totalDiscount: "70% off",
    },
    {
      id: 3,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `Mammon Women's Handbag (Set of 3, Beige)`,
      discountPrice: "$75",
      originalPrice: "$199",
      totalDiscount: "60% off",
    },
    {
      id: 4,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
      discountPrice: "$65",
      originalPrice: "$151",
      totalDiscount: "60% off",
    },
    {
      id: 5,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `Labbin White Sneakers For Men and Female`,
      discountPrice: "$650",
      originalPrice: "$125",
      totalDiscount: "70% off",
    },
    {
      id: 6,
      image: require("../../../assets/gray_img.png"),
      title: "COLGATE",
      description: `Mammon Women's Handbag (Set of 3, Beige)`,
      discountPrice: "$75",
      originalPrice: "$199",
      totalDiscount: "60% off",
    },
  ];
  const products = [
    {
      id: "1",
      name: "TMA-2 HD Wireless",
      subtitle: "Hidden Finds",
      rating: 4.8,
      reviews: 88,
      image: "https://placeholder.com/150",
    },
    {
      id: "2",
      name: "TMA-2 HD Wireless",
      subtitle: "ANC Store",
      rating: 4.8,
      reviews: 88,
      image: "https://placeholder.com/150",
    },
    {
      id: "3",
      name: "TMA-2 HD Wireless",
      subtitle: "Hidden Finds",
      rating: 4.8,
      reviews: 88,
      image: "https://placeholder.com/150",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };
  const renderMyFavourites = ({ item }) => (
    <View style={{ width: wp(47), height: hp(26) }}>
      <View
        style={{
          width: wp(45),
          height: hp(26),
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "#e6e6e6",
        }}
      >
        <Image
          source={item.image}
          style={{ width: wp(45), height: hp(13), borderRadius: 5 }}
        />
        <View style={{ paddingHorizontal: "1%" }}>
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              color: "#000",
              fontSize: hp(1.7),
              margin: "0.5%",
            }}
          >
            {item.description}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "2%",
            paddingHorizontal: "3%",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                color: "#000",
                fontSize: hp(1.8),
              }}
            >
              {item.discountPrice}
            </Text>
            <Text style={{ color: "red" }}>
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  color: "#808488",
                  fontSize: hp(1.8),
                  textDecorationLine: "line-through",
                }}
              >
                {item.originalPrice}
              </Text>
              {"  "}
              {item.totalDiscount}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
    <ScrollView style={styles.container}>
      <View style={styles.imgBg}>
        <View style={styles.header}>
          <View style={styles.headerChild}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={"#768190"}
                  size={25}
                />
              </Pressable>
              <Text style={styles.headerText}>Hidden Finds</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "23%",
            }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Heart_Icon height={hp(4)} />
            </Pressable>
            <Pressable onPress={() => navigation.goBack()}>
              <Share_Icon height={hp(4)} />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            justifyContent: "space-between",
            height: hp(23),
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <View
            style={{ width: "45%", height: "100%", justifyContent: "center" }}
          >
            <HiddenFindsImg width={"95%"} />
          </View>
          <View style={{ width: "55%" }}>
            <View
              style={{
                width: "97%",
                alignSelf: "flex-end",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  height: "23%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: "2%",
                  width: "93%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto-SemiBold",
                    borderColor: "#fff",
                    color: "#fff",
                    fontSize: hp(3),
                  }}
                >
                  Hidden Finds
                </Text>
                <BoldTick width={20} />
              </View>
              <View style={{ height: "35%", flexDirection: "row" }}>
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    paddingLeft: "1%",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-ExtraBold",
                      borderColor: "#fff",
                      color: "#fff",
                      fontSize: hp(3.2),
                    }}
                  >
                    11K {"\n"}
                    <Text style={{ fontSize: hp(1.8) }}>Followers</Text>
                  </Text>
                </View>
                <View
                  style={{
                    width: "50%",
                    height: "100%",
                    paddingLeft: "1%",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Roboto-ExtraBold",
                      borderColor: "#fff",
                      color: "#fff",
                      fontSize: hp(3.2),
                    }}
                  >
                    12K {"\n"}
                    <Text style={{ fontSize: hp(1.8) }}>Likes</Text>
                  </Text>
                </View>
              </View>
              <View style={{ height: "15%", justifyContent: "center" }}>
                <Text
                  style={{
                    fontFamily: "Roboto-Thin",
                    color: "#F8F8F8",
                    fontSize: hp(1.9),
                  }}
                >
                  www.hiddenfinds.com
                </Text>
              </View>
              <View
                style={{
                  height: "23%",
                  marginTop: "3%",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "85%",
                    backgroundColor: "#fff",
                    borderRadius: 7,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#14BA9C",
                  }}
                >
                  <Text
                    style={{
                      color: "#14BA9C",
                      fontSize: hp(2.3),
                      fontFamily: "DMSans-SemiBold",
                    }}
                  >
                    Follow
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          marginTop: "5%",
          height: hp(7),
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <View style={styles.storeButtonsContainer}> */}
        <View style={styles.nearestStore}>
          <LocationIcon />
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              color: "#000",
              fontSize: hp(1.9),
            }}
          >
            Check In
          </Text>
        </View>
        <View style={styles.nearestStoreBtn2}>
          <GreenTick />
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              color: "#000",
              fontSize: hp(1.9),
            }}
          >
            Verify My Bin
          </Text>
        </View>
        {/* </View> */}
      </View>
      <View style={styles.contentHeader}>
        <View style={styles.content}>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              color: "#000",
              fontSize: hp(2.4),
            }}
          >
            HIDDEN FINDS
          </Text>
        </View>
        <View style={styles.review}>
          <FontAwesome name="star" color={"#FFD700"} size={16} />
          <FontAwesome name="star" color={"#FFD700"} size={16} />
          <FontAwesome name="star" color={"#FFD700"} size={16} />
          <FontAwesome name="star" color={"#FFD700"} size={16} />
          <FontAwesome name="star" color={"#e6e6e6"} size={16} />
          <Text
            style={{
              fontFamily: "Nunito-SemiBold",
              color: "#828282",
              fontSize: hp(2),
            }}
          >
            {" "}
            56,890
          </Text>
        </View>
      </View>
      <View style={styles.contentDetails}>
        <Text
          style={{
            color: "#000",
            fontFamily: "Nunito-SemiBold",
            fontSize: hp(1.8),
            marginVertical: "1%",
          }}
        >
          Address:{" "}
        </Text>
        <Text
          style={{
            color: "#000",
            fontFamily: "Nunito-SemiBold",
            fontSize: hp(1.8),
            marginVertical: "1%",
          }}
        >
          Phone Number:{" "}
        </Text>
        <Text
          style={{
            color: "#000",
            fontFamily: "Nunito-SemiBold",
            fontSize: hp(1.8),
            marginVertical: "1%",
          }}
        >
          Email{" "}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#000",
              fontFamily: "Nunito-SemiBold",
              fontSize: hp(1.8),
              marginVertical: "1%",
            }}
          >
            Social Media Page{" "}
          </Text>
          <View style={styles.socialMediaIcons}>
            <FacebookIcon />
            <TwitterIcon />
            <WhatsappIcon />
            <LinkedinIcon />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#000",
              fontFamily: "Nunito-SemiBold",
              fontSize: hp(1.9),
              marginVertical: "1%",
            }}
          >
            Daily Rates:{" "}
          </Text>
          <View style={styles.totalAmounts}>
            <Text
              style={{
                color: "#524B6B",
                fontFamily: "Nunito-SemiBold",
                fontSize: hp(1.9),
                marginVertical: "1%",
              }}
            >
              $10, $8, $6, $4, $2, $1
            </Text>
          </View>
        </View>
      </View>
      {/* TRENDING PRODUCTS  */}
      <View style={{ flex: 1, width: "100%", height: hp(35), marginTop: "5%" }}>
        <View style={{ paddingHorizontal: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: "2.5%",
            }}
          >
            <Text
              style={{
                fontFamily: "Nunito-Bold",
                fontSize: hp(2.3),
                color: "#000000",
              }}
            >
              Trending Products
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#524B6B",
                  fontSize: hp(1.9),
                  textDecorationLine: "underline",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: "3%" }}>
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
      {/* TRENDING PRODUCTS  */}
      {/* <View style={{ flex: 1, width: '100%', height: hp(35), marginTop: '2%' }}> */}
      <View style={{ paddingHorizontal: "5%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "2.5%",
          }}
        >
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              fontSize: hp(2.3),
              color: "#000000",
            }}
          >
            PROMOTIONS
          </Text>
        </View>
        <View style={{ flex: 1, width: "100%", marginTop: "10%" }}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("SinglePageItem")}
              >
                <Image
                  source={require("../../../assets/dummy_product.png")}
                  style={styles.image}
                />
                <Ionicons
                  name="heart"
                  size={hp(2.5)}
                  color={"#EE2525"}
                  style={{ position: "absolute", right: "9%", top: "4%" }}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={12} color="#FFD700" fill="#FFD700" />
                  <Text style={styles.rating}>{item.rating}</Text>
                  <Text style={styles.reviews}>{item.reviews} Reviews</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={styles.grid}
          />
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default BinStorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  vector: {
    flex: 1,
    width: wp(100),
    height: hp(42),
  },
  imgBg: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: hp(41),
    // position: 'absolute',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#130160",
    // backgroundColor: 'red'
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
    width: wp(100),
    justifyContent: "space-between",
    flex: 1,
  },
  headerText: {
    fontFamily: "Nunito-Bold",
    fontSize: hp(3.4),
    textAlign: "left",
    color: "#0D0140",
  },
  slider: {
    width: "90%",
    borderColor: "#000",
    marginHorizontal: "5%",
    height: height * 0.25,
    marginTop: "4%",
  },
  slide: {
    flex: 1,
    width: "90%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height * 0.25,
  },
  paginationContainer: {
    position: "absolute",
    left: "43%",
    bottom: "-25%",
    width: wp(10),
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
  contentHeader: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "4%",
    flexDirection: "row",
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "50%",
  },
  review: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contentDetails: {
    width: "90%",
    marginHorizontal: "5%",
  },
  storeButtonsContainer: {
    width: "80%",
    height: hp(4),
    alignSelf: "center",
    // marginVertical: '5%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nearestStore: {
    width: "48%",
    borderWidth: 0.4,
    borderColor: "#828282",
    height: "90%",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "9%",
    borderColor: "red",
    borderWidth: 0.8,
  },
  nearestStoreBtn2: {
    width: "48%",
    borderWidth: 0.4,
    borderColor: "#828282",
    height: "90%",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderColor: "#00B813",
    borderWidth: 0.8,
  },
  bottomButtons: {
    width: "90%",
    height: hp(7.5),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewSimilar: {
    width: "48%",
    borderWidth: 0.4,
    borderColor: "#828282",
    height: hp(5.4),
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  socialMediaIcons: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalAmounts: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
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
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Nunito-Bold",
    fontSize: hp(3),
    textAlign: "left",
    color: "#C4C4C4",
  },
  card: {
    width: "30%", // Adjust the width to allow space between columns
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: "2%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: "0.5%",
    marginBottom: "2%", // Add spacing between rows
  },
  image: {
    width: "100%",
    marginBottom: 10,
  },
  name: {
    fontSize: hp(1.45),
    fontWeight: "500",
    marginBottom: 4,
    color: "#000",
  },
  subtitle: {
    fontSize: hp(1.7),
    color: "#14BA9C",
    fontWeight: "bold",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    // marginLeft: 4,
    fontSize: hp(1.5),
    fontWeight: "bold",
    color: "#000",
  },
  reviews: {
    marginLeft: 4,
    fontSize: hp(1.2),
    color: "#666",
  },
  heartButton: {
    position: "absolute",
    bottom: "2%",
    right: "1%",
    borderRadius: 15,
    padding: 5,
  },
});
