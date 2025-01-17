import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

const { width, height } = Dimensions.get('window')
const OTPEntry = () => {
    const navigation = useNavigation();
    const [isEmailSelected, setIsEmailSelected] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedValue, setFormattedValue] = useState(0);

    const phoneInput = useRef(null)
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={{ height: hp(7) }} />
                <View style={{ height: hp(15), width: wp(100), padding: '5%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(3.6), color: '#14BA9C' }}>Enter OTP </Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', fontSize: hp(2), color: '#524B6B', marginTop: '5%' }}>Verification code has been send to your email/ number, Please verify!</Text>
                </View>
                <View style={{ width: '90%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', justifyContent: 'center', marginVertical: '10%' }}>
                    <OTPTextView
                        inputCount={5}
                        inputCellLength={1}
                        tintColor={'gray'}
                        textInputStyle={{ borderWidth: 0.4, borderBottomWidth: 1, backgroundColor: '#fff', borderRadius: 5 }}
                    />
                </View>
                <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('SuccessScreen')}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Submit</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={require('../../../assets/vector_2.png')} style={styles.vector2} />
        </View>
    )
}

export default OTPEntry

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: wp(40),
        height: hp(10.5),
    },
    vector: {
        flex: 1,
        width: wp(100),
        height: hp(50),
    },
    logoText: {
        fontFamily: 'Nunito-SemiBold',
        color: '#000',
        fontSize: hp(2.5)
    },
    cityVector: {
        position: 'absolute',
        width: wp(100),
        bottom: 0
    },
    label: {
        color: 'black',
        fontFamily: 'Nunito-SemiBold',
        fontSize: hp(2.2),
        marginTop: '3%'
    },
    gettingStarted: {
        backgroundColor: '#130160',
        width: '90%',
        height: hp(7),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#C0C0C0', // Gray color for the lines
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        color: '#A9A9A9', // Light gray color for the text
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(1),
        backgroundColor: '#DDF4F3',
        width: wp(85),
        height: hp(7.5),
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    toggleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: '82%',
        marginHorizontal: '2%'
    },
    activeToggle: {
        backgroundColor: '#fff',
    },
    toggleText: {
        fontFamily: 'Nunito-Regular',
        fontSize: hp(2),
        color: '#0D0D26'
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    mobileInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        marginRight: 10,
        fontSize: 16,
        lineHeight: 50,
    },
    sendCodeButton: {
        backgroundColor: '#4a90e2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    sendCodeText: {
        color: 'white',
        fontWeight: 'bold',
    },
    vector2: {
        flex: 1,
        width: wp(100),
        height: height * 0.5,
        position: 'absolute',
        bottom: 0,
        zIndex: -1
    },

})