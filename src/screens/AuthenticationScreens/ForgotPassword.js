import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';

const { width, height } = Dimensions.get('window')
const ForgotPassword = () => {
    const navigation = useNavigation();
    const [isEmailSelected, setIsEmailSelected] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedValue, setFormattedValue] = useState(0);
    const phoneInput = useRef(null)
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={{ height: hp(7) }} />
                <View style={{ height: hp(15), width: wp(100), padding: '5%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(3.6), color: '#14BA9C' }}>Forgot Password?</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', fontSize: hp(2), color: '#524B6B', marginTop: '5%' }}>Enter your email or phone number, we will send you verification code.</Text>
                </View>
                <View style={{ alignItems: 'center', marginVertical: '10%' }}>
                    <Image source={require('../../../assets/forgot_pass.png')} style={{ width: wp(48), height: hp(18) }} />
                </View>
            </ImageBackground>
            {/* <View style={{ width: wp(85), height: hp(8), backgroundColor: '#DDF4F3', borderRadius: 10, alignSelf: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <View style={{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: '95%', backgroundColor: '#fff', height: hp(6.5), borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Nunito-Regular', color: '#0D0D26', fontSize: hp(2.3)}}>Email</Text>
                </View>
                </View>
                <View style={{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: '95%', backgroundColor: '#fff', height: hp(6.5), borderRadius: 5}}>

                </View>
                </View>
            </View>
            <View style={{ padding: '5%' }}>
                <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                    <TextInput
                        placeholder='johndoe@gmail.com'
                        style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                        placeholderTextColor={'gray'}
                    />
                </View>
            </View> */}
            <View style={styles.toggleContainer}>
                <TouchableOpacity
                    style={[styles.toggleButton, isEmailSelected && styles.activeToggle]}
                    onPress={() => setIsEmailSelected(true)}
                >
                    <Text style={styles.toggleText}>E-mail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.toggleButton, !isEmailSelected && styles.activeToggle]}
                    onPress={() => setIsEmailSelected(false)}
                >
                    <Text style={styles.toggleText}>Mobile Number</Text>
                </TouchableOpacity>
            </View>

            {isEmailSelected ? (
                // <TextInput
                //   style={styles.input}
                //   placeholder="Enter your email"
                //   keyboardType="email-address"
                // />
                <View style={{ padding: '5%' }}>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                </View>
            ) : (
                // <View style={styles.mobileInputContainer}>
                //   <Text style={styles.countryCode}>+91</Text>
                //   <TextInput
                //     style={styles.input}
                //     placeholder="Enter your mobile number"
                //     keyboardType="phone-pad"
                //   />
                // </View>
                <View style={{ padding: '5%', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(9), alignSelf: 'center', borderRadius: 8, paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setPhoneNumber(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            onPress={() => console.warn("Hii")}
                            //   containerStyle={{ width: "100%", height: '100%', borderRadius: 5, elevation: 100, backgroundColor: '#910E10' }}
                            textContainerStyle={{ backgroundColor: 'transparent' }}
                            autoFocus
                            placeholder='Phone Number'
                            withDarkTheme
                        />
                    </View>
                </View>
            )}

            <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('OTPEntry')}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Send Code</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ForgotPassword

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
        alignSelf: 'center',

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
        lineHeight: 50, // Aligns vertically with the input
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

})