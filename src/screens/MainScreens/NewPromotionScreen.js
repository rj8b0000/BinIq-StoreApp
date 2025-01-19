// import { Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import CameraIcon from '../../../assets/CameraIcon.svg';
// import SearchIcon from '../../../assets/SearchIcon.svg';
// import GalleryIcon from '../../../assets/gallery_icon.svg';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
// import DropDownPicker from 'react-native-dropdown-picker';
// import Upload_Photo_Icon from '../../../assets/Upload_Photo_Icon.svg';




// const NewPromotionScreen = () => {
//     const navigation = useNavigation();
//     return (
//         <ScrollView style={styles.container}>
//             <StatusBar translucent={true} backgroundColor={'transparent'} />
//             <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
//                 <View style={styles.header}>
//                     <View style={styles.headerChild}>
//                         <Pressable onPress={() => navigation.goBack()}>
//                             <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
//                         </Pressable>
//                         <Text style={styles.headerText}>New Promotion</Text>
//                     </View>
//                 </View>
//                 <View style={{ height: hp(2) }} />
//                 <View style={{ width: wp(100), paddingHorizontal: '5%' }}>
//                     <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.8), color: '#14BA9C' }}>Create a New Promotion</Text>
//                     <Text style={{ color: '#524B6B', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.7), marginTop: '2%' }}>Engage your customers with exciting offers and discounts </Text>
//                 </View>
//                 <View style={{ height: hp(2) }} />
//                 <Text style={{ color: '#000000', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.9), marginTop: '2%', paddingHorizontal: '5%' }}>Promotions Section (Add new promotione)</Text>
//                 <View style={{ paddingHorizontal: '5%' }}>
//                     <Text style={styles.label}>Title</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='Buy One, Get One Free'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Description</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
//                         <TextInput
//                             placeholder='Free shipping on orders over $50'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                     </View>
//                     <Text style={styles.label}>Discount Type</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'space-between', borderWidth: 0.4, borderColor: '#524B6B', flexDirection: 'row', alignItems: 'center' }}>
//                         <TextInput
//                             placeholder='buy-one-get-one (BOGO) deal'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
//                             placeholderTextColor={'gray'}
//                         />
//                         <SimpleLineIcons name="arrow-down" size={20} color="#000" />
//                     </View>
//                     <Text style={styles.label}>Minimum Purchase Requirements</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(6.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'space-between', borderWidth: 0.4, borderColor: '#524B6B', flexDirection: 'row', alignItems: 'center' }}>
//                         <TextInput
//                             placeholder='$50 to $300'
//                             style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2), width: '50%' }}
//                             placeholderTextColor={'gray'}
//                         />
//                         <SimpleLineIcons name="arrow-down" size={20} color="#000" />
//                     </View>
//                     <Text style={styles.label}>Banner</Text>
//                     <View style={{ backgroundColor: '#fff', width: '100%', height: hp(15), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'space-between', borderWidth: 0.4, borderColor: '#524B6B', flexDirection: 'col', alignItems: 'center' }}>
//                         <Text style={{
//                             color: 'black',
//                             fontFamily: 'Nunito-SemiBold',
//                             fontSize: hp(1.7),
//                             marginTop: '3%',
//                             textAlign: 'left',
//                         }}>Upload Photo</Text>
//                         <Upload_Photo_Icon width={'50%'} height={'70%'} />
//                     </View>
//                 </View>
//                 <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('UploadSuccess')}>
//                     <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2) }}>Upload Photo</Text>
//                 </TouchableOpacity>
//             </ImageBackground>
//         </ScrollView>
//     )
// }

// export default NewPromotionScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     uploadContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         // marginHorizontal: '3%',
//         marginVertical: '2%',
//         width: '100%'
//     },
//     searchContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         // backgroundColor: 'trasparent',
//         borderWidth: 1,
//         borderRadius: 12,
//         // marginRight: 10,
//         borderColor: '#99ABC678',
//         alignSelf: 'center',
//         height: hp(7),
//         backgroundColor: '#fff'
//     },
//     cameraButton: {
//         padding: 10,
//     },
//     input: {
//         flex: 1,
//         fontSize: hp(2),
//         fontFamily: 'Nunito-Regular',
//         paddingVertical: 8,
//         color: '#000',
//         textAlign: 'left'
//     },
//     searchButton: {
//         padding: 10,
//     },
//     logoContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         width: wp(40),
//         height: hp(10.5),
//     },
//     vector: {
//         flex: 1,
//         width: wp(100),
//         height: hp(100),
//     },
//     logoText: {
//         fontFamily: 'Nunito-SemiBold',
//         color: '#000',
//         fontSize: hp(2.5)
//     },
//     cityVector: {
//         position: 'absolute',
//         width: wp(100),
//         bottom: 0
//     },
//     label: {
//         color: 'black',
//         fontFamily: 'Nunito-SemiBold',
//         fontSize: hp(1.7),
//         marginTop: '3%'
//     },
//     gettingStarted: {
//         backgroundColor: '#130160',
//         width: '90%',
//         height: hp(6.7),
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         marginTop: '10%'
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
//         justifyContent: 'space-between'
//     },
//     headerText: {
//         fontFamily: 'Nunito-Bold',
//         fontSize: hp(3),
//         textAlign: 'left',
//         color: '#0D0140'
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
//         zIndex: 5,
//     },
//     dropdown: {
//         backgroundColor: '#fff',
//         borderColor: '#524B6B',
//         height: hp(6),
//         borderRadius: 6,
//         borderWidth: 0.3,
//         borderColor: '#000',
//         marginVertical: '2%'
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
// })


import { Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CameraIcon from '../../../assets/CameraIcon.svg';
import SearchIcon from '../../../assets/SearchIcon.svg';
import GalleryIcon from '../../../assets/gallery_icon.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import DropDownPicker from 'react-native-dropdown-picker';
import Upload_Photo_Icon from '../../../assets/Upload_Photo_Icon.svg';

const NewPromotionScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={styles.header}>
                    <View style={styles.headerChild}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
                        </Pressable>
                        <Text style={styles.headerText}>New Promotion</Text>
                    </View>
                </View>
                <View style={{ height: hp(2) }} />
                <View style={{ width: wp(100), paddingHorizontal: '5%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.8), color: '#14BA9C' }}>Create a New Promotion</Text>
                    <Text style={{ color: '#524B6B', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.7), marginTop: '2%' }}>Engage your customers with exciting offers and discounts </Text>
                </View>
                <View style={{ height: hp(2) }} />
                <Text style={{ color: '#000000', fontFamily: 'Nunito-SemiBold', fontSize: hp(1.9), marginTop: '2%', paddingHorizontal: '5%' }}>Promotions Section (Add new promotion)</Text>
                <View style={{ paddingHorizontal: '5%' }}>
                    <Text style={styles.label}>Title</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Buy One, Get One Free'
                            style={styles.inputText}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Description</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Free shipping on orders over $50'
                            style={styles.inputText}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Discount Type</Text>
                    <View style={styles.inputContainerRow}>
                        <TextInput
                            placeholder='buy-one-get-one (BOGO) deal'
                            style={styles.inputText}
                            placeholderTextColor={'gray'}
                        />
                        <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                    </View>
                    <Text style={styles.label}>Minimum Purchase Requirements</Text>
                    <View style={styles.inputContainerRow}>
                        <TextInput
                            placeholder='$50 to $300'
                            style={[styles.inputText, { width: '50%' }]}
                            placeholderTextColor={'gray'}
                        />
                        <SimpleLineIcons name="arrow-down" size={20} color="#000" />
                    </View>
                    <Text style={styles.label}>Banner</Text>
                    <View style={styles.bannerContainer}>
                        <Upload_Photo_Icon width={'50%'} height={'50%'} />
                    </View>
                </View>
                <View style={{ width: '90%', marginTop: '5%', height: hp(7), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.nearestStoreBtn2}>
                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.9) }}>Delete Promotion</Text>
                    </View>
                    <View style={styles.nearestStore}>
                        <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.9) }}>Create Promotion</Text>
                    </View>
                </View>
                <View style={{ height: hp(5) }} />
            </ImageBackground>
        </ScrollView>
    )
}

export default NewPromotionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
    },
    vector: {
        width: wp(100),
        minHeight: hp(100), // Ensure the content takes the full height
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
        justifyContent: 'space-between',
    },
    headerText: {
        fontFamily: 'Nunito-Bold',
        fontSize: hp(3),
        textAlign: 'left',
        color: '#0D0140',
    },
    inputContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: hp(6.5),
        borderRadius: 8,
        marginVertical: '2%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: '#524B6B',
    },
    inputContainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: hp(6.5),
        borderRadius: 8,
        marginVertical: '2%',
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        borderWidth: 0.4,
        borderColor: '#524B6B',
    },
    inputText: {
        fontFamily: 'Nunito-Regular',
        color: '#000',
        fontSize: hp(2.2),
    },
    label: {
        color: 'black',
        fontFamily: 'Nunito-SemiBold',
        fontSize: hp(1.7),
        marginTop: '3%',
    },
    bannerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: hp(23),
        borderRadius: 8,
        marginVertical: '2%',
        // paddingHorizontal: '5%',
        borderWidth: 0.4,
        borderColor: '#524B6B',
        alignItems: 'center',
        padding: '2%',
        justifyContent: 'center'
    },
    bannerText: {
        color: 'black',
        fontFamily: 'Nunito-SemiBold',
        fontSize: hp(1.7),
        marginTop: '3%',
        textAlign: 'left',
        flex: 1,
    },
    gettingStarted: {
        backgroundColor: '#130160',
        width: '90%',
        height: hp(6.7),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: '10%',
    },
    nearestStore: {
        width: '48%',
        borderWidth: 0.4,
        borderColor: '#828282',
        height: '90%',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: '9%',
        borderColor: 'red',
        borderWidth: 0.8,
    },
    nearestStoreBtn2: {
        width: '48%',
        borderWidth: 0.4,
        // borderColor: '#828282',
        height: '90%',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        borderColor: 'gray',
        borderWidth: 0.8,
    },
});
