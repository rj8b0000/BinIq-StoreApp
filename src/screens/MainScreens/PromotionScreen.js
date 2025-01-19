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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Star, Heart } from "lucide-react-native";


const { width } = Dimensions.get('window');
const PromotionScreen = () => {
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
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PromotionScreen')}>
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
        )
    }
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
    ]


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
                        <Text style={styles.headerText}>Promotion</Text>
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
                    <Image source={require('../../../assets/promotion_img.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                </View>
                <View style={{ paddingHorizontal: '5%' }}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>Title - 50% Off</Text>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={styles.detailsTitle}>Description</Text>
                            <Text style={styles.detailsText}>
                                Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More
                            </Text>
                        </View>
                        <View style={{ marginVertical: '1%' }}>
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2), color: '#000', marginBottom: 4, }}>Tags - <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: hp(1.7), color: '#666' }}>"Summer Collection"</Text></Text>
                            <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2), color: '#000', marginBottom: 4, }}>Date and time -<Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: hp(1.7), color: '#666' }}>14/11/24, 12.30</Text></Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditPhotoScreen')}>
                            <Text style={styles.buttonText}>Edit</Text>
                            <FontAwesome name="edit" size={18} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Reactive Promotion</Text>
                            <MaterialCommunityIcons name="file-replace" size={18} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Delete</Text>
                            <AntDesign name="delete" size={18} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: '3%' }}>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(2.3), color: '#000000', marginVertical: '5%' }}>Similar Promotions</Text>
                        <View style={{ flex: 1, width: '100%', marginBottom: '10%' }}>
                            <FlatList
                                data={products}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                numColumns={3}
                                showsVerticalScrollIndicator={false}
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
        marginBottom: '5%',
    },
    image: {
        width: "100%",
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
        bottom: '4%',
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
        elevation: 2,
        height: hp(7),
        marginVertical: '5%',
        gap: 4,
        paddingHorizontal: '2%'
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

export default PromotionScreen;
