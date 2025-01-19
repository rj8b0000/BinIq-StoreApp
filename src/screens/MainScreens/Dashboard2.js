import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import { Circle } from "react-native-progress"; // For circular progress
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Svg, { Line, Path } from "react-native-svg"; // For horizontal progress (e.g., Education Level)
import ProgressBar from "../../Components/ProgressBar";
import Folders from "../../../assets/dashboard_2.svg"
import BoldTick from '../../../assets/bold_tick.svg'
import GreenBoldTick from '../../../assets/GreenBoldTick.svg'

const Dashboard2 = ({ percentage = 70 }) => {
    const size = Dimensions.get('window').width * 0.2;
    const strokeWidth = wp(2);
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI;

    // Calculate the path for the semi-circle
    const semiCircle = `
      M ${strokeWidth / 2} ${center}
      A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${center}
    `;

    // Calculate the progress
    const progressLength = (circumference * (percentage / 100));
    const strokeDasharray = `${progressLength} ${circumference}`;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.greeting}>
                        Welcome, <Text style={styles.name}>Lee Carter</Text>
                    </Text>
                    <Text style={styles.subtext}>Customize your store's details to attract and engage customers.</Text>
                </View>
            </View>

            {/* Main Cards */}
            <ImageBackground source={require('../../../assets/hidden_find_dashboard.png')} style={styles.cardsContainer}>
                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: wp(30), height: wp(30), borderRadius: 50 }}>
                        <Image source={require('../../../assets/store_profile.png')} style={{ width: '100%', height: '100%' }} />
                    </View>
                </View>
                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '97%', alignSelf: 'center', height: '75%', flexDirection: 'column' }}>
                        <View style={{ height: '23%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '2%', width: '93%' }}>
                            <Text style={{ fontFamily: 'Roboto-SemiBold', borderColor: '#fff', color: '#14BA9C', fontSize: hp(3) }}>
                                Hidden Finds
                            </Text>
                            <GreenBoldTick width={20} />
                        </View>
                        <View style={{ height: '35%', flexDirection: 'row' }}>
                            <View style={{ width: '33%', height: '100%', paddingLeft: '1%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-ExtraBold', borderColor: '#fff', color: '#fff', fontSize: hp(2.5) }}>
                                    11K {'\n'}
                                    <Text style={{ fontSize: hp(1.3) }}>Followers</Text>
                                </Text>
                            </View>
                            <View style={{ width: '33%', height: '100%', paddingLeft: '1%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-ExtraBold', borderColor: '#fff', color: '#fff', fontSize: hp(2.5) }}>
                                    12K {'\n'}
                                    <Text style={{ fontSize: hp(1.3) }}>Likes</Text>
                                </Text>
                            </View>
                            <View style={{ width: '33%', height: '100%', paddingLeft: '1%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-ExtraBold', borderColor: '#fff', color: '#fff', fontSize: hp(2.5) }}>
                                    1.8M {'\n'}
                                    <Text style={{ fontSize: hp(1.3) }}>Viewers</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: '15%', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto-Thin', color: '#fff', fontSize: hp(1.5) }}>
                                www.hiddenfinds.com
                            </Text>
                        </View>
                        <View style={{ height: '23%', marginTop: '3%', justifyContent: 'center', width: '90%' }}>
                            <View style={{ width: '100%', height: '85%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#000', fontSize: hp(2), fontFamily: 'DMSans-SemiBold' }}>Edit Profile</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            {/* Bottom Cards */}
            <View style={styles.bottomCardsContainer}>
                {/* Current Plan */}
                <Folders width={'100%'} height={'100%'} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#f8f9fa",
        paddingVertical: 16,
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
    cardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginBottom: 16,
        width: '100%',
        height: hp(23),
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    card: {
        flex: 1,
        width: '33.3%',
        height: hp(23),
        backgroundColor: "#F2F5F8",
        borderRadius: 6,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        paddingVertical: '2.5%',
        alignItems: 'center'
    },
    uppercardTitle: {
        fontSize: wp(3.3),
        color: '#130160',
        fontFamily: 'Nunito-SemiBold'
        // marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: "#6c757d",
        marginTop: 16,
    },
    highlight: {
        color: "#4B9CD3",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#4B9CD3",
        paddingVertical: 10,
        borderRadius: 6,
        marginTop: 16,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    progressText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    bottomCardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // marginBottom: 16,
        width: '100%',
        height: hp(17)
    },
    smallCard: {
        // flex: 1,
        backgroundColor: "#F2F5F8",
        borderRadius: 6,
        padding: 10,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: "center",
        width: '26%',
        height: hp(15),
    },
    middleCard: {
        // flex: 1,
        backgroundColor: "#F2F5F8",
        borderRadius: 6,
        padding: 16,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: "center",
        width: '38%',
        height: hp(15),
    },
    smallCardTitle: {
        fontSize: 14,
        color: "#6c757d",
        marginBottom: 8,
    },
    smallCardValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },
    svg: {
        marginVertical: 8,
    },
    firstCardProgressBar: {
        marginTop: '5%',
        marginBottom: '5%'
    },
    graphDetailsView: {
        width: '100%',
        height: hp(2),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardText: {
        padding: '1%',
        paddingHorizontal: '3%'
    },
    card2Text: {
        paddingHorizontal: '5%'
    },
    cardButton: {
        backgroundColor: '#00B813',
        width: '100%',
        height: hp(3),
        margin: '10%',
        bottom: '10%',
        borderRadius: 5,
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A4B',
        marginBottom: 40,
    },
    progressContainer: {
        // position: 'absolute',
        alignItems: 'center',
        bottom: 3
    },
    percentageText: {
        position: 'absolute',
        bottom: 0,
        fontSize: wp(3.5),
        fontWeight: 'bold',
        color: '#000'
    },
    bottomcard2Title: {
        fontSize: wp(3.8),
        textAlign: 'center',
        color: '#130160',
        fontFamily: 'Nunito-SemiBold'
    }
});

export default Dashboard2;
