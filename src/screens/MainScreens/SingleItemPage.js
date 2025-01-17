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
import Ionicons from 'react-native-vector-icons/Ionicons'
import Heart_Icon from '../../../assets/heart_icon.svg';
import Share_Icon from '../../../assets/share_icon.svg';

const { width } = Dimensions.get('window');
const SingleItemPage = () => {
    const navigation = useNavigation();

    const myFavourites = [{
        id: 1,
        image: require('../../../assets/gray_img.png'),
        description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
        discountPrice: '$65',
        originalPrice: '$151',
        totalDiscount: '60% off'
    },
    {
        id: 2,
        image: require('../../../assets/gray_img.png'),
        description: `IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`,
        discountPrice: '$65',
        originalPrice: '$151',
        totalDiscount: '60% off'
    }
    ]
    const renderMyFavourites = ({ item }) => (
        <View style={{ width: wp(45), height: hp(26), alignItems: 'center', marginVertical: '1%' }}>
            <View style={{ width: wp(43), height: hp(26), borderRadius: 5, borderWidth: 1, borderColor: '#e6e6e6', backgroundColor: '#fff' }}>
                <Image source={item.image} style={{ width: wp(43), height: hp(13), borderRadius: 5 }} />
                <Ionicons name='heart' size={hp(3)} color={'#EE2525'} style={{ position: 'absolute', right: '2%', top: '2%' }} />
                <View style={{ paddingHorizontal: '1%' }}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#000', fontSize: hp(1.7), margin: '0.5%' }}>{item.description}</Text>
                </View>
                <View style={{ position: 'absolute', bottom: '2%', paddingHorizontal: '3%' }}>
                    <View>
                        <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(1.8) }}>{item.discountPrice}</Text>
                        <Text style={{ color: 'red' }}><Text style={{ fontFamily: 'Nunito-Bold', color: '#808488', fontSize: hp(1.8), textDecorationLine: 'line-through' }}>{item.originalPrice}</Text>{'  '}{item.totalDiscount}</Text>
                    </View>
                </View>
            </View>
        </View>
    );


    return (
        <ScrollView style={styles.container}>
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
                        <Text style={styles.headerText}>Item</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '23%' }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Heart_Icon height={hp(4)} />
                        </Pressable>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Share_Icon height={hp(4)} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ width: '90%', height: hp(27), marginHorizontal: '5%', borderRadius: 10, marginVertical: '5%' }}>
                    <Image source={require('../../../assets/specific_item.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                </View>
                <View style={{ paddingHorizontal: '5%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={styles.ratingContainer}>
                            <Ionicons name="star" size={18} color="#FFD700" />
                            <Ionicons name="star" size={18} color="#FFD700" />
                            <Ionicons name="star" size={18} color="#FFD700" />
                            <Ionicons name="star" size={18} color="#FFD700" />
                            <Ionicons name="star-half" size={18} color="#FFD700" />
                            <Text style={styles.ratingText}>56,890</Text>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.originalPrice}>₹2,999</Text>
                        <Text style={styles.discountedPrice}>₹1,500</Text>
                        <Text style={styles.discount}>50% Off</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>Wireless Bluetooth Mouse with USB Receiver</Text>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={styles.detailsTitle}>Item Details</Text>
                            <Text style={styles.detailsText}>
                                A high-quality wireless mouse compatible with PCs, laptops, and tablets. Features a sleek design, USB receiver, and adjustable DPI settings for smooth navigation. More.....
                            </Text>
                        </View>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2), color: '#000', marginBottom: 4, }}>Category: <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: hp(1.9), color: '#666' }}>Electronics</Text></Text>
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2), color: '#000', marginBottom: 4, }}>UPC #: <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: hp(1.7), color: '#666' }}>2233243432432</Text></Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Ionicons name="heart-outline" size={18} color="#000" />
                            <Text style={styles.buttonText}>My Fav</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>See More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: '3%' }}>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000', marginVertical: '5%' }}>SIMILAR ITEMS</Text>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                            <FlatList
                                data={myFavourites}
                                renderItem={renderMyFavourites}
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={2}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp(100),
        height: hp(100),
        backgroundColor: '#E6F3F5',
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
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginBottom: 16,
        width: '100%',
        paddingHorizontal: '5%',
        height: hp(6),
        marginVertical: '3%'
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
    },
    card: {
        margin: '1.5%',
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: '3%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    image: {
        width: "100%",
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
        color: '#000'
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    rating: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: "bold",
        color: '#000'
    },
    reviews: {
        marginLeft: 4,
        fontSize: 12,
        color: "#666"
    },
    heartButton: {
        position: "absolute",
        bottom: '2%',
        right: '1%',
        borderRadius: 15,
        padding: 5
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: hp(2.5),
        marginBottom: 8,
        color: 'black'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        fontFamily: 'Nunito-Regular',
        marginLeft: 4,
        color: '#666',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '1%',
        marginTop: '3.5%'
    },
    originalPrice: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#666',
        marginRight: 8,
    },
    discountedPrice: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#000',
        marginRight: 8,
    },
    discount: {
        fontFamily: 'Nunito-Bold',
        fontSize: 14,
        color: '#e63946',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryBtnContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: '1%',
        width: wp(45),
        height: hp(6.1),
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        flex: 1,
        height: hp(6.1),
        borderWidth: 1,
        borderColor: '#14BA9C'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f3f4',
        borderRadius: 4,
        flex: 1,
        marginHorizontal: '2%',
        elevation: 2,
        height: hp(7),
        marginVertical: '5%',
    },
    buttonText: {
        fontFamily: 'Nunito-SemiBold',
        marginLeft: 4,
        color: '#000'
    },
    ctgryText: {
        fontFamily: 'Nunito-SemiBold',
        color: '#000',
        fontSize: wp(5.1)
    },
    detailsContainer: {
        marginVertical: '6%',
    },
    detailsTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: hp(2.2),
        color: '#000',
        marginBottom: 4,
    },
    detailsText: {
        fontFamily: 'Nunito-Regular',
        fontSize: hp(1.8),
        color: '#666',
    },
    categoryContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#e0f2f1',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    categoryText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#00897b',
    },
});

export default SingleItemPage;
