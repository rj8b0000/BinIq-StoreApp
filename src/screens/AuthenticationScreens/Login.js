import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')
const Login = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={{ height: hp(7) }} />
                <View style={{ height: hp(15), width: wp(100), padding: '5%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(3.6), color: '#14BA9C' }}>Welcome Back</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', fontSize: hp(2), color: '#524B6B', marginTop: '5%' }}>Great to see you-{'\n'}
                        Let’s pick up you left off!</Text>
                </View>
                <View style={{ padding: '5%' }}>
                    <Text style={styles.label}>Email</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('HomeNavigataor')}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'transparent', justifyContent: 'center', marginVertical: '5%' }} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{ color: '#356899', fontSize: 17, fontFamily: 'Nunito-SemiBold', textAlign: 'center' }}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%' }}>
                    <View style={styles.line} />
                    <Text style={styles.text}>Or continue with</Text>
                    <View style={styles.line} />
                </View>
                <View style={{ marginHorizontal: '5%', marginVertical: '5%', height: height * 0.08, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: wp(17), height: '100%', backgroundColor: '#D9D9D93B', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginHorizontal: '2%' }}>
                        <Image source={require('../../../assets/google.jpg')} style={{ width: 45, height: 45 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '2%' }}>
                    <Text style={{ fontSize: hp(2.3), color: '#AFB0B6', textAlign: 'center', fontFamily: 'Nunito-SemiBold' }}>Have'nt an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ fontSize: hp(2.3), color: '#14BA9C', textAlign: 'center', fontFamily: 'Nunito-SemiBold', textDecorationLine: 'underline' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Login

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
        height: hp(100),
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

})